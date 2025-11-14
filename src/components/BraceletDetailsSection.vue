<script setup lang="ts">
import { computed } from 'vue'
import type { Bracelet } from '@/types/bracelet'

const props = defineProps<{ bracelet: Bracelet }>()

const braceletSummary = computed(() => {
    const total = props.bracelet.charms?.reduce((t, c) => t + c.price, 0) ?? 0
    const codes = props.bracelet.charms?.map((c) => c.code).join('-') ?? ''
    return { total, codes }
})
</script>

<template>
    <section v-if="braceletSummary.total > 0" class="font-serif uppercase">
        <ul>
            <li class="flex items-center space-x-2">
                <label>your bracelet value:</label>
                <span>₱{{ braceletSummary.total }}</span>
            </li>

            <li class="flex items-center space-x-2">
                <label>charms added:</label>
                <span>{{ braceletSummary.codes }}</span>
            </li>
        </ul>
    </section>
</template>
