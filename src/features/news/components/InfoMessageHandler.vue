<template>
  <div v-if="shouldShowMessage">
    <!-- Render InfoMessage only if there is a valid message -->
    <InfoMessage :text="currentMessage" />
  </div>
</template>

<script setup>
import InfoMessage from "@/components/InfoMessage.vue";
import { computed } from "vue";

const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  articles: {
    type: Array,
    required: true,
  },
  nextPageToFetchId: {
    type: [String, Number, null],
    required: true,
  },
  loadingMessage: {
    type: String,
    default: "Loading...",
  },
  noResultsMessage: {
    type: String,
    default: "No items found",
  },
  endOfResultsMessage: {
    type: String,
    default: "End of results",
  },
});

// Compute the appropriate message to show
const currentMessage = computed(() => {
  if (props.loading) {
    return props.loadingMessage;
  }

  if (!props.loading && props.articles.length === 0) {
    return props.noResultsMessage;
  }

  if (props.articles.length > 0 && !props.nextPageToFetchId) {
    return props.endOfResultsMessage;
  }

  return null; // No message to show
});

// Check if a message should be rendered
const shouldShowMessage = computed(() => currentMessage.value !== null);
</script>
