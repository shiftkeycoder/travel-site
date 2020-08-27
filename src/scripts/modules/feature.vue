<template>
 <section 
  id="features" class="page-section page-section--blue" 
  data-matching-link="#features-link" 
  v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
  <div class="wrapper">
    <h2 
      class="section-title">
      <span class="section-title__icon"> 
        <img class="section-title__img" src="icons/star.svg" alt="Star"> 
      </span> 
      Our <strong>Features</strong>
    </h2>

    <div class="row row--gutters-large generic-content-container">
        <div class="row--medium-6">
          <div class="feature-item" 
            :class="{'reveal--hidden': feature.isHidden, 'reveal--fade-in': feature.isActive}">
            <span class="icon--rain feature-item--icon"></span>
            <h3 class="feature-item--title">We&rsquo;ll Watch the Weather</h3>
            <p>Download our app and we&rsquo;ll send you a notice if it&rsquo;s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.</p>
          </div>
          <div class="feature-item" 
            :class="{'reveal--hidden': feature.isHidden,'reveal--fade-in': feature.isActive}">
            <span class="icon--globe feature-item--icon"></span>
            <h3 class="feature-item--title">Global Guides</h3>
            <p>We&rsquo;ve scoured the entire planet for the best retreats and beautiful vistas. If there&rsquo;s a corner of the world you want to escape to we know the most scenic and inspiring locations.</p>
          </div>
        </div>
        <div class="row--medium-6">
          <div class="feature-item" 
            :class="{'reveal--hidden': feature.isHidden,'reveal--fade-in': feature.isActive}">
            <span class="icon--wifi feature-item--icon"></span>
            <h3 class="feature-item--title">Wi-Fi Waypoints</h3>
            <p>We only send you on trips to places we can personally vouch for as being amazing. Which means we&rsquo;ve mapped out where local wi-fi spots are and marked them in our app&rsquo;s map view.</p>
          </div>
          <div class="feature-item" 
            :class="{'reveal--hidden': feature.isHidden,'reveal--fade-in': feature.isActive}">
            <span class="icon--fire feature-item--icon"></span>
            <h3 class="feature-item--title">Survival Kit</h3>
            <p>Everytime you book an escape with us we send you a survival kit with the finest materials. The kit will allow you to setup a tent, start a fire, scratch your own back and lower your taxes.</p>
          </div>
        </div>
    </div>
  </div>
 </section> 
</template>
<style>
  @import '../../styles/base/var';
  @import '../../styles/base/macro';
  @import '../../styles/modules/section-title';
  @import '../../styles/modules/feature-item';
</style>

<script>
  export default {
    data() {
     return {
        intersectionOptions: {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: [0.50, 0.75] // [0.25, 0.75] if you want a 25% offset!
        }, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        feature: {
          isHidden:true,
          isActive: false
        }
     }
    },
    methods: {
      onWaypoint ({ going, direction }) {
        // going: in, out
        // direction: top, right, bottom, left
        if (going === this.$waypointMap.GOING_IN) {
          this.feature.isHidden = false;
          this.feature.isActive = true;
        }
      }
  }
}
</script>