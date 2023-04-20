<script setup>
import { ClockIcon } from '@heroicons/vue/24/outline'
import { PAGES } from '../constants'
</script>

<template>
  <a
    :href="`/#${PAGES.TIMELINE}`"
    class="flex items-center gap-2 text-base font-bold text-gray-700 sm:text-lg"
  >
    <ClockIcon class="w-7 text-purple-600" />
    <span>TimeTracker</span>
  </a>
</template>
