<script lang="ts" setup>
import { useAppStore } from "../stores/appStore";
import AppTableBasicCell from "../components/AppTable/AppTableBasicCell.vue";
import AppTableFavCell from "../components/AppTable/AppTableFavCell.vue";
import AppTableFormCell from "../components/AppTable/AppTableFormCell.vue";
import AppTableRow from "../components/AppTable/AppTableRow.vue";
import { MAIN_HEADERS } from "../utils/tablesConsts";
import type { MainTableRow } from "../types/table";

const fields = MAIN_HEADERS.map((header) => header.field);

const store = useAppStore();

const items = computed<MainTableRow[]>(() => {
  return store.sortedMainTableItems;
});
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8"
  >
    <app-table :headers="MAIN_HEADERS">
      <app-table-row v-for="i in items" :key="i.id" :id="i.id">
        <template v-for="f in fields" :key="f">
          <app-table-fav-cell v-if="f === 'name'" :id="i.id" :name="i.name" />
          <app-table-form-cell
            v-else-if="f === 'recentForm'"
            :results="i.recentForm"
          />
          <app-table-basic-cell v-else :val="i[f]" />
        </template>
      </app-table-row>
    </app-table>
  </div>
</template>
