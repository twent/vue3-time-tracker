<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
</script>

<template>
  <div>
    <header
      class="sticky top-0 z-20 flex items-center justify-between border-b bg-white/70 p-4 shadow-sm backdrop-blur"
    >
      <TheLogo />

      <TheHeaderProgress />
    </header>
  </div>
</template>
