<template>
  <div class="breadcrumbs">
    <RouterLink class="default-link" to="/">Home</RouterLink>
    /
    <RouterLink class="default-link" to="/javascript"> Javascript</RouterLink>
    / {{ $route.params.theme }}
  </div>
  <h1>Hello {{ destinationTheme }}</h1>

  <div v-html="destination.description"></div>

</template>

<script>

import Data from '../assets/data/data.json'

export default {
  name: "JavaScriptThemeView",
  data() {
    return {}
  },
  computed: {
    destinationTheme() {
      return this.$route.params.theme
    },
    destination() {
      return Data.theme.find(element => element.slug === this.destinationTheme)
    },
  },
  methods: {}
}

</script>

<style scoped>

</style>