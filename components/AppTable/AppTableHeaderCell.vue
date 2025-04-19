<script lang="ts" setup>
import { useAppStore } from "../../stores/appStore";
import { SortDirection } from "../../types/enums";
import type { BasicHeaderCell, MainTableRow } from "../../types/table";

const props = defineProps<BasicHeaderCell<MainTableRow>>();

const store = useAppStore();
const { sortDir, sortField } = storeToRefs(store);
const { updateSortField, updateSortDir } = store;

const isSortIconVisible = computed<boolean>(
  () => props.isSortable && sortField.value === props.field
);

const toggleSortDirection = () => {
  if (!props.isSortable) return;
  let dir: SortDirection = SortDirection.Asc;
  if (sortField.value === props.field) {
    dir =
      sortDir.value === SortDirection.Asc
        ? SortDirection.Desc
        : SortDirection.Asc;
  }
  updateSortField(props.field);
  updateSortDir(dir);
};
</script>

<template>
  <th
    scope="col"
    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
    :class="{
      'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600':
        props.isSortable,
    }"
    @click="toggleSortDirection"
  >
    <div class="flex items-center space-x-1">
      <span>{{ props.label }}</span>
      <svg
        v-if="isSortIconVisible"
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="sortDir === SortDirection.Asc"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </th>
</template>
