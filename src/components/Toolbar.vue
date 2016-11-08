<template>
  <div class="bui-toolbar">
    <slot>
      First Toolbar
    </slot>
  </div>
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
  // @import '~bourbon';
  @import '../assets/_variables.scss';

  .bui-toolbar {
    background-color: $bui-primary-color;
    color: $white;

    display: block;
    line-height: 3rem;
    padding: 0 .8rem;

    &.bui-btn-primary {
      background-color: $bui-primary-color;
    }
  }
</style>
