<script lang="ts" setup>
import type { HeaderProps, MainTableRow } from "../../types/table";
import type { FormattedMatch } from "../../types/index";

const props = defineProps<HeaderProps<MainTableRow | FormattedMatch>>();
</script>

<template>
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <app-table-header :headers="props.headers" />
    <tbody
      class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
    >
      <slot />
    </tbody>
  </table>
</template>
