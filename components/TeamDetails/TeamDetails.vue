<script lang="ts" setup>
import { TeamDetailsMatchesHistory } from "#components";
import { useTableData } from "../../composables/useTableData";
import type { MainTableRow } from "../../types/table.d.ts";

const props = defineProps<{ id: number }>();

const router = useRouter();

const { getTeamDataById } = useTableData();

const teamData = computed<MainTableRow | undefined>(() =>
  getTeamDataById(props.id)
);

watch(
  [() => props.id, () => teamData.value],
  ([id, team]) => {
    if (!id || !team) router.push("/teams");
  },
  { immediate: true }
);
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <team-details-header
      :name="teamData?.name"
      :pos="teamData?.position"
      :points="teamData?.points"
    />
    <team-details-info :id="props.id" />
    <TeamDetailsMatchesHistory :team="teamData" />
  </div>
</template>
