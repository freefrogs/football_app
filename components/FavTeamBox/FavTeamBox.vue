<script lang="ts" setup>
import { useAppStore } from "../../stores/appStore";
import { useTableData } from "../../composables/useTableData";
import type { MainTableRow } from "../../types/table";

const store = useAppStore();
const { favTeamId } = storeToRefs(store);

const { getTeamDataById } = useTableData();

const favTeam = computed<MainTableRow | null>(() => {
  if (!favTeamId.value) return null;
  return getTeamDataById(favTeamId.value) ?? null;
});
const isFavBoxVisible = computed<boolean>(
  () => !!favTeam.value && !!favTeamId.value
);
</script>

<template>
  <div class="mb-8">
    <div
      class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      v-if="isFavBoxVisible"
    >
      <fav-team-box-header :name="favTeam?.name" :id="favTeamId" />
      <fav-team-box-main :form="favTeam?.recentForm" :id="favTeamId" />
    </div>
  </div>
</template>
