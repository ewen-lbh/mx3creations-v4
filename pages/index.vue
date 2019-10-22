<template>
  <div class="content">
    <about-me />
    <div class="gallery-wrapper">
      <gallery-grid />
    </div>
  </div>
</template>

<script>
import GalleryGrid from '~/components/gallery/GalleryGrid.vue'
import AboutMe from '~/components/about/AboutMe.vue'

export default {
  components: { GalleryGrid, AboutMe }
}
</script>

<style lang="sass" scoped>
.gallery-wrapper
  display: flex
  justify-content: center
</style>
