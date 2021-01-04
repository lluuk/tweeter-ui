<template>
  <button class="text-xs text-white py-2 px-6 bg-blue rounded-sm">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton'
});
</script>
