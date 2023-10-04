<?php

namespace Kirby\Panel\Lab;

use Kirby\Template\Snippet as BaseSnippet;

class Snippet extends BaseSnippet
{

	public static function root(): string
	{
		return dirname(__DIR__, 2) . '/snippets';
	}
}
