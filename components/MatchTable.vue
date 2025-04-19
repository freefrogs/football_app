<script lang="ts" setup>
import AppTableRow from "../components/AppTable/AppTableRow.vue";
import { useTableData } from "../composables/useTableData";
import { MATCH_TABLE_HEADERS } from "../utils/tablesConsts";
import type { FormattedMatch } from "../types/index";
import type { BasicHeaderCell, MainTableRow } from "../types/table";

const headers = [...MATCH_TABLE_HEADERS] as BasicHeaderCell<
  MainTableRow | FormattedMatch
>[];

const props = defineProps<{ id: number; limit?: number }>();

const fields = MATCH_TABLE_HEADERS.map((header) => header.field);

const { getTeamMatches } = useTableData();

const items = computed<FormattedMatch[]>(() => {
  if (!props.id) return [];
  return getTeamMatches(props.id, props.limit);
});
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8"
  >
    <app-table :headers="headers">
      <app-table-row v-for="i in items" :key="i.id" :id="i.id">
        <template v-for="f in fields" :key="f">
          <app-table-date-cell v-if="f === 'date'" :date="i.date" />
          <app-table-match-cell
            v-else-if="f === 'id'"
            :isHome="i.isHome"
            :homeTeam="i.homeTeam"
            :awayTeam="i.awayTeam"
          />
          <app-table-result-cell
            v-else
            :result="i.result"
            :homeScore="i.homeScore"
            :awayScore="i.awayScore"
          />
        </template>
      </app-table-row>
    </app-table>
  </div>
</template>
