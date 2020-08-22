<?php

use App\Config;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ConfigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $configs = [
            'site.title' => null,
            'site.url' => null,
            'site.type' => null,
            'site.image' => null,
            'site.description' => null,
            'username.twitter' => null,
            'username.facebook' => null,
            'username.instagram' => null,
        ];

        foreach ($configs as $key => $value) {
            $slpits = Str::of($key)->explode('.');
            $group = count($slpits) > 1 ?  $slpits[0] : null;
            Config::create(['key' =>$key, 'value'=>$value, 'group' =>$group]);
        }
    }
}