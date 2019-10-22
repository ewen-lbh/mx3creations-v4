<template>
  <ul class="grid-container">
    <li v-for="(coverArt, i) in coverArts" :key="i">
      <gallery-item :image="coverArtSrc(coverArt)" />
    </li>
  </ul>
</template>

<script>
import GalleryItem from '~/components/gallery/GalleryItem.vue'

export default {
  name: 'GridContainer',
  components: { GalleryItem },
  data() {
    return {
      coverArts: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    coverArtSrc(idx) {
      return `/images/cover-art--${idx}.png`
    }
  }
}
</script>

<style lang="sass" scoped>
.grid-container
  padding-left: 0
  display: grid
  grid-template-columns: repeat(2, 150px)
  list-style: none
  grid-gap: 20px
</style>
