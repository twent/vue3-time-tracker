<script setup>
import { PAGES } from '../constants'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="text-sm font-semibold text-gray-600">
    <a :href="`/#${PAGES.PROGRESS}`" v-if="true" class="flex items-center gap-1 md:gap-1.5">
      <span>Day complete!</span>
      <CheckCircleIcon class="h-7 text-green-400" />
    </a>

    <a :href="`/#${PAGES.PROGRESS}`" v-else class="flex items-center gap-1 md:gap-1.5">
      <div>Progress: <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </a>
  </div>
</template>
