<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'path', 'large', 'thumbnail', 'tint', 'filename'
    ];


    public function getLargeAttribute($value)
    {
        return $value ?: "storage/photos/large/".$this->filename ;
    }

    public function getTintAttribute($value)
    {
        return $value ?: "storage/photos/tint/".$this->filename ;
    }

    public function getThumbnailAttribute($value)
    {
        return $value ?: "storage/photos/thumbnail/".$this->filename ;
    }
}
