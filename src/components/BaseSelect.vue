<script setup>
import { computed } from 'vue'
import { isValidActivityOrNull, validateSelectOptions, isUndefinedOrNull } from '../validators'
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  options: {
    required: true,
    type: Array
    // validator: validateSelectOptions
  },
  placeholder: {
    required: true,
    type: String
  },
  selected: String
})

const emit = defineEmits(['optionSelected'])
// const emit = defineEmits({
//   optionSelected: isValidActivityOrNull
// })

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>

<template>
  <div class="flex gap-2">
    <select
      @change="emit('optionSelected', $event.target.value)"
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
    >
      <option value="" :selected="isNotSelected" disabled>
        {{ placeholder }}
      </option>
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
