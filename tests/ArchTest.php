<?php

use Symfony\Component\Finder\Finder;

arch()->preset()->php()->ignoring(['dd', 'dump']);

arch()->preset()->laravel();
arch()->preset()->relaxed();
arch()->preset()->security()->ignoring(['array_rand', 'parse_str', 'mt_rand', 'uniqid', 'sha1']);

arch('annotations')
    ->expect('App')
    ->toUseStrictEquality()
    ->toHavePropertiesDocumented()
    ->toHaveMethodsDocumented();

// Allow test classes in test directories
arch('allow test classes in test directories')
    ->expect('Tests')
    ->toExtend('Tests\TestCase');
