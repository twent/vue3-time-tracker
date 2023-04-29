<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'

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
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <a href="#" :class="classes">{{ timelineItem.hour }}:00 </a>
    <div class="flex gap-2">
      <select name="" id="" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
        <option value="" selected disabled>Rest</option>
        <option v-for="{ value, label } in options" :key="value" :value="value">{{ label }}</option>
      </select>

      <button type="reset" class="rounded bg-gray-200 p-2 enabled:hover:bg-gray-300 dissabled:cursor-not-allowed disabled:opacity-50">
        <XMarkIcon class="h-8" />
      </button>
    </div>
  </li>
</template>

<style scoped>
a {
  @apply absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 text-lg font-medium;
}
</style>
