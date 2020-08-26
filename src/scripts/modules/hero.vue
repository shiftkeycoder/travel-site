<template>
  <section class="large-hero">
    <picture>
        <source
          srcset="images/hero--large.jpg 1920w, images/hero--large-hi-dpi.jpg 3840w"
            media="(min-width: 1380px)">
        <source
          srcset="images/hero--medium.jpg 1380w, images/hero--medium-hi-dpi.jpg 2760w"
            media="(min-width: 990px)">
        <source
          srcset="images/hero--small.jpg 990w, images/hero--small-hi-dpi.jpg 1980w"
            media="(min-width: 640px)">
        <img
          srcset="images/hero--smaller.jpg 640w, images/hero--smaller-hi-dpi.jpg 1280w"
            alt="costal view of ocean and mountains"
            class="large-hero--image">
    </picture>
    <div class="large-hero--text-content">
      <div class="wrapper">
        <h1 class="large-hero--title">Your clarity.</h1>
        <h2 class="large-hero--subtitle">One trip away.</h2>
        <p class="large-hero--description">We create soul restoring journeys that inspire you to be you.</p>
        <p><a href="#" class="btn btn--orange btn--large open-modal">Get Started Today</a></p>
      </div><!--wrapper-->
      </div><!--large hero text content-->
  </section><!--large hero-->
</template>

<style>
@import '../../styles/base/var';
@import '../../styles/base/macro';
@import '../../styles/modules/large-hero';
</style>

<script>
export default {
  
}
</script>