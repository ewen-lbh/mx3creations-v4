<template>
  <section>
    <!-- eslint-disable-next-line -->
    <h1 v-html="headline.replace(/\n/g, '<br />')"></h1>
    <!-- eslint-disable-next-line -->
    <p v-html="body.replace(/\n/g, '<br />')"></p>
    <btn variant="outline">Continue reading</btn>
  </section>
</template>

<script>
import Btn from '~/components/ui/Btn.vue'

export default {
  components: { Btn },
  data() {
    return {
      headline: `
Hey! I'm Mx3.
I create (almost) anything that crosses digital mediums & art.
`,
      body: `
I appreciate clean & minimalist designs.  Focused beauty. Simple yet visually stunning. 
I love creating on digital mediums: music, motion design, UI/UX design, websites, logos,… 
I always try to make things myself instead of relying on someone else’s work. 
I’ll learn whatever language, tool or
`
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  font-family: Manrope, sans-serif
</style>
