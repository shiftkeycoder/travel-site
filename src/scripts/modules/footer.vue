<template>
  <footer class="site-footer">
    <div class="wrapper">
      <p>
        <span class="site-footer--text">
            Copyright &copy; 2020 Clear View Escapes. All rights reserved.
        </span> <a @click="openModal" href="#" class="btn btn--orange">Get in Touch</a>
      </p>
    </div><!--wrapper-->
  </footer><!--footer-->
</template>

<style>
  @import '../../styles/base/var';
  @import '../../styles/base/macro';
  @import '../../styles/modules/site-footer';
</style>

<script>
export default {
  methods: {
    openModal() {
      this.$emit('onModal');
    }
  }
}
</script>