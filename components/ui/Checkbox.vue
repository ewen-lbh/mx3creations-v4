<template>
  <div class="Checkbox">
    <input
      :id="`${name}--checkbox`"
      type="checkbox"
      :name="name"
      :checked="value"
      :style="{ display: 'none' }"
      @change="$emit('input', $event.target.checked)"
    />
    <label :for="`${name}--checkbox`">
      <span class="label-inner">
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'normal'
    }
  }
}
</script>
