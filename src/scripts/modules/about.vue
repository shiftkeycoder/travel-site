<template>
  <section 
    id="our-beginning" 
    class="page-section" 
    data-matching-link="#our-beginning-link">
    <div class="wrapper">
      <h2 class="headline headline--centered headline--light headline--b-margin-small">
          The first trip we planned <b>was our own</b>.
      </h2>
      <h3 class="headline headline--centered
        headline--light headline--orange
        headline--small headline--narrow
        headline--b-margin-large">
            Ever since, we&rsquo;ve been working to make travel <b>better for everyone</b>.
      </h3>
      <div 
        class="wrapper wrapper--medium wrapper--b-margin"
        v-lazy-container="{selector: 'img'}">
        <img data-src="images/first-trip.jpg" sizes="(min-width: 976px) 976px, 100vw"
        srcset="images/first-trip.jpg 976w, images/first-trip-hi-dpi.jpg 1952w"
        alt="Couple walking down a street.">
      </div><!--wrapper-->
      <div 
        id="about-waypoint" 
        v-waypoint="{ active: true, callback: aboutWaypoint, options: intersectionOptions }"></div>
      <div class="row row--gutters">
        <div class="row--medium-4 row--medium-4--larger row--b-margin-until-medium">
          <picture v-lazy-container="{selector: 'img'}">
            <source sizes="404px"
              srcset="images/our-start.jpg 404w, images/our-start-hi-dpi.jpg 808w"
              media="(min-width: 1020px)">
            <source sizes="320px"
              srcset="images/our-start-portrait.jpg 382w, images/our-start-portrait-hi-dpi.jpg 764w"
              media="(min-width: 800px)">
            <img data-src="images/our-start-landscape.jpg"  srcset="images/our-start-landscape.jpg 800w, images/our-start-landscape-hi-dpi.jpg 1600w"                    
              alt="Our founder, Jane Doe" >
          </picture>
        </div><!--row medium 4-->
        <div class="row--medium-8 row--medium-8--smaller">
            <div class="generic-content-container">
              <h2 class="headline headline--no-t-margin">Here&rsquo;s how we got started&hellip;</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, <a href="#">quis nostrud exercitation</a> ullamco laboris                         
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse                         
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa                         
                  qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate velit esse cillum dolore eu fugiat                      
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit                      
                anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor                      
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                      
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est                      
                laborum velit esse cillum <strong>dolore eu fugiat.</strong>
              </p>
            </div><!--generic content container-->
        </div><!--row medium 8-->
      </div><!--row row gutters-->
      </div><!--wrapper-->
  </section><!--our beginning-->
</template>
<style>
  @import '../../styles/base/var';
  @import '../../styles/base/macro';
  @import '../../styles/modules/page-section';
  @import '../../styles/modules/row';
  @import '../../styles/modules/headline';
  @import '../../styles/modules/generic-content';
</style>

<script>
  export default {
    data() {
    return {
       // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0.10, 0.90]// [0.25, 0.75] if you want a 25% offset!
      }  
     }
  },
  methods: {
     aboutWaypoint ({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        this.$emit('onScrollUp');
      }
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.$emit('onScrollDown');
      }
      if (going === this.$waypointMap.GOING_IN) {
        this.$emit('onE1In');
      }
      if (going === this.$waypointMap.GOING_OUT) {
        this.$emit('onE1Out');
      }
    }
  },
  computed: {}
  }
</script>