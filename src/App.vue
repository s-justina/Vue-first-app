<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/account">Account</router-link>
  </div>
  <router-view></router-view>
  <p>This is a test!</p>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 10px;
}
</style>
