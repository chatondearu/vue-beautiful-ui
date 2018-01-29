<template>
  <div class="bui-select">
    <label :for="name">
      <span class="bui-select-label">{{ label }}</span>
      <select :name="name"
             :id="name"
             :disabled="disabled"
             :readonly="readonly"
             :number="number"
             :maxlength="maxlength"
             :minlength="minlength"
             :autocomplete="autoComplete"
             v-model="currentValue"
             ref="select">
        <slot></slot>
      </select>
    </label>
  </div>
</template>

<script type="javascript">
  export default {
    name: 'bui-select',
    props: {
      value: [String, Number],
      label: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      // icon: {
      //   type: String,
      //   default: ''
      // },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      number: {
        type: Boolean,
        default: false
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      maxlength: Number,
      minlength: Number
    },
    watch: {
      'value' (val, oldValue) {
        this.currentValue = val
      },
      'currentValue' (val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~style/variables.scss';

  .bui-select {
   // font-family: $font-stack;
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
    position: relative;

    label {
      width: 100%;
      margin: 0;
      padding: 0;
      
      .bui-select-label {
        font-size: 14px;
        line-height: 1;
        margin-bottom: 2px;
        color: $text-default-color;
        transition: color 0.1s ease;
      }
    }

    select {
      cursor: auto;
      background: rgba($palette-grey-600, 0.1);
      outline: none;
      border: none;
      border-radius: 3px;

      padding: 5px;
      width: 100%;
      height: 32px;
      color: $text-default-color;
      font-weight: normal;
      font-size: 16px;

      display: block;
      // font-family: $font-stack;
    }
  }
</style>