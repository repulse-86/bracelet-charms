<script setup lang="ts">
import { Metal, MetalColor } from '@/types/metal'
import { computed } from 'vue';

const props = defineProps<{ metal: Metal }>()
const color = computed(() => MetalColor[props.metal])
</script>

<template>
    <div :class="color" class="w-40 h-35 border border-gray-black">
        {{ metal }}
    </div>
</template>
