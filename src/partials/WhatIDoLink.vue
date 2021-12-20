<script setup>
  defineProps({
    webUrl: String,
    text: String
  })
</script>

<template>
  <a v-bind="{ href: webUrl }" class="inline-block px-1 py-px -mx-1 -my-px font-bold rounded hover:text-mint-500 text-tart-500 hover:bg-tart-500">{{ text }}</a>
</template>