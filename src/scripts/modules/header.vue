<template>
  <header 
    class="site-header"
    :class="{
      'site-header--light': !HEADER_BG,
      'site-header--dark': HEADER_BG}">
    <div class="wrapper">
        <div class="site-header--logo">
          <div class="site-header--logo--graphic icon--clear-view-escapes">
            Clear View Escapes
          </div><!--site header logo graphic-->
        </div><!--site header logo-->

        <div class="site-header--menu-icon">
          <div class="site-header--menu-icon--middle">

          </div><!--site header menu icon middle-->
        </div><!--site header menu icon-->

        <div class="site-header--menu-content">
          <div class="site-header--btn-container">
            <a @click="openModal" href="#" class="btn open-modal">Get in Touch</a>
          </div><!--btn container-->
          <nav class="primary-nav primary-nav--pull-right">
            <ul>
              <li><a href="#our-beginning" id="our-beginning-link">Our beginning</a></li>
              <li><a href="#features" id="features-link">Features</a></li>
              <li><a href="#testimonials" id="testimonials-link">Testimonials</a></li>
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
</style>

<script>
  export default {
    props: ['HEADER_BG'],
    data() {
      return {
       
      }
    },
    methods: {
      openModal() {
        this.$emit('onModal');
      }
    }
  }
</script>