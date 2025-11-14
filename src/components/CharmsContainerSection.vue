<script setup lang="ts">
import { charms } from '@/data/charms'
import BraceletCharm from './BraceletCharm.vue'
import { useMetalSwitchStore } from '@/stores/metal-switcher'
import { useBraceletMaker } from '@/stores/bracelet-maker'

const metalSwitchStore = useMetalSwitchStore()
const braceletMakerStore = useBraceletMaker()
</script>

<template>
    <section class="grid lg:grid-cols-5 grid-cols-3 gap-4">
        <BraceletCharm
            v-for="charm in charms"
            :key="charm.id"
            :charm="charm"
            :metal="metalSwitchStore.selectedMetal"
            @click="braceletMakerStore.addCharm(charm)"
        />
    </section>
</template>
