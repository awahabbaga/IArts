@foreach($photos as $photo)
<li class="item " id="img-{{$photo->id}}" style="background-image: url('{{$photo->tint}}')" title="{{$photo->title}}">
    <img class="lazyload" data-src="{{$photo->thumbnail}}" src="{{$photo->tint}}" height="2854" width="2201" />
    <span class="full">
        <span style="background-image: url('{{$photo->large}}')"></span>
    </span>
    <a class="open" href="/img-{{$photo->id}}" data-target="img-{{$photo->id}}">Open</a>
    <a class="close" href="/">Close</a>
    <a href="/img-{{$photo->id}}" data-target="img-{{$photo->id}}" class="next" title="Go to next photo">
        <span>Next</span>
    </a>
    @if(!$loop->first)
    @php
    $p = $photos[$loop->index - 1];
    @endphp
    <a href="{{route('photo.view', $p)}}" data-target="img-{{$p->id}}" class="previous" title="Go to previous photo">
        <span>Previous</span>
    </a>
    @endif
    @if(!$loop->last)
    @php
    $n = $photos[$loop->index + 1];
    @endphp
    <a href="{{route('photo.view', $n)}}" data-target="img-{{$n->id}}" class="next" title="Go to next photo">
        <span>Next</span>
    </a>
    @endif
    <ul class="meta">
        <li>{{$photo->title}}</li>
        <li>{{$loop->index+1}}/{{$loop->count}}</li>
        <!-- <li>{{ $photo->description}}</li> -->
    </ul>
</li>
@endforeach