<template>
  <div class="mb-4">
    <label :for="label"
           class="mb-2">{{ label }}</label>
    <select
      :id="label"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full p-2 border border-gray-400 rounded-[5px]"
    >
      <option value="">Select a {{ label.toLowerCase() }}</option>
      <option v-for="option in options"
              :key="option.code"
              :value="option.code">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>

defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  // Selected option value
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>
