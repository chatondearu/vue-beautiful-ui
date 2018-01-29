<template>
  <div class="bui-icon">
    <i :class="['mdi', 'mdi-' + icon]"></i>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'bui-icon',
    props: {
      icon: {
        required: true,
        default: 'none',
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $mdi-font-path: "~mdi/fonts" !default;
  @import '~mdi/scss/materialdesignicons.scss';
  
  .bui-icon {
    display: inline;
  }
</style>