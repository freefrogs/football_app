<script lang="ts" setup>
import { MatchResult } from "../../types/enums";

const props = defineProps<{
  result: MatchResult;
  homeScore: number;
  awayScore: number;
}>();
</script>

<template>
  <td class="px-4 py-3 whitespace-nowrap">
    <div class="flex items-center space-x-2">
      <span class="text-gray-900 dark:text-white font-medium">
        {{ props.homeScore }} - {{ props.awayScore }}
      </span>
      <form-element :size="6" :result="props.result" />
    </div>
  </td>
</template>
