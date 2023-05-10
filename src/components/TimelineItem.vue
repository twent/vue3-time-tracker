<script setup>
import { ref } from 'vue'

import { ACTIVITIES_OPTIONS } from '../constants'
import { isValidTimilineItem } from '../validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isValidTimilineItem
  }
})

let selected = ref()
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
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
