<template>
  <div class="bui-icon-button" :class="{
        'float-fab': fab.length > 0,
        'bottom': fab.indexOf('bottom') > -1,
        'right': fab.indexOf('right') > -1
      }">
    <a @click.prevent="onClick"
      :class="{
        'clear': type === 'clear',
        'primary': type === 'primary',
        'show-droped-element': showDropdown,
        'xl': size === 'xl',
        'xs': size === 'xs'
      }"
      v-on-clickaway="closeDropdown">
      <icon :icon="icon"></icon>
    </a>
    <div class="popper" v-if="useDropdown" v-show="showDropdown" ref="dropdown">
      <slot></slot>
    </div>
  </div>
</template>

<script type="javascript">
  import Popper from 'popper.js'
  import { mixin as ClickAway } from 'vue-clickaway'
  import Icon from './Icon'

  export default {
    name: 'bui-icon-button',
    props: {
      icon: String,
      type: String,
      useDropdown: Boolean,
      size: String,
      fab: {
        type: Array,
        default () {
          return []
        }
      }
    },
    mixins: [
      ClickAway
    ],
    components: {
      Icon
    },
    methods: {
      onClick () {
        if (this.useDropdown) {
          if (!this.showDropdown) {
            this.openDropdown()
          } else {
            this.closeDropdown()
          }
        }
      },
      openDropdown () {
        if (this.showDropdown) { return }
        this.$emit('open::dropdown')
        this.showDropdown = true
        this.$popper = new Popper(this.$el, this.$refs.dropdown, {
          placement: 'bottom-end'
        })
        this.$nextTick(() => {
          this.$popper.update()
        })
      },
      closeDropdown () {
        if (!this.showDropdown) { return }
        this.$emit('close::dropdown')
        this.showDropdown = false
        this.$popper.destroy()
        this.$popper = null
      }
    },
    data () {
      return {
        $popper: null,
        showDropdown: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~style/variables.scss';

  .bui-icon-button {
    display: inline-block;
    a {
      color: $dark;
      background-color: $blue-grey-50;
      outline: none;
      -webkit-tap-highlight-color:transparent;

      position: relative;
      overflow: hidden;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;
      border-radius: 50%;
      &.xl {
        width: 52px;
        height: 52px;
      }

      font-size: 1.3rem;

      &:not([disabled]) {
        cursor: pointer;
      }

      &:active, &:focus {
        background: none;
        outline: none;
      }

      transition: background-color ease 0.25s;
      &:hover {
        background-color: darken($blue-grey-50, 10%);
      }

      &.clear {
        background-color: transparent;
        &:hover {
          background-color: $blue-grey-50;
        }
      }

      &.primary {
        background-color: $primary-color;
        color: $white;
        &:hover {
          background-color: darken($primary-color, 10%);
        }
      }
    }

    &.float-fab {
      $margin-fab-floated: 25px;
      $width-fab: 40px;
      position: fixed;
      z-index: 1;
      a {
        @include card(1);
        &:hover {
          @include card(2);
        }
      }

      &.bottom {
        bottom: $margin-fab-floated;
      }
      &.right {
        right: $margin-fab-floated;
      }
      &.right-1 {
        right: $margin-fab-floated * 2 + $width-fab;
      }
    }
  }
  .popper {
    // position: absolute;
    z-index: 2;
  }
</style>