<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title data-title="maxvoltar.photo">{{$photo->title}}</title>
  <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="http://localhost:4000feed.xml">
  <meta property="og:title" content="{{$photo->title}}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="http://localhost:4000/img-{{$photo->id}}/">
  <meta property="og:image" content="http://localhost:4000/photos/large/IMG_5133-686656.jpg">
  <meta property="og:site_name" content="maxvoltar.photo">
  <meta property="og:description" content="@maxvoltar's minimalistic, self-hosted photo stream.">
  <meta name="thumbnail" content="http://localhost:4000/photos/large/IMG_5133-686656.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="maxvoltar">
  <meta name="twitter:title" content="IMG_5133">
  <meta name="twitter:description" content="@maxvoltar's minimalistic, self-hosted photo stream.">
  <meta name="twitter:image:src" content="http://localhost:4000/photos/large/IMG_5133-686656.jpg">
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
    <li class="item target" id="img-{{$photo->id}}" style="background-image: url('{{$photo->tint}})" title="{{$photo->title}}">
      <img class="lazyload" data-src="{{$photo->thumbnail}}" src="{{$photo->tint}}" height="1826" width="3696" />
      <span class="full">
        <span style="background-image: url('{{$photo->large}}')"></span>
      </span>
      <a class="open" href="/img-{{$photo->id}}" data-target="img-{{$photo->id}}">Open</a>
      <a class="close" href="/">Close</a>
      <ul class="meta">
        <li>{{$photo->title}}</li>
        <li>{{$photo->description}}</li>
      </ul>
    </li>
  </ul>
  @include('links')
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
  <script src="/js/photos.js" data-photo-id="img-{{$photo->id}}" data-photo-url="/img-{{$photo->id}}" data-target-id="target"></script>
</body>

</html>