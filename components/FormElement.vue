<script lang="ts" setup>
import { MatchResult } from "../types/enums";

type PropsType = { size: 6 | 10; result: MatchResult };
const props = defineProps<PropsType>();

const currentClasses = computed<string>(() => {
  let colorClass = "";

  if (props.result === MatchResult.Win) colorClass = "bg-green-500";
  if (props.result === MatchResult.Loss) colorClass = "bg-red-500";
  if (props.result === MatchResult.Draw) colorClass = "bg-yellow-500";
  const textClass = props.size === 6 ? "text-xs" : "text-sm";
  const h = props.size === 6 ? "h-6" : "h-10";
  const w = props.size === 6 ? "w-6" : "w-10";
  return `${w} ${h} ${colorClass} ${textClass}`;
});
</script>

<template>
  <span
    class="flex items-center justify-center text-white font-bold rounded-full"
    :class="currentClasses"
  >
    {{ props.result }}
  </span>
</template>
