<script lang="ts" setup>
import { useFavActions } from "../../composables/useFavActions";

const props = defineProps<{ id?: number; isLink?: boolean }>();

const router = useRouter();

const { isFav } = useFavActions(props.id);

const handleRedirectClick = () => {
  if (props.id && props.isLink) router.push(`/teams/${props.id}`);
};
</script>

<template>
  <tr
    class="dark:hover:bg-gray-700 transition-colors"
    :class="{
      'bg-blue-50 dark:bg-blue-900/20': isFav,
      'cursor-pointer hover:bg-gray-100': props.isLink,
      'hover:bg-gray-50': !props.isLink,
    }"
    @click="handleRedirectClick"
  >
    <slot />
  </tr>
</template>
