<script setup>
defineProps({
  textLines: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <article>
    <section class="page-content">
      <p v-for="textLine in textLines">
        {{ textLine }}
      </p>
    </section>
  </article>
</template>
