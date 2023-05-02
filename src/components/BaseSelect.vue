<script setup>
import { isValidActivity, validateSelectOptions } from '../validators'
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  placeholder: {
    required: true,
    type: String
  },
  selected: String
})

const emit = defineEmits({
  optionSelected: isValidActivity
})
</script>

<template>
  <div class="flex gap-2">
    <select
      @change="emit('optionSelected', $event.target.value)"
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
    >
      <option value="" selected>{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>

    <BaseButton @click="emit('optionSelected', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
  </div>
</template>
