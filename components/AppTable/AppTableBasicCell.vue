<script lang="ts" setup>
const props = defineProps<{ val: string | number }>();
</script>

<template>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm font-medium text-gray-900 dark:text-white">
      {{ props.val ?? "-" }}
    </div>
  </td>
</template>
