<script lang="ts" setup>
import type { SeasonSummary, SeasonMap } from "../../types/table.d.ts";

const props = defineProps<{ season: SeasonSummary }>();

const seasonMap = computed<SeasonMap[]>(() => [
  {
    label: "Played",
    value: props.season?.played ?? "N/A",
    color: "dark:text-white",
  },
  {
    label: "Won",
    value: props.season?.wins ?? "N/A",
    color: "text-green-600 dark:text-green-400",
  },
  {
    label: "Drawn",
    value: props.season?.draws ?? "N/A",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    label: "Lost",
    value: props.season?.losses ?? "N/A",
    color: "text-red-600 dark:text-red-400",
  },
]);
</script>

<template>
  <div class="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
    <h4 class="text-lg font-medium mb-3 dark:text-white">Season Summary</h4>
    <div class="grid grid-cols-4 gap-4">
      <div class="text-center" v-for="el in seasonMap" :key="el.label">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ el.label }}
        </p>
        <p class="text-2xl font-bold" :class="el.color">
          {{ el.value }}
        </p>
      </div>
    </div>
  </div>
</template>
