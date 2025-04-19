<script lang="ts" setup>
import { useAppStore } from "../../stores/appStore";

const { favTeamId } = storeToRefs(useAppStore());
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8"
  >
    <main-table />
    <fav-team-box v-if="favTeamId" />
  </div>
</template>
