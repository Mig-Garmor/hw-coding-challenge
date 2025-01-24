<template>
  <div class="mb-4">
    <!-- Dropdown inputs bound to the parent's filters object -->
    <DropdownInput
      label="Category"
      :options="categories"
      v-model="filters.category"
    />
    <DropdownInput
      label="Country"
      :options="countries"
      v-model="filters.country"
    />
    <DropdownInput
      label="Language"
      :options="languages"
      v-model="filters.language"
    />
  </div>
</template>

<script setup>
import DropdownInput from "../../../components/DropdownInput.vue";
import { categories, countries, languages } from "../utils/filterOptions";

const props = defineProps({
   filters: {
    type: Object,
    required: true,
  },
});
</script>
