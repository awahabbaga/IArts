<?php

namespace App\Http\Controllers;

use App\Photo;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $photos = Photo::all();
        // return $photos;
        return view('photo.index', compact('photos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('photo.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $data = validator($request->all(), [
            'title' => 'required',
            'description' => 'nullable|string',
            'image' => 'required|image'
        ])->validate();
        $fn = $request->file('image')->getClientOriginalName();
        //get filename without extension
        $filename = pathinfo($fn, PATHINFO_FILENAME);

        //get file extension
        $extension = $request->file('image')->getClientOriginalExtension();

        $filenametostore = $data['title'] . '_' . time() . '.' . $extension;
        $request->file('image')->storeAs('public/photos/original', $filenametostore);
        $request->file('image')->storeAs('public/photos/tint', $filenametostore);
        $request->file('image')->storeAs('public/photos/large', $filenametostore);
        $request->file('image')->storeAs('public/photos/thumbnail', $filenametostore);

        $thumbnail = public_path('storage/photos/thumbnail/' . $filenametostore);
        $this->createThumbnail($thumbnail, null, 300);
        $tint = public_path('storage/photos/tint/' . $filenametostore);
        $this->createThumbnail($tint, 1, 1);
        $large = public_path('storage/photos/large/' . $filenametostore);
        // $this->createThumbnail($large, 1, 1);
        $path = public_path('storage/photos/original/' . $filenametostore);


        $p = Photo::create([
            'title' => $data['title'],
            'description' => $data['description'] ?? "",
            'path' => $path,
            'large' => "",
            'tint' => "",
            'thumbnail' => "",
            'filename' => $filenametostore,
        ]);

        return redirect(route('photo.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function show(Photo $photo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function edit(Photo $photo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Photo $photo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Photo $photo)
    {
        //
    }

    /**
     * Create a thumbnail of specified size
     *
     * @param string $path path of thumbnail
     * @param int $width
     * @param int $height
     */
    public function createThumbnail($path, $width, $height)
    {
        $img = Image::make($path)->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
        $img->save($path);
    }
}
