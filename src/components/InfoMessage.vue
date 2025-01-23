<template>
  <p class="text-center text-gray-500 mt-4">
    {{ text }}
  </p>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
