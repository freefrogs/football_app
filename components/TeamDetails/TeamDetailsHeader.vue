<script lang="ts" setup>
const props = defineProps<{ name?: string; pos?: number; points?: number }>();
</script>

<template>
  <div class="bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white">
    <h2 class="text-3xl font-bold">{{ props.name ?? "Unknown Team" }}</h2>
    <p class="text-blue-100">
      Position: #{{ props.pos ?? "N/A" }} • Points: {{ props.points ?? "N/A" }}
    </p>
  </div>
</template>
