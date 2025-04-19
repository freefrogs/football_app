<script lang="ts" setup>
import { useAppStore } from "../../stores/appStore";

const props = defineProps<{ id: number; name: string }>();

const store = useAppStore();
const { updateFavTeamId } = store;

const currentBtnClasses = computed<string>(() =>
  props.id === store.favTeamId
    ? "bg-yellow-500 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
);

const toggleFavoriteTeam = () => {
  updateFavTeamId(store.favTeamId === props.id ? undefined : props.id);
};
</script>

<template>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
      <div class="text-sm font-medium text-gray-900 dark:text-white">
        {{ props.name }}
      </div>
      <button
        @click.stop="toggleFavoriteTeam"
        class="ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        :class="currentBtnClasses"
        title="Set as favorite team"
      >
        <fav-star-icon />
      </button>
    </div>
  </td>
</template>
