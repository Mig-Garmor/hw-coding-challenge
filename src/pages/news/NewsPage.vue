<template>
  <div class="flex flex-col py-4">
    <PageHeader />
    <!-- Filters container -->
    <FiltersSection v-model:filters="filters" />

    <!-- Articles List -->
    <NewsList :articles="articles" />

    <InfoMessageHandler
      :loading="loading"
      :articles="articles"
      :nextPageToFetchId="nextPageToFetchId"
      loading-message="Loading..."
      no-results-message="No items found"
      end-of-results-message="End of results"
    />

    <!-- Observer Target (Invisible Element) -->
    <div ref="observerTarget" class="h-1"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import apiClient from "../../utils/api.js";
import PageHeader from "../../components/PageHeader.vue";
import FiltersSection from "./components/FiltersSection.vue";
import NewsList from "./components/NewsList.vue";
import InfoMessageHandler from "./components/InfoMessageHandler.vue";

import { toast } from "vue3-toastify";

// State variables
const articles = ref([]); // List of all articles
const nextPageToFetchId = ref(null); // Tracks the nextPageId from the API response
const loading = ref(false); // Indicates if a fetch is in progress
const observerTarget = ref(null); // Target element for the intersection observer

// Reactive object for filters
const filters = reactive({
  category: "",
  country: "",
  language: "",
});

// Fetch data from the API
const fetchArticles = async () => {
  if (loading.value) return; // Prevent duplicate requests
  loading.value = true;

  try {
    // Build query params with filters
    const params = {};
    if (filters.category) params.category = filters.category;
    if (filters.country) params.country = filters.country;
    if (filters.language) params.language = filters.language;
    if (nextPageToFetchId.value) params.page = nextPageToFetchId.value;

    const { data } = await apiClient.get("/latest", { params });

    // Clear existing articles if it's a fresh fetch (not pagination)
    if (!nextPageToFetchId.value) {
      articles.value = [];
    }

    // Add the new articles to the list
    articles.value.push(...(data.results || []));

    // Update the nextPageId for the next fetch
    nextPageToFetchId.value = data.nextPage || null;
  } catch (error) {
    console.error("Error fetching articles:", error);
    // Displays error message as toast on UI
    toast.error("Error fetching articles");
  } finally {
    loading.value = false;
  }
};

// Set up the intersection observer
const createObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && nextPageToFetchId.value) {
      fetchArticles();
    }
  });

  if (observerTarget.value) {
    observer.observe(observerTarget.value);
  }
};

// Watch filters deeply and trigger fetch on change
watch(
  filters,
  () => {
    nextPageToFetchId.value = null; // Reset pagination
    articles.value = []; // Clear existing articles
    fetchArticles(); // Fetch articles with new filters
  },
  { deep: true } // Ensure `filters` object triggers fetch after filter object changes
);

// Initial fetch and observer setup
onMounted(() => {
  fetchArticles(); // Fetch the first page of articles
  createObserver(); // Set up the intersection observer
});
</script>
