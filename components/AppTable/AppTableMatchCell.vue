<script lang="ts" setup>
const props = defineProps<{
  isHome: boolean;
  homeTeam: string;
  awayTeam: string;
}>();
</script>

<template>
  <td class="px-4 py-3 whitespace-nowrap">
    <div class="flex items-center">
      <span
        :class="{ 'font-bold': props.isHome }"
        class="text-gray-900 dark:text-white"
      >
        {{ props.homeTeam }}
      </span>
      <span class="mx-2 text-gray-500 dark:text-gray-400">vs</span>
      <span
        :class="{ 'font-bold': !props.isHome }"
        class="text-gray-900 dark:text-white"
      >
        {{ props.awayTeam }}
      </span>
    </div>
  </td>
</template>
