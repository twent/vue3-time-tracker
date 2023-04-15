<script setup>
import { ClockIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b bg-white/70 p-4 shadow-sm backdrop-blur"
  >
    <a class="font-lg flex items-center gap-2 text-xl font-semibold text-gray-800" href="/">
      <ClockIcon class="h-7 text-purple-600" />
      <span>TimeTracker</span>
    </a>

    <div class="text-sm font-semibold text-gray-600">
      <div v-if="true" class="flex items-center gap-1 md:gap-1.5">
        <span>Day complete!</span>
        <CheckCircleIcon class="h-7 text-green-400" />
      </div>

      <div v-else class="flex items-center gap-1 md:gap-1.5">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
