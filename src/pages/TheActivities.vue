<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import { ACTIVITIES } from '../constants'
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem v-for="activity in ACTIVITIES" :key="activity" :activity="activity" />
    </ul>
  </div>
</template>
