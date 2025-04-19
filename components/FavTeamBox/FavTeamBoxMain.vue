<script lang="ts" setup>
import type { MatchResult } from "../../types/enums";

const props = defineProps<{ form?: MatchResult[]; id?: number }>();

const isRecentFormVisible = computed<boolean>(() => !!props.form?.length);
</script>

<template>
  <div class="p-6">
    <div v-if="isRecentFormVisible">
      <!-- Recent Form Display -->
      <div class="mt-2">
        <div class="flex space-x-3">
          <form-element
            v-for="(match, index) in props.form"
            :key="`${match}-${index}`"
            :size="10"
            :result="match"
          />
        </div>
        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Most recent match on the right
        </p>
      </div>
    </div>
    <div v-else class="text-center py-4 text-gray-500 dark:text-gray-400">
      No recent matches available
    </div>
    <div class="mt-6 overflow-x-auto">
      <match-table v-if="props.id" :id="props.id" :limit="5" />
    </div>
  </div>
</template>
