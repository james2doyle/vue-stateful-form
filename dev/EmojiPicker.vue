<template>
  <div class="emoji-picker">
    <!-- hide an input here so that the FormData can pick it up -->
    <input type="hidden" :name="$attrs.name" :value="model">
    <!-- add a handler to the custom input that we can hook in to -->
    <button v-for="option in options" :key="option.value" type="button" :class="{ 'emoji-picker-selected': model === option.value}" @click.prevent="handleClick(option.value)" v-text="option.label"></button>
  </div>
</template>

<script>
export default {
  name: 'EmojiPicker',
  props: {
    // value prop is always passed if a custom component is detected
    value: {
      type: String,
      required: false, // can be null
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // set the initial state to whatever was passed in
      model: this.value,
    };
  },
  methods: {
    handleClick(icon) {
      // update the local state that sets the value of the hidden input
      this.model = icon;

      const evt = new Event('input', { bubbles: true, cancelable: false });
      // emit the native event on the parent form
      this.$parent.$el.dispatchEvent(evt);
    }
  },
};
</script>

<style>
.emoji-picker button {
  cursor: pointer;
  background: #ccc;
  border: 1px solid #999;
  border-radius: 2px;
  margin: 0 0.5rem 1rem 0;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  will-change: opacity;
}
.emoji-picker button:hover {
  opacity: 0.8;
}
.emoji-picker button.emoji-picker-selected {
  opacity: 1;
}
</style>
