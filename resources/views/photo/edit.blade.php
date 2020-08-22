@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Ajouter une photo') }}

                </div>

                <div class="card-body">
                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif
                    <form method="POST" action="{{route('photo.store')}}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="title">Titre</label>
                            <input type="text" class="form-control" name="title" value="{{$photo['title']}}" id="title" placeholder="Titre">
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" rows="3" name="descripton">{{$photo['description']}}</textarea>
                        </div>
                        <!-- <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control-file" id="image" name="image" accept="image/*">
                        </div> -->
                        <button type="submit" class="btn btn-primary">Mise a jour</button>
                        <button class="btn btn-danger" onclick="event.preventDefault();
                                                     document.getElementById('delete-form').submit();">Delete</button>




                    </form>
                    <form id="delete-form" action="{{ route('photo.destroy', $photo) }}" method="POST" style="display: none;">
                        @method('delete')
                        @csrf
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection