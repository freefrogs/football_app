<script lang="ts" setup>
const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-100 dark:bg-blue-800 py-6 mt-12">
    <div class="container mx-auto px-4">
      <div class="text-center text-gray-600 dark:text-gray-400">
        <p>© {{ currentYear }} Polish Football League. All rights reserved.</p>
        <p class="mt-2 text-sm">Data is for demonstration purposes only.</p>
      </div>
    </div>
  </footer>
</template>
