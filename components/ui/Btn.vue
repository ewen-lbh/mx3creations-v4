<template>
  <button :class="`btn-${variant}`" class="btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    variant: {
      type: String,
      default: 'outline'
    }
  }
}
</script>

<style lang="sass" scoped>
.btn
  padding: 5px 10px
.btn-outline
  background: transparent
  border: 5x solid var(--primary)
  color: var(--primary)
  text-transform: uppercase
  font-family: Roboto Mono, sans-serif
</style>
