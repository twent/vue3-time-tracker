<script setup>
import { ref } from 'vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECTED_OPTIONS } from '../constants'
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from '../components/BaseButton.vue'
import BaseSelect from '../components/BaseSelect.vue'
import { isUndefined, isValidActivity } from '../validators'

defineProps({
  activity: {
    required: true,
    type: String,
    validator: isValidActivity
  }
})

const emit = defineEmits({
  delete: isUndefined
})

const minutesToComplete = ref()
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center justify-between gap-2">
      <span class="activity-title truncate text-2xl text-purple-900">{{ activity }}</span>
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="HH:MM"
        :options="PERIOD_SELECTED_OPTIONS"
        :selected="minutesToComplete"
        @option-selected="minutesToComplete = $event"
      />
    </div>
  </li>
</template>

<style scoped>
.activity-title {
  text-transform: capitalize;
}
</style>
