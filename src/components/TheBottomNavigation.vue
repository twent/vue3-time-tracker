<script setup>
import NavItem from './NavItem.vue'
import { PAGES } from '../constants'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

defineProps(['currentPage'])

const emit = defineEmits(['pageChanged'])

const navItems = {
  [PAGES.TIMELINE]: ClockIcon,
  [PAGES.ACTIVITIES]: ListBulletIcon,
  [PAGES.PROGRESS]: ChartBarIcon
}
</script>

<template>
  <nav class="sticky bottom-0 z-20 border-t bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur">
    <ul
      class="flex items-center justify-around gap-4 text-center text-xs font-semibold capitalize text-gray-600"
    >
      <NavItem
        @click="emit('pageChanged', page)"
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
