<script setup lang="ts">
import BraceletCharm from './BraceletCharm.vue'
import { useMetalSwitchStore } from '@/stores/metal-switcher'
import { useBraceletMaker } from '@/stores/bracelet-maker'

const metalSwitchStore = useMetalSwitchStore()
const braceletMakerStore = useBraceletMaker()
</script>

<template>
    <section>
        <div class="bg-gray-50 p-4 flex justify-center items-center space-x-2 overflow-x-auto">
            <template
                v-if="
                    braceletMakerStore.bracelet.charms &&
                    braceletMakerStore.bracelet.charms.length > 0
                "
            >
                <BraceletCharm
                    v-for="charm in braceletMakerStore.bracelet.charms"
                    :key="charm.id"
                    :charm="charm"
                    :metal="metalSwitchStore.selectedMetal"
                    class="min-w-30 min-h-30 max-w-30 max-h-30"
                    @click="braceletMakerStore.removeCharm(charm)"
                />
            </template>
            <p v-else class="text-8xl font-serif uppercase text-center">bracelet preview</p>
        </div>
    </section>
</template>
