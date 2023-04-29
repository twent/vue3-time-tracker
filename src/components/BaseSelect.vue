<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({
  options: {
    required: true,
    type: Array
  },
  placeholder: {
    required: true,
    type: String
  },
  selected: String
})
</script>

<template>
  <div class="flex gap-2">
    <select class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl">
      <option value="" selected disabled>{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>

    <BaseButton>
      <XMarkIcon class="h-8" />
    </BaseButton>
  </div>
</template>
