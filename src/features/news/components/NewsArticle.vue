<template>
  <div class="flex flex-col mb-4 p-4 border border-gray-400 rounded-[10px]">
    <h2 class="text-xl font-bold">{{ article.title }}</h2>
    <p>{{ article.description }}</p>
    <p class="text-gray-500">Published: {{ article.pubDate }}</p>
    <a :href="article.link"
       target="_blank"
       class="text-blue-500">Read More</a>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
