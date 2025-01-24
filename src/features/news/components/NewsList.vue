<template>
  <div>
    <NewsArticle
      v-for="article in articles"
      :key="article.article_id"
      :article="article"
    />
  </div>
</template>

<script setup>
import NewsArticle from './NewsArticle.vue';

const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
});
</script>
