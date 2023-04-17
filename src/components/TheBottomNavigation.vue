<script setup>
import { ref } from 'vue'
import NavItem from './NavItem.vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}

const currentPage = ref('timeline')
</script>

<template>
  <nav class="sticky bottom-0 z-20 border-t bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur">
    <ul
      class="flex items-center justify-around gap-4 text-center text-xs font-semibold capitalize text-gray-600"
    >
      <NavItem
        @click="currentPage = page"
        v-for="(icon, page) in navItems"
        :href="`#${page}`"
        :key="page"
        :class="{ 'pointer-events-none text-purple-600': currentPage === page }"
      >
        <component :is="icon" class="w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
