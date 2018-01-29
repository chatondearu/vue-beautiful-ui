<template>
  <option class="bui-select-option">
    <slot></slot>
  </option>
</template>

<script type="javascript">
  export default {
    name: 'bui-select-option'
  }
</script>

<style lang="scss" scoped>
  @import '~style/variables.scss';

  option.bui-select-option {
    width: auto;
    text-decoration: none;
    color: $dark;
    font-size: 14px;
    font-weight: 400;
    outline: none;

    position: relative;
    display: block;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;

    user-select: none;
  }
</style>