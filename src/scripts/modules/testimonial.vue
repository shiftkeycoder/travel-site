<template>
  <section 
    id="testimonials" 
    class="page-section page-section--no-b-padding-until-large page-section--testimonials lazyload"  
    data-matching-link="#testimonials-link">
    <div 
      id="testimonial-waypoint"
      v-waypoint="{ active: true, callback: testimonialWaypoint, options: intersectionOptions }"></div>
    <div class="wrapper wrapper--no-padding-until-large">
      <h2 class="section-title section-title--blue">
        <span class="icon icon--comment section-title--icon"></span>
            Real <strong>Testimonials</strong></h2>
        <div 
          class="row row--gutters row--gutters-small row--equal-height-at-large row--t-padding generic-content-container"
          :class="{'reveal--hidden': testimonial.isHidden,'reveal--fade-in': testimonial.isActive}">
          <div class="row--large-4">
              <div class="testimonial">
                <div class="testimonial--photo">
                  <img class="lazyload" sizes="160px"
                    srcset="images/testimonial-jane.jpg 160w, images/testimonial-jane-hi-dpi.jpg 320w"
                    alt="Jane Doe">
                </div><!--testimonial photo-->
                <h3 class="testimonial--title">Jane Doe</h3>
                  <h4 class="testimonial--subtitle">9 Time Escaper</h4>
                    <p>
                        &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    	                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est                       laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et                       dolore magna aliqua.&rdquo;
                    </p>
              </div><!--testimonial-->
          </div><!--row large 4-->
          <div class="row--large-4">
              <div class="testimonial">
                <div class="testimonial--photo">
                  <img class="lazyload" sizes="160px"
                  srcset="images/testimonial-john.jpg 160w, images/testimonial-john-hi-dpi.jpg 320w"
                  alt="John Smith">
                </div>
                <h3 class="testimonial--title">John Smith</h3>
                    <h4 class="testimonial--subtitle">4 Time Escaper</h4>
                        <p>
                            &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 			 							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 	 							est laborum. Lorem ipsum dolor sit amet, consectetur.&rdquo;
                        </p>
              </div><!--testimonial-->
          </div><!--row large 4-->
          <div class="row--large-4">
            <div class="testimonial testimonial--last">
              <div class="testimonial--photo">
                <img class="lazyload" sizes="160px"
                srcset="images/testimonial-cat.jpg 160w, images/testimonial-cat-hi-dpi.jpg 320w"
                alt="Cat McKitty">
              </div><!--testimonial photo-->
              <h3 class="testimonial--title">Cat McKitty</h3>
                  <h4 class="testimonial--subtitle">6 Time Escaper</h4>
                      <p>
                        &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.&rdquo;
                      </p>
            </div><!--testimonial testimonial last-->
          </div><!--row large 4-->
        </div>
    </div><!--wrapper-->
  </section><!--testimonials-->
</template>

<style>
  @import '../../styles/base/var';
  @import '../../styles/base/macro';
  @import '../../styles/modules/testimonial';
</style>

<script>
  export default {
    data() {
     return {
        intersectionOptions: {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: [0.90, 0.10] // [0.25, 0.75] if you want a 25% offset!
        }, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        testimonial: {
          isHidden:true,
          isActive: false
        }
     }
    },
    methods: {
      testimonialWaypoint ({ going, direction }) {
        // going: in, out
        // direction: top, right, bottom, left
        if (going === this.$waypointMap.GOING_IN) {
          this.testimonial.isHidden = false;
          this.testimonial.isActive = true;
        }
      }
  }
  }
</script>