<script lang="ts" setup>
import { MatchResult } from "../../types/enums";

const props = defineProps<{ results: MatchResult[] }>();
</script>

<template>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex space-x-1">
      <form-element
        v-for="(r, i) in props.results"
        :size="6"
        :result="r"
        :key="`${r}-${i}`"
      />
    </div>
  </td>
</template>
