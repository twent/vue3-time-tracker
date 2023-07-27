<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { validateTimelineItems, validateSelectOptions } from '../validators'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
  },
  activityOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})
</script>

<template>
  <div class="mt-6">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-options="activityOptions"
      />
    </ul>
  </div>
</template>
