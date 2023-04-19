<script setup>
import { PAGES } from './constants'
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheBottomNavigation from './components/TheBottomNavigation.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = {
  [PAGES.TIMELINE]: ClockIcon,
  [PAGES.ACTIVITIES]: ListBulletIcon,
  [PAGES.PROGRESS]: ChartBarIcon
}

const currentPage = ref(normalizePageHash())

function normalizePageHash() {
  let hash = window.location.hash.slice(1)

  if (Object.keys(PAGES).includes(hash)) {
    return hash
  }

  window.location.hash = PAGES.TIMELINE

  return PAGES.TIMELINE
}
</script>

<template>
  <TheHeader />

  <main class="flex grow flex-col">
    <TheTimeline v-show="currentPage === PAGES.TIMELINE" />
    <TheActivities v-show="currentPage === PAGES.ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGES.PROGRESS" />
  </main>

  <TheBottomNavigation :current-page="currentPage" @page-changed="currentPage = $event" />
</template>

<style scoped></style>
