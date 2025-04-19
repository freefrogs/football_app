<script lang="ts" setup>
import { useAppStore } from "../../stores/appStore";

const props = defineProps<{ id?: number }>();

const router = useRouter();

const store = useAppStore();

const handleRedirectClick = () => {
  if (props.id) router.push(`/teams/${props.id}`);
};
</script>

<template>
  <tr
    class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
    :class="{
      'bg-blue-50 dark:bg-blue-900/20': store.favTeamId === props.id,
    }"
    @click="handleRedirectClick"
  >
    <slot />
  </tr>
</template>
