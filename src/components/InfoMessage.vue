<template>
  <p class="text-center text-gray-500 mt-4">
    {{ text }}
  </p>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
