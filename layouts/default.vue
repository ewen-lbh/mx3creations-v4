<template>
  <div class="root">
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        { pos: 0, bg: '#e2f9b2', fg: '#4d2f01', name: 'Avocado' },
        { pos: 1, bg: '#0b0b0b', fg: '#2dff5b', name: 'Hacker' },
        { pos: 2, bg: '#dadbe0', fg: '#072163', name: 'Deep' },
        { pos: 3, bg: '#190444', fg: '#1cfff1', name: 'Quantum' },
        { pos: 4, bg: '#060f3c', fg: '#ea2d87', name: 'Neon' },
        { pos: 5, bg: '#ffb802', fg: '#d91104', name: 'Ketchup-mayo' },
        { pos: 6, bg: '#d94404', fg: '#e8a21b', name: 'Fire' },
        { pos: 7, bg: '#e2fdfe', fg: '#3c3c3c', name: 'Ice' },
        { pos: 8, bg: '#ffffff', fg: '#000000', name: 'Minimalist' },
        { pos: 10, bg: '#fdfddd', fg: '#e5cf06', name: 'Treasure' },
        { pos: 11, bg: '#0d162c', fg: '#f24c18', name: 'Lava' },
        { pos: 12, bg: '#ffffff', fg: '#268cce', name: 'The Past' },
        { pos: 13, bg: '#6a0404', fg: '#f30e0e', name: 'Blood' },
        { pos: 14, bg: '#F9F9F9', fg: '#ff0000', name: 'Duperré' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>