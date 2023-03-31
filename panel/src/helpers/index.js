import clipboard from "./clipboard.js";
import color from "./color.js";
import debounce from "./debounce.js";
import embed from "./embed.js";
import field from "./field.js";
import focus from "./focus.js";
import isComponent from "./isComponent.js";
import isUploadEvent from "./isUploadEvent.js";
import keyboard from "./keyboard.js";
import object from "./object.js";
import ratio from "./ratio.js";
import sort from "./sort.js";
import string from "./string.js";
import upload from "./upload.js";
import url from "./url.js";

import "./regex.js";

export default {
	install(Vue) {
		/**
		 * Array.sortBy()
		 */
		Array.prototype.sortBy = function (sortBy) {
			const sort = Vue.prototype.$helper.sort();
			const options = sortBy.split(" ");
			const field = options[0];
			const direction = options[1] || "asc";

			return this.sort((a, b) => {
				const valueA = String(a[field]).toLowerCase();
				const valueB = String(b[field]).toLowerCase();

				if (direction === "desc") {
					return sort(valueB, valueA);
				} else {
					return sort(valueA, valueB);
				}
			});
		};

		/**
		 * Array.split()
		 */
		Array.prototype.split = function (delimiter) {
			return this.reduce(
				(entries, entry) => {
					if (entry === delimiter) {
						entries.push([]);
					} else {
						entries[entries.length - 1].push(entry);
					}
					return entries;
				},
				[[]]
			);
		};

		Vue.prototype.$helper = {
			clipboard,
			clone: object.clone,
			color,
			embed,
			focus,
			isComponent,
			isUploadEvent,
			debounce,
			field,
			keyboard,
			object,
			pad: string.pad,
			ratio,
			slug: string.slug,
			sort,
			string,
			upload,
			url,
			uuid: string.uuid
		};

		Vue.prototype.$esc = string.escapeHTML;
	}
};
