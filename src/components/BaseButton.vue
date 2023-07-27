<script>
import {
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_INFO
} from '../constants'

const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-200 enabled:hover:bg-gray-300',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-400 text-white',
  [BUTTON_TYPE_SUCCESS]: 'bg-green-500 enabled:hover:bg-green-400 text-white',
  [BUTTON_TYPE_INFO]: 'bg-blue-300 enabled:hover:bg-blue-400'
}
</script>

<script setup>
import { isValidButtonType } from '../validators'

defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validator: isValidButtonType
  }
})
</script>

<template>
  <button
    :class="`${typeClasses[type]} rounded p-2 disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>
