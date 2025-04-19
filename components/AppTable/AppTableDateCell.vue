<script lang="ts" setup>
const props = defineProps<{ date: string }>();
</script>

<template>
  <td
    class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
  >
    {{ props.date ?? "-" }}
  </td>
</template>
