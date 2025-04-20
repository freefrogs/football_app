<script lang="ts" setup>
const route = useRoute();
const id = computed(() => parseInt(route.params.id as string));
</script>

<template>
  <div class="py-6">
    <team-details-nav :id="id" />
    <team-details :id="id" />
  </div>
</template>
