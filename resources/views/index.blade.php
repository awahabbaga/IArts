<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title data-title="maxvoltar.photo">maxvoltar.photo</title>
  <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="http://localhost:4000feed.xml">
  <meta property="og:title" content="maxvoltar.photo">
  <meta property="og:type" content="website">
  <meta property="og:url" content="http://localhost:4000/">
  <meta property="og:image" content="http://localhost:4000social-preview.png">
  <meta property="og:site_name" content="maxvoltar.photo">
  <meta property="og:description" content="@maxvoltar's minimalistic, self-hosted photo stream.">
  <meta name="thumbnail" content="http://localhost:4000social-preview.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="maxvoltar">
  <meta name="twitter:title" content="maxvoltar.photo">
  <meta name="twitter:description" content="@maxvoltar's minimalistic, self-hosted photo stream.">
  <meta name="twitter:image:src" content="http://localhost:4000social-preview.png">
  <meta name="description" content="@maxvoltar's minimalistic, self-hosted photo stream.">
  <script type="text/javascript" src="/js/lazy-loading.js"></script>
  <link rel="stylesheet" type="text/css" media="screen" href="/css/master.css" />
  <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
  <link rel="mask-icon" href="favicon.svg" />
</head>

<body>
  <ul class="grid" id="target">
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
      $p = $photos[$loop->index - 1];
      <a href="/img-5158" data-target="img-5158" class="previous" title="Go to previous photo">
        <span>Previous</span>
      </a>
      @endif
      @if(!$loop->last)
      $n = $photos[$loop->index + 1];
      <a href="/img-5156" data-target="img-5156" class="next" title="Go to next photo">
        <span>Next</span>
      </a>
      @endif
        <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/122</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
    </li>
    @endforeach

    <li class="item " id="foto" style="background-image: url('/photos/tint/foto-65ba1d.jpg')" title="foto">
      <img class="lazyload" data-src="/photos/thumbnail/foto-ccf4df.jpg" src="/photos/tint/foto-65ba1d.jpg" height="4032" width="3024" />
      <span class="full">
        <span style="background-image: url('/photos/large/foto-686656.jpg')"></span>
      </span>
      <a class="open" href="/foto" data-target="foto">Open</a>
      <a class="close" href="/">Close</a>
      <a href="/img-5133" data-target="img-5133" class="previous" title="Go to previous photo">
        <span>Previous</span>
      </a>
      <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
    </li>
  </ul>
  <ul class="links">
    <!-- You can add links (to your social media profiles for example) below -->
    <li class="rss"><a rel="alternate" type="application/rss+xml" href="http://localhost:4000feed.xml" title="RSS Feed">RSS Feed</a></li>
    <li class="github"><a rel="me" href="https://github.com/maxvoltar/photo-stream" title="Fork on Github">Github</a></li>
    <li class="link"><a rel="me" href="https://twitter.com/maxvoltar" title="@maxvoltar on Twitter">Twitter</a></li>
    <!-- <li class="link"><a rel="me" href="https://github.com/maxvoltar" title="@maxvoltar on Github">Github</a></li> -->
    <!-- <li class="link"><a rel="me" href="https://instagram.com/maxvoltar" title="@maxvoltar on Instagram">Instagram</a></li> -->
    @if (Route::has('login'))

    @auth
    <li class="link"><a class="link" href="{{ url('/home') }}">Home</a></li>
    @else
    <li class="link"><a class="link" href="{{ route('login') }}">Login</a></li>
    @endauth

    @endif
  </ul>
  <script>
    const ESCAPE = 27;
    const RIGHT = 39;
    const LEFT = 37;
    const TARGET_CLASS = 'target';

    const clickNavigationButton = (buttonClass) => {
      const id = window.history.state && window.history.state.id;
      if (id) {
        const selector = `#${id} ${buttonClass}`;
        const button = document.querySelector(selector);
        button && button.click();
      }
    }

    const openPhoto = (id, href) => {
      const photo = document.getElementById(id);
      const title = photo.getAttribute('title');
      removeTargetClass();
      photo.classList.add(TARGET_CLASS);
      document.title = title;
      if (href) {
        window.history.pushState({
          id: id
        }, '', href);
      }
    }

    const closePhoto = (href) => {
      const title = document.querySelector('head title').getAttribute('data-title');
      removeTargetClass();
      document.title = title;
      if (href) {
        window.history.pushState({}, '', href);
      }
    }

    const removeTargetClass = () => {
      let targets = document.querySelectorAll(`.${TARGET_CLASS}`);
      targets.forEach((target) => {
        target.classList.remove(TARGET_CLASS);
      });
    }

    const handleClick = (selector, event, callback) => {
      if (event.target.matches(selector)) {
        callback();
        event.preventDefault();
      }
    }

    const handleKey = (keyCode, event, callback) => {
      if (event.keyCode === keyCode) {
        callback();
        event.preventDefault();
      }
    }

    window.onpopstate = function(event) {
      if (event.state && event.state.id) {
        const id = event.state.id;
        openPhoto(id, null);
      } else {
        closePhoto(null);
      }
    }

    document.addEventListener('keydown', (event) => {
      handleKey(ESCAPE, event, () => {
        clickNavigationButton('.close');
      });

      handleKey(RIGHT, event, () => {
        clickNavigationButton('.next');
      });

      handleKey(LEFT, event, () => {
        clickNavigationButton('.previous');
      });
    });

    document.addEventListener('click', (event) => {
      handleClick('[data-target][href]', event, () => {
        const id = event.target.getAttribute('data-target');
        const href = event.target.getAttribute('href');
        openPhoto(id, href);
      });

      handleClick('[href].close', event, () => {
        const href = event.target.getAttribute('href');
        closePhoto(href);
      });
    });

    lazyload();
  </script>
</body>

</html>