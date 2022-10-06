<template>
  <div class="row">
    <div class="col-md-9">
      <h4>Category</h4>
      <RouterLink class="default-link" to="/javascript">
        Java Script
      </RouterLink>
      <div>
        <component :is="comp"></component>
      </div>
    </div>
    <div class="col-md-3">
      <div class="sidebar">
        <h4>Projects</h4>
        <RouterLink class="default-link" to="/rus-support">
          Russuport (old project)
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>

import Comp from "../components/Comp.vue";
import {RouterLink} from "vue-router";


export default {
  name: "HomeView",
  data() {
    return {
      comp: Comp
    }
  },
  components: {
    RouterLink,
    Comp
  },
}
</script>

<style lang="scss" scoped>

.sidebar {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
}
</style>