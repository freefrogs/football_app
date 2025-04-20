<script lang="ts" setup>
import FavStarIcon from "../AppIcons/FavStarIcon.vue";

import { useFavActions } from "../../composables/useFavActions";

const props = defineProps<{ id: number }>();

const { isFav, toggleFavoriteTeam } = useFavActions(props.id);

const favBtnText = computed<string>(() =>
  isFav.value ? "Favorite Team" : "Set as Favorite"
);
</script>

<template>
  <div class="flex justify-between items-center mb-6">
    <NuxtLink to="/teams">
      <button
        class="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Teams
      </button>
    </NuxtLink>

    <button
      @click="toggleFavoriteTeam"
      class="flex items-center px-3 py-2 rounded-md transition-colors"
      :class="
        isFav
          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
          : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
      "
    >
      <FavStarIcon />
      {{ favBtnText }}
    </button>
  </div>
</template>
