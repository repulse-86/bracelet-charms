<script setup lang="ts">
import { charms } from '@/data/charms'
import BraceletCharm from './BraceletCharm.vue'
import { useMetalSwitchStore } from '@/stores/metal-switcher'

const metalSwitchStore = useMetalSwitchStore()
</script>

<template>
    <section class="grid lg:grid-cols-5 grid-cols-3 gap-4">
        <BraceletCharm
            v-for="charm in charms"
            :key="charm.id"
            :charm="charm"
            :metal="metalSwitchStore.selectedMetal"
        />
    </section>
</template>
