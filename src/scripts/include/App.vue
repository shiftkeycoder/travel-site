<template>
  <div>
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-feature></app-feature>
    <app-testimonial></app-testimonial>
    <app-footer></app-footer>
    <app-modal></app-modal>
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
      msg: "Hello World",
    };
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

