<template>
  <a class="gallery-item">
    <img class="image" :src="image" />
  </a>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    image: {
      type: String,
      default: `https://lorempixel.com/500/500/`
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.image, .gallery-item
  height: 150px
  width: 150px
img
  object-fit: cover
</style>
