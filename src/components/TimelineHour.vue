<script setup>
import { isValidHour } from '../validators'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isValidHour
  }
})

let classes = [
  props.hour === new Date().getHours()
    ? 'bg-green-600 font-bold text-white'
    : 'bg-gray-100 text-gray-600'
]

let formattedHour = `${props.hour.toString().padStart(2, 0)}:00`
</script>
<template>
  <a href="#" :class="classes">{{ formattedHour }} </a>
</template>
