@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 py-4">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>

            @foreach($configs as $gName => $group)
            <div class="card my-4">
                <div class="card-header">{{ Str::title($gName) ?: 'Autre'}}</div>
                <div class="card-body">

                    @foreach($group as $config)
                    <config-component key="{{$config['id']}}" skey="{{$config['key']}}" value="{{$config['value']}}" />
                    @endforeach
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
@endsection