<template>
  <div class="bui-input"
       :class="{ 'inline': inline }">
      <label v-if="label"
             :for="name"
             class="bui-input-label">
        {{ label }}
      </label>
      <div class="bui-input-content">
        <input v-if="type !== 'textarea'"
               :type="type" 
               :name="name"
               :id="name"
               :placeholder="placeholder"
               :disabled="disabled"
               :readonly="readonly"
               :number="number"
               :maxlength="maxlength"
               :minlength="minlength"
               :autocomplete="autoComplete"
               v-model="currentValue"
               ref="input">
        <textarea v-else
                  :name="name"
                  :id="name"
                  :rows="rows"
                  :placeholder="placeholder"
                  :disabled="disabled"
                  :readonly="readonly"
                  :number="number"
                  :maxlength="maxlength"
                  :minlength="minlength"
                  :autocomplete="autoComplete"
                  v-model="currentValue"
                  ref="input"></textarea>
      </div>
  </div>
</template>

<script type="javascript">
  export default {
    props: {
      value: [String, Number],
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      size: {
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
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        default: ''
      },
      number: {
        type: Boolean,
        default: false
      },
      // autosize: {
      //   type: [Boolean, Object],
      //   default: false
      // },
      rows: {
        type: Number,
        default: 2
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      maxlength: Number,
      minlength: Number,
      inline: Boolean
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
  @import '~style/responsive.scss';
  @import '~style/variables.scss';

  .bui-input {
    // font-family: $font-stack;
    @include fl-container(column);
    margin-bottom: 12px;

    label {
      width: 100%;
      margin: 0;
      padding: 0;
    }
      
    .bui-input-label {
      font-size: 1rem;
      line-height: 1.2rem;
      margin-bottom: 2px;
      color: $text-default-color;
      transition: color 0.1s ease;
    }
    .bui-input-content {
      display: block;
      position: relative;

      input[type="text"],
      input[type="password"],
      input[type="number"],
      textarea {
        display: block;
        box-sizing: border-box;
        cursor: auto;
        background: rgba($palette-grey-600, 0.1);
        outline: none;
        border: none;
        border-radius: 3px;

        padding: 3px 10px;
        width: 100%;
        color: $text-default-color;
        font-weight: normal;
        font-size: 16px;
        line-height: normal;
      }

      input[type="text"],
      input[type="password"],
      input[type="number"] {
        height: 32px;
      }
      textarea {
        resize: vertical;
        overflow-x: hidden;
        padding: 5px 7px;
      }
    }

    &.inline {
      display: inline-flex;
      .bui-input-content {
        input[type="text"],
        input[type="password"],
        input[type="number"],
        textarea {
          display: inline-block;
        }
      }
    }
  }
</style>