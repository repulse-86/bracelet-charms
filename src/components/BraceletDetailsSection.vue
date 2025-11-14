<script setup lang="ts">
import { useBraceletMaker } from '@/stores/bracelet-maker'

const braceletMakerStore = useBraceletMaker()
</script>

<template>
    <section v-if="braceletMakerStore.braceletSummary.total > 0" class="font-serif uppercase">
        <ul>
            <li class="flex items-center space-x-2">
                <label>your bracelet value:</label>
                <span>₱{{ braceletMakerStore.braceletSummary.total }}</span>
            </li>

            <li class="flex items-center space-x-2">
                <label>charms added:</label>
                <span>{{ braceletMakerStore.braceletSummary.codes }}</span>
            </li>
        </ul>
    </section>
</template>
