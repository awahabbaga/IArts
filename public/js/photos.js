(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="img-5158" style="background-image: url('/photos/tint/IMG_5158-65ba1d.jpg')" title="IMG_5158">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5158-ccf4df.jpg" src="/photos/tint/IMG_5158-65ba1d.jpg" height="2854" width="2201" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5158-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5158" data-target="img-5158">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5157" data-target="img-5157" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/122</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5157" style="background-image: url('/photos/tint/IMG_5157-65ba1d.jpg')" title="IMG_5157">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5157-ccf4df.jpg" src="/photos/tint/IMG_5157-65ba1d.jpg" height="2350" width="1507" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5157-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5157" data-target="img-5157">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5158" data-target="img-5158" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5156" data-target="img-5156" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/244</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5156" style="background-image: url('/photos/tint/IMG_5156-65ba1d.jpg')" title="IMG_5156">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5156-ccf4df.jpg" src="/photos/tint/IMG_5156-65ba1d.jpg" height="2612" width="2072" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5156-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5156" data-target="img-5156">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5157" data-target="img-5157" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5155" data-target="img-5155" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/239</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5155" style="background-image: url('/photos/tint/IMG_5155-65ba1d.jpg')" title="IMG_5155">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5155-ccf4df.jpg" src="/photos/tint/IMG_5155-65ba1d.jpg" height="3024" width="4032" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5155-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5155" data-target="img-5155">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5156" data-target="img-5156" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5154" data-target="img-5154" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/340</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5154" style="background-image: url('/photos/tint/IMG_5154-65ba1d.jpg')" title="IMG_5154">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5154-ccf4df.jpg" src="/photos/tint/IMG_5154-65ba1d.jpg" height="3024" width="4032" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5154-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5154" data-target="img-5154">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5155" data-target="img-5155" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5153" data-target="img-5153" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/544</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5153" style="background-image: url('/photos/tint/IMG_5153-65ba1d.jpg')" title="IMG_5153">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5153-ccf4df.jpg" src="/photos/tint/IMG_5153-65ba1d.jpg" height="3105" width="2512" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5153-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5153" data-target="img-5153">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5154" data-target="img-5154" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5152" data-target="img-5152" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="img-5152" style="background-image: url('/photos/tint/IMG_5152-65ba1d.jpg')" title="IMG_5152">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5152-ccf4df.jpg" src="/photos/tint/IMG_5152-65ba1d.jpg" height="2259" width="3236" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5152-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5152" data-target="img-5152">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5153" data-target="img-5153" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5151" data-target="img-5151" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5151" style="background-image: url('/photos/tint/IMG_5151-65ba1d.jpg')" title="IMG_5151">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5151-ccf4df.jpg" src="/photos/tint/IMG_5151-65ba1d.jpg" height="3254" width="2216" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5151-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5151" data-target="img-5151">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5152" data-target="img-5152" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5150" data-target="img-5150" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5150" style="background-image: url('/photos/tint/IMG_5150-65ba1d.jpg')" title="IMG_5150">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5150-ccf4df.jpg" src="/photos/tint/IMG_5150-65ba1d.jpg" height="3282" width="2307" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5150-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5150" data-target="img-5150">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5151" data-target="img-5151" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5149" data-target="img-5149" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/49</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5149" style="background-image: url('/photos/tint/IMG_5149-65ba1d.jpg')" title="IMG_5149">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5149-ccf4df.jpg" src="/photos/tint/IMG_5149-65ba1d.jpg" height="2517" width="3539" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5149-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5149" data-target="img-5149">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5150" data-target="img-5150" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5148" data-target="img-5148" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5148" style="background-image: url('/photos/tint/IMG_5148-65ba1d.jpg')" title="IMG_5148">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5148-ccf4df.jpg" src="/photos/tint/IMG_5148-65ba1d.jpg" height="2324" width="3025" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5148-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5148" data-target="img-5148">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5149" data-target="img-5149" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5147" data-target="img-5147" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/82</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5147" style="background-image: url('/photos/tint/IMG_5147-65ba1d.jpg')" title="IMG_5147">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5147-ccf4df.jpg" src="/photos/tint/IMG_5147-65ba1d.jpg" height="3584" width="2630" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5147-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5147" data-target="img-5147">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5148" data-target="img-5148" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5146" data-target="img-5146" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5146" style="background-image: url('/photos/tint/IMG_5146-65ba1d.jpg')" title="IMG_5146">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5146-ccf4df.jpg" src="/photos/tint/IMG_5146-65ba1d.jpg" height="2148" width="2981" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5146-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5146" data-target="img-5146">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5147" data-target="img-5147" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5145" data-target="img-5145" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5145" style="background-image: url('/photos/tint/IMG_5145-65ba1d.jpg')" title="IMG_5145">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5145-ccf4df.jpg" src="/photos/tint/IMG_5145-65ba1d.jpg" height="3307" width="2352" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5145-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5145" data-target="img-5145">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5146" data-target="img-5146" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5144" data-target="img-5144" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5144" style="background-image: url('/photos/tint/IMG_5144-65ba1d.jpg')" title="IMG_5144">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5144-ccf4df.jpg" src="/photos/tint/IMG_5144-65ba1d.jpg" height="2018" width="2964" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5144-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5144" data-target="img-5144">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5145" data-target="img-5145" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5142" data-target="img-5142" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5142" style="background-image: url('/photos/tint/IMG_5142-65ba1d.jpg')" title="IMG_5142">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5142-ccf4df.jpg" src="/photos/tint/IMG_5142-65ba1d.jpg" height="3122" width="1987" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5142-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5142" data-target="img-5142">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5144" data-target="img-5144" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5141" data-target="img-5141" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5141" style="background-image: url('/photos/tint/IMG_5141-65ba1d.jpg')" title="IMG_5141">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5141-ccf4df.jpg" src="/photos/tint/IMG_5141-65ba1d.jpg" height="2189" width="2844" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5141-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5141" data-target="img-5141">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5142" data-target="img-5142" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5140" data-target="img-5140" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5140" style="background-image: url('/photos/tint/IMG_5140-65ba1d.jpg')" title="IMG_5140">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5140-ccf4df.jpg" src="/photos/tint/IMG_5140-65ba1d.jpg" height="1842" width="2289" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5140-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5140" data-target="img-5140">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5141" data-target="img-5141" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5139" data-target="img-5139" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/89</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5139" style="background-image: url('/photos/tint/IMG_5139-65ba1d.jpg')" title="IMG_5139">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5139-ccf4df.jpg" src="/photos/tint/IMG_5139-65ba1d.jpg" height="2177" width="2904" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5139-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5139" data-target="img-5139">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5140" data-target="img-5140" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5138" data-target="img-5138" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5138" style="background-image: url('/photos/tint/IMG_5138-65ba1d.jpg')" title="IMG_5138">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5138-ccf4df.jpg" src="/photos/tint/IMG_5138-65ba1d.jpg" height="2489" width="3797" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5138-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5138" data-target="img-5138">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5139" data-target="img-5139" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5136" data-target="img-5136" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/40</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5136" style="background-image: url('/photos/tint/IMG_5136-65ba1d.jpg')" title="IMG_5136">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5136-ccf4df.jpg" src="/photos/tint/IMG_5136-65ba1d.jpg" height="2539" width="3424" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5136-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5136" data-target="img-5136">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5138" data-target="img-5138" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5135" data-target="img-5135" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5135" style="background-image: url('/photos/tint/IMG_5135-65ba1d.jpg')" title="IMG_5135">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5135-ccf4df.jpg" src="/photos/tint/IMG_5135-65ba1d.jpg" height="2477" width="3357" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5135-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5135" data-target="img-5135">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5136" data-target="img-5136" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5134" data-target="img-5134" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/35</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5134" style="background-image: url('/photos/tint/IMG_5134-65ba1d.jpg')" title="IMG_5134">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5134-ccf4df.jpg" src="/photos/tint/IMG_5134-65ba1d.jpg" height="2305" width="3224" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5134-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5134" data-target="img-5134">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5135" data-target="img-5135" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-5133" data-target="img-5133" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/44</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-5133" style="background-image: url('/photos/tint/IMG_5133-65ba1d.jpg')" title="IMG_5133">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_5133-ccf4df.jpg" src="/photos/tint/IMG_5133-65ba1d.jpg" height="1826" width="3696" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_5133-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-5133" data-target="img-5133">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-5134" data-target="img-5134" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/foto" data-target="foto" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/59</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
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
`);