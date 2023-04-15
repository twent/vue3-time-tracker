<script setup>
import { ClockIcon, CheckCircleIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = ['timeline', 'activities', 'progress']
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b bg-white/70 p-4 shadow-sm backdrop-blur"
  >
    <a class="flex items-center gap-2 text-base font-bold text-gray-700 sm:text-lg" href="/">
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

  <main class="flex grow flex-col"></main>

  <nav class="sticky bottom-0 z-20 border-t bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur">
    <ul
      class="flex items-center justify-around gap-4 text-center text-xs font-semibold capitalize text-gray-600"
    >
      <li v-for="page in navItems" class="flex-1">
        <a
          :href="`#${page}`"
          :key="page"
          class="flex flex-col items-center gap-1 transition hover:text-purple-600"
        >
          <ClockIcon v-if="page === 'timeline'" class="w-6" />
          <ChartBarIcon v-else-if="page === 'activities'" class="w-6" />
          <ListBulletIcon v-else-if="page === 'progress'" class="w-6" /> {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
