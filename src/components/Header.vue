<template>
  <header>
    <div class="header-menu">
      <nav>
        <RouterLink class="header-menu__link default-link" to="/">Home</RouterLink>
        <RouterLink class="header-menu__link default-link" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>

import {RouterLink} from 'vue-router'

export default {
  name: "Header",
  data() {
    return {
      title: 'Header'
    }
  },
  components: {
    RouterLink,
  }
}
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #e3e3e3;

  .header-menu {
    padding: 10px;
    display: flex;
    justify-content: center;

    &__link {
      padding: 0 10px;
    }
  }
}
</style>