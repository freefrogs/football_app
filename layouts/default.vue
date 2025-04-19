<script lang="ts" setup>
import { useAppStore } from "../stores/appStore";
import type { TeamsResponse } from "../types/index";

const store = useAppStore();
const { updateIsLoading, updateData } = store;
const { isLoading } = storeToRefs(store);

const fetchTeams = async () => {
  updateIsLoading(true);

  try {
    // Add artificial delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 800));
    const data = await $fetch<TeamsResponse>("/data/teams.json");
    updateData(data ?? null);
  } catch (error: unknown) {
    console.error("Error fetching teams:", error);
    updateData(null);
  } finally {
    updateIsLoading(false);
  }
};

onMounted(() => fetchTeams());
</script>

<template>
  <div>
    <app-header />
    <main class="container mx-auto grow px-4 py-8">
      <app-loader v-if="isLoading" />
      <NuxtPage v-else />
    </main>
    <app-footer />
  </div>
</template>
