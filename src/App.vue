<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <div class="navigation">
          <RouterLink to="/about">Quem sou eu?</RouterLink>
          <RouterLink to="/work">O que faço?</RouterLink>
          <RouterLink to="/hobbies">Hobbies</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
  <Footer></Footer>
</template>
