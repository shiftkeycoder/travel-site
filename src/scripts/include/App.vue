<template>
  <div>
    <app-header 
      :HEADER_BG="headerBG"
      :ABOUT_LNK="aboutLink"
      :FEATURE_LNK="featureLink"
      :TESTIMONIAL_LNK="testimonialLink"
      @onModal="modal = true"></app-header>
    <app-hero></app-hero>
    <app-about
      @onScrollUp="headerBG = false"
      @onScrollDown="headerBG = true"
      @onE1In="aboutLink = true"
      @onE1Out="aboutLink = false"
      ></app-about>
    <app-feature 
      @onE2In="featureLink = true"
      @onE2Out="featureLink = false"
      ></app-feature>
    <app-testimonial 
      @onE3In="testimonialLink = true"
      @onE3Out="testimonialLink = false"></app-testimonial>
    <app-footer @onModal="modal = true" ></app-footer>
    <app-modal 
      :MODAL="modal"
      @onCloseModal="modal = false"></app-modal>
  </div>
</template>
<style>
/* ---GLOBAL STYLE RULES--- */

@import "../../styles/base/var";
@import "../../styles/base/macro";
@import "../../styles/base/global";

/* ---FONTAWESOME STYLE RULES--- */
@import "../../styles/fonts/all";
@import "../../styles/fonts/brands";
@import "../../styles/fonts/duotone";
@import "../../styles/fonts/fontawesome";
@import "../../styles/fonts/light";
@import "../../styles/fonts/regular";
@import "../../styles/fonts/solid";
@import "../../styles/fonts/svg-with-js";
@import "../../styles/fonts/v4-shims";

/* ---CUSTOM STYLE RULES--- */
@import "../../styles/modules/reveal";
</style>
<script>
import appHeader from "../modules/header.vue";
import appHero from '../modules/hero.vue';
import appAbout from '../modules/about.vue';
import appFeature from '../modules/feature.vue';
import appTestimonial from '../modules/testimonial.vue';
import appFooter from '../modules/footer.vue';
import appModal from '../modules/modal.vue';
export default {
  data() {
    return {
      headerBG : false,
      modal: false,
      aboutLink: false,
      featureLink: false,
      testimonialLink: false
     }
  },
  components: {
    "app-header": appHeader,
    "app-hero": appHero,
    "app-about": appAbout,
    "app-feature": appFeature,
    "app-testimonial": appTestimonial,
    "app-footer": appFooter,
    "app-modal": appModal
  },
  computed: {},
  methods: {},
};
</script>

