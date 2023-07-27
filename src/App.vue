<script setup>
import { ref } from 'vue'
import { PAGES } from './constants'
import { normalizePageHash, generateTimelineItems, generateActivityOptions } from './functions'
import TheHeader from './components/TheHeader.vue'
import TheBottomNavigation from './components/TheBottomNavigation.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

const currentPage = ref(normalizePageHash())

const timelineItems = generateTimelineItems()

const activities = ref(['Coding', 'Cooking', 'Working', 'Hiking', 'Cycling', 'Reading'])

const activityOptions = generateActivityOptions(activities.value)

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
</script>

<template>
  <TheHeader @page-changed="goTo($event)" />

  <main class="flex grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGES.TIMELINE"
      :timeline-items="timelineItems"
      :activity-options="activityOptions"
    />
    <TheActivities
      v-show="currentPage === PAGES.ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
    />
    <TheProgress v-show="currentPage === PAGES.PROGRESS" />
  </main>

  <TheBottomNavigation :current-page="currentPage" @page-changed="goTo($event)" />
</template>

<style scoped></style>
