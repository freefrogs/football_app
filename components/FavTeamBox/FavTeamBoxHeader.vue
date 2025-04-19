<script lang="ts" setup>
const props = defineProps<{ name?: string; id?: number }>();

const router = useRouter();

const handleViewDetailsClick = () => {
  if (!!props.id) {
    router.push(`/teams/${props.id}`);
  } else {
    console.warn("Missing team ID");
  }
};
</script>

<template>
  <div
    class="p-4 bg-blue-50 dark:bg-blue-900 border-b border-blue-100 dark:border-blue-800"
  >
    <div class="flex justify-between items-center">
      <h2
        class="text-lg font-semibold text-blue-800 dark:text-blue-200 flex items-center"
      >
        <fav-star-icon class="text-yellow-300" :size="8" />
        <span class="ml-3 mr-1">{{ props.name || "Unknown Team" }}</span>
        <span> - Recent Form</span>
      </h2>
      <button
        @click="handleViewDetailsClick"
        class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
      >
        View Full Details
      </button>
    </div>
  </div>
</template>
