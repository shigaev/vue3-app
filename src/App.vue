<script setup>
import {RouterView} from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header/>
  <main>
    <div class="container py-3">
      <RouterView/>
    </div>
  </main>
  <Footer/>
</template>

<style lang="scss" scoped>

</style>