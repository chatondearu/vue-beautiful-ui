<template>
  <a class="bui-btn">
    <slot>
      First Button
    </slot>
  </a>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/_variables.scss';

  .bui-btn {
    background-color: $bui-primary-color;
    color: $white;
  }
</style>
