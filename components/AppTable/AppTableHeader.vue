<script lang="ts" setup>
import AppTableHeaderCell from "./AppTableHeaderCell.vue";
import type { HeaderProps, MainTableRow } from "../../types/table";

const props = defineProps<HeaderProps<MainTableRow>>();
</script>

<template>
  <thead class="bg-gray-50 dark:bg-gray-700">
    <tr>
      <app-table-header-cell
        v-for="h in props.headers"
        :key="h.label"
        :label="h.label"
        :isSortable="h.isSortable"
        :field="h.field"
      />
    </tr>
  </thead>
</template>
