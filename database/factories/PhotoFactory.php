<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Photo;
use Faker\Generator as Faker;

$factory->define(Photo::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
        // 'slug' => $faker->slug(),
        'description' => $faker->realText(),
        'path' => $faker->imageUrl(),
        'tint' => $faker->imageUrl(1, 1),
        'large' => $faker->imageUrl(),
        'thumbnail' => $faker->imageUrl(200, 200),
    ];
});
