<template>
  <div class="breadcrumbs">
    <RouterLink class="default-link" to="/">Home</RouterLink>
    / {{ title }}
  </div>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="(item, index) in themes">
      <RouterLink class="default-link" :to="item.link">
        {{ item.title }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>

import {RouterLink} from "vue-router";

export default {
  name: "JavaScriptView",
  data() {
    return {
      title: 'JavaScript',
      themes: [
        {title: 'Js', link: 'javascript/js'},
        {title: 'Php', link: 'javascript/php'},
        {title: 'Sql', link: 'javascript/sql'},
      ]
    }
  },
  components: {
    RouterLink
  },

}
</script>

<style scoped>

</style>