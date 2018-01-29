<template>
  <button class="bui-button" :class="{ primary: type === 'primary' }" :disabled="disabled">
    <icon v-if="icon" :icon="icon"></icon>
    <slot></slot>
  </button>
</template>

<script type="javascript">
  import Icon from './Icon'

  export default {
    name: 'bui-button',
    props: {
      type: String,
      disabled: Boolean,
      icon: String
    },
    components: {
      Icon
    }
  }
</script>

<style lang="scss" scoped>
  @import '~style/variables.scss';

  .bui-button {
    background: 0 0;
    border: none;
    border-radius: 2px;
    color: $dark;

    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0 16px;
    height: 36px;
    min-width: 64px;

    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    line-height: 36px;
    letter-spacing: 0;
    overflow: hidden;

    will-change: box-shadow;
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: $blue-grey-100;
    }

    &.primary {
      background-color: $primary-color;
      color: $white;
      &:hover {
        background-color: $blue-700;
      }
    }

    &:disabled {
      background-color: $blue-grey-50;
      color: $blue-grey-300;
      cursor: not-allowed;
    }
  }
</style>