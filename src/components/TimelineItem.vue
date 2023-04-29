<script setup>
import BaseSelect from './BaseSelect.vue'

const props = defineProps(['timelineItem'])

let classes = [
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-green-600 font-bold text-white'
    : 'bg-gray-100 text-gray-600'
]

const options = [
  { value: 'coding', label: 'Coding' },
  { value: 'cooking', label: 'Cooking' },
  { value: 'working', label: 'Working' },
  { value: 'hiking', label: 'Hiking' },
  { value: 'cycling', label: 'Cycling' },
  { value: 'reading', label: 'Reading' },
]

const selectedActivity = options[4].value
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <a href="#" :class="classes">{{ timelineItem.hour }}:00 </a>
    <BaseSelect :options="options" placeholder="Rest" :selected="selectedActivity" />
  </li>
</template>

<style scoped>
a {
  @apply absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 text-lg font-medium;
}
</style>
