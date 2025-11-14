<script setup lang="ts">
import type { Charm } from '@/types/charm'
import { Metal, MetalColor } from '@/types/metal'
import { computed } from 'vue'

const props = defineProps<{ charm?: Charm; metal: Metal }>()
const color = computed(() => MetalColor[props.metal])
</script>

<template>
    <div :class="color" class="border border-gray-black p-4">
        <img :src="charm?.image_url" :alt="charm?.code" />
    </div>
</template>
