<template>
  <div class="bui-menu" role="menu" tabindex="1" :class="{ 'no-flat': !flat }">
    <ul class="bui-menu-content" @click="$emit('click')">
      <slot></slot>
    </ul>
  </div>
</template>

<script type="javascript">
  export default {
    props: {
      flat: Boolean
    }
  }
</script>

<style lang="scss" scoped>
  @import '~style/variables.scss';

  .bui-menu {
    background-color: $white;
    border-radius: 2px;

    &.no-flat {
      @include card(1); 
    }
  }
</style>