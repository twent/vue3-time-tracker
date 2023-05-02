<script setup>
import { ref } from 'vue'

import { ACTIVITIES_OPTIONS } from '../constants'
import { isValidTimilineItem } from '../validators'
import BaseSelect from './BaseSelect.vue'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isValidTimilineItem
  }
})

let classes = [
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-green-600 font-bold text-white'
    : 'bg-gray-100 text-gray-600'
]

let selected = ref('')
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <a href="#" :class="classes">{{ timelineItem.hour }}:00 </a>
    <BaseSelect
      :options="ACTIVITIES_OPTIONS"
      placeholder="Rest"
      @option-selected="selected = $event"
      :selected="selected"
    />
  </li>
</template>

<style scoped>
a {
  @apply absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 text-lg font-medium;
}
</style>
