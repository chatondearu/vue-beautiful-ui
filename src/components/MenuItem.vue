<template>
  <li class="bui-menu-item">
    <slot></slot>
  </li>
</template>

<script type="javascript">
  export default {
    name: 'bui-menu-item'
  }
</script>

<style lang="scss" scoped>
  @import '~style/variables.scss';

  li.bui-menu-item {
    & > a {
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

      &:hover {
        cursor: pointer;
        background-color: $blue-grey-50;
      }
    }
  }
</style>