<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}
</script>

<template>
  <nav class="sticky bottom-0 z-20 border-t bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur">
    <ul
      class="flex items-center justify-around gap-4 text-center text-xs font-semibold capitalize text-gray-600"
    >
      <li v-for="(icon, page) in navItems" class="flex-1">
        <a
          :href="`#${page}`"
          :key="page"
          class="flex flex-col items-center gap-1 transition hover:text-purple-600"
        >
          <component :is="icon" class="w-6" /> {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>
