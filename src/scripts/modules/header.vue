<template>
  <header 
    class="site-header"
    :class="{
      'site-header--light': !HEADER_BG,
      'site-header--dark': HEADER_BG,
      'site-header--is-expanded': mobileMenu}">
    <div class="wrapper">
        <div class="site-header--logo">
          <div class="site-header--logo--graphic icon--clear-view-escapes">
            Clear View Escapes
          </div><!--site header logo graphic-->
        </div><!--site header logo-->

        <div 
          @click="mobileMenuToggle" 
          class="site-header--menu-icon"
          :class="{'site-header--menu-icon--close-x': mobileMenu}">
          <div class="site-header--menu-icon--middle">

          </div><!--site header menu icon middle-->
        </div><!--site header menu icon-->

        <div 
          class="site-header--menu-content"
          :class="{'site-header--menu-content--is-visible': mobileMenu}">
          <div class="site-header--btn-container">
            <a @click="openModal" href="#" class="btn">Get in Touch</a>
          </div><!--btn container-->
          <nav class="primary-nav primary-nav--pull-right">
            <ul>
              <li><a href="/"><i class="fad fa-home"></i> Home</a></li>
              <li :class="{active: ABOUT_LNK, inactive: !ABOUT_LNK}"><a href="#our-beginning" id="our-beginning-link"><i class="fad fa-info-circle"></i> Our beginning</a></li>
              <li :class="{active: FEATURE_LNK, inactive: !FEATURE_LNK}"><a href="#features" id="features-link"><i class="fad fa-cog"></i> Features</a></li>
              <li :class="{active: TESTIMONIAL_LNK, inactive: !TESTIMONIAL_LNK}"><a href="#testimonials" id="testimonials-link"><i class="fad fa-medal"></i> Testimonials</a></li>
            </ul>
          </nav><!--primary nav-->
        </div><!--site header menu content-->
    </div><!--wrapper-->
  </header><!--header-->
</template>

<style>
@import '../../styles/base/var';
@import '../../styles/base/macro';
@import '../../styles/modules/wrapper';
@import '../../styles/modules/icon';
@import '../../styles/modules/btn';
@import '../../styles/modules/site-header';
@import '../../styles/modules/primary-nav';
@import '../../styles/modules/active';
</style>

<script>
  export default {
    props: ['HEADER_BG', 'ABOUT_LNK', 'FEATURE_LNK', 'TESTIMONIAL_LNK'],
    data() {
      return {
       mobileMenu: false
      }
    },
    methods: {
      openModal() {
        this.$emit('onModal');
      },
      mobileMenuToggle() {
        this.mobileMenu = !this.mobileMenu;
      }
    }
  }
</script>