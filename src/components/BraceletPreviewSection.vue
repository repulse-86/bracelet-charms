<script setup lang="ts">
import BraceletCharm from './BraceletCharm.vue'
import { useMetalSwitchStore } from '@/stores/metal-switcher'
import { useBraceletMaker } from '@/stores/bracelet-maker'
import { charms } from '@/data/charms'

const metalSwitchStore = useMetalSwitchStore()
const braceletMakerStore = useBraceletMaker()
</script>

<template>
    <section>
        <div class="bg-gray-50 p-4 flex justify-center items-center space-x-2">
            <template
                v-if="
                    charms && charms.length > 0
                "
            >
                <BraceletCharm
                    v-for="charm in charms"
                    :key="charm.id"
                    :charm="charm"
                    :metal="metalSwitchStore.selectedMetal"
                    class="w-30 h-auto"
                />
            </template>
            <p v-else class="text-8xl font-serif uppercase text-center">bracelet preview</p>
        </div>
    </section>
</template>
