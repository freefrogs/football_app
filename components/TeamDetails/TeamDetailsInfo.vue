<script lang="ts" setup>
import { useTableData } from "../../composables/useTableData";
import FoundedIcon from "../AppIcons/FoundedIcon.vue";
import StadiumIcon from "../AppIcons/StadiumIcon.vue";
import CoachIcon from "../AppIcons/CoachIcon.vue";
import type { TeamInfo, InfoElement, MapElement } from "../../types/table";

const props = defineProps<{ id: number }>();

const { getTeamInfoById } = useTableData();

const teamInfo = computed<TeamInfo>(() => getTeamInfoById(props.id));
const isVisible = computed<boolean>(() => !!props.id && !!teamInfo.value);
const mapInfo = computed<InfoElement[]>(() => [
  {
    component: FoundedIcon,
    label: "Founded:",
    value: teamInfo.value?.founded,
    hasBtn: false,
  },
  {
    component: StadiumIcon,
    label: "Stadium:",
    value: teamInfo.value?.stadium,
    hasBtn: true,
  },
  {
    component: CoachIcon,
    label: "Coach:",
    value: teamInfo.value?.coach,
    hasBtn: false,
  },
]);
const mapStats = computed<MapElement[]>(() => [
  { label: "Points", value: teamInfo.value?.points },
  { label: "Goals Scored", value: teamInfo.value?.goalsFor },
  { label: "Goals Conceded", value: teamInfo.value?.goalsAgainst },
]);

const openEditInfoModal = () => console.log("open");
</script>

<template>
  <div class="p-6">
    <div
      class="flex flex-col md:flex-row md:justify-between md:items-start gap-6"
      v-if="isVisible"
    >
      <div>
        <div class="flex items-center mb-4">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ teamInfo.name }}
          </h2>
          <span
            class="ml-3 px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          >
            #{{ teamInfo.position }}
          </span>
        </div>
        <div class="space-y-3">
          <div
            class="flex items-center space-x-2"
            v-for="el in mapInfo"
            :key="el.label"
          >
            <component :is="el.component" />
            <p class="dark:text-gray-300">
              <strong>{{ el.label }}</strong> {{ el.value ?? "N/A" }}
              <button
                v-if="el.hasBtn"
                @click="openEditInfoModal"
                class="ml-2 text-blue-600 cursor-pointer hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
              >
                Edit
              </button>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 dark:text-white">Team Stats</h3>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            v-for="el in mapStats"
            :key="el.label"
          >
            <h4
              class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2"
            >
              {{ el.label }}
            </h4>
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ el.value ?? 0 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
