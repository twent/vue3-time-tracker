<script>
export default {
  inheritAttrs: false
}
</script>

<template>
  <li class="flex-1">
    <a v-bind="$attrs" class="flex flex-col items-center gap-1 transition hover:text-purple-600">
      <slot></slot>
    </a>
  </li>
</template>
