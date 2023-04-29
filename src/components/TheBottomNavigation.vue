<script setup>
import { NAV_ITEMS } from '../constants'
import NavItem from './NavItem.vue'

defineProps({
  currentPage: {
    required: true,
    type: String
  }
})

const emit = defineEmits(['pageChanged'])
</script>

<template>
  <nav class="sticky bottom-0 z-20 border-t bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur">
    <ul
      class="flex items-center justify-around gap-4 text-center text-xs font-semibold capitalize text-gray-600"
    >
      <NavItem
        @click="emit('pageChanged', page)"
        v-for="(icon, page) in NAV_ITEMS"
        :href="`#${page}`"
        :key="page"
        :class="{ 'pointer-events-none text-purple-600': currentPage === page }"
      >
        <component :is="icon" class="w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
