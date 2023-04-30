<script setup>
import { PAGES } from './constants'
import { normalizePageHash, generateTimelineItems } from './functions'
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheBottomNavigation from './components/TheBottomNavigation.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

const currentPage = ref(normalizePageHash())

const timelineItems = generateTimelineItems()

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @page-changed="goTo($event)" />

  <main class="flex grow flex-col">
    <TheTimeline v-show="currentPage === PAGES.TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGES.ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGES.PROGRESS" />
  </main>

  <TheBottomNavigation :current-page="currentPage" @page-changed="goTo($event)" />
</template>

<style scoped></style>
