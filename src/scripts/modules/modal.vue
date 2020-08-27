<template>
  <section 
    class="modal"
    :class="{'modal--is-visable': MODAL, 'modal--is-hidden': !MODAL}">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin">
        <span class="icon--mail section-title__icon"></span>
          Get in <strong>Touch!</strong>
      </h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div><!--wrapper-->

      <div class="social-icons">
        <a href="#" class="social-icons__icon"><span class="icon icon--facebook"></span></a>
        <a href="#" class="social-icons__icon"><span class="icon icon--twitter"></span></a>
        <a href="#" class="social-icons__icon"><span class="icon icon--instagram"></span></a>
        <a href="#" class="social-icons__icon"><span class="icon icon--youtube"></span></a>
      </div><!--social Icons-->
      <div class="modal__close">
        <p @click="closeModal"><i class="fal fa-times-square"></i></p>
      </div>
    </div><!--modal inner-->
    
  </section><!--modal-->
</template>

<style>
  @import '../../styles/base/var';
  @import '../../styles/base/macro';
  @import '../../styles/modules/modal';
  @import '../../styles/modules/social-icons';
</style>

<script>
  export default {
   props: ['MODAL'] ,
   methods: {
     closeModal() {
       this.$emit('onCloseModal');
     }
   }
  }
</script>