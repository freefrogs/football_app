<script lang="ts" setup>
import type { MainTableRow, SeasonSummary } from "../../types/table.d.ts";

const props = defineProps<{ team: MainTableRow | undefined }>();
const isMatchesVisible = computed<boolean>(
  () => !!props.team && !!props.team?.recentForm?.length
);
const seasonSummary = computed<SeasonSummary>(() => ({
  played: props.team?.played,
  wins: props.team?.wins,
  draws: props.team?.draws,
  losses: props.team?.losses,
}));
</script>

<template>
  <div class="p-6 border-t border-gray-200 dark:border-gray-700">
    <h3 class="text-xl font-semibold mb-4 dark:text-white">All Matches</h3>
    <div v-if="isMatchesVisible">
      <div class="mb-6">
        <h4 class="text-lg font-medium mb-2 dark:text-white">Recent Form</h4>
        <div class="flex space-x-3">
          <form-element
            v-for="(match, index) in props.team?.recentForm"
            :key="`${match}-${index}`"
            :size="10"
            :result="match"
          />
        </div>
        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Most recent match on the right
        </p>
      </div>
      <team-details-season-summary :season="seasonSummary" />
      <MatchTable v-if="props.team?.id" :id="props.team?.id" />
    </div>
    <div v-else class="text-center py-8 text-gray-500 dark:text-gray-400">
      No match history available
    </div>
  </div>
</template>
