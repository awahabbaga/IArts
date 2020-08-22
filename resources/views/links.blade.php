<ul class="links">
    <li class="link"><a rel="me" href="{{route('about')}}" title="About Me">About Me</a></li>
    <!-- <li class="link"><a rel="me" href="https://twitter.com/" title="@username on Twitter">Twitter</a></li> -->
    <!-- <li class="link"><a rel="me" href="https://facebook.com/" title="@username on Facebook">Facebook</a></li> -->
    <li class="link"><a rel="me" href="https://instagram.com/" title="@username on Facebook">Instagram</a></li>
    @if (Route::has('login'))
    @auth
    <li class="link"><a class="link" href="{{ url('/home') }}">Home</a></li>
    @else
    <li class="link"><a class="link" href="{{ route('login') }}">Login</a></li>
    @endauth

    @endif
</ul>