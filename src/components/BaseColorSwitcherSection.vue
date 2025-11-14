<script setup lang="ts">
import { Metal } from '@/types/metal'
import BraceletCharm from '@/components/BraceletCharm.vue'
import { useMetalSwitchStore } from '@/stores/metal-switcher'

const metalSwitchStore = useMetalSwitchStore()
</script>

<template>
    <section class="flex flex-col justify-center items-center">
        <div class="flex justify-center space-x-4 mb-4">
            <div class="flex flex-col">
                <label for="" class="text-center text-4xl font-bold font-serif uppercase"
                    >Silver</label
                >
                <BraceletCharm
                    class="w-40 h-35"
                    @click="metalSwitchStore.setMetal(Metal.Silver)"
                    :metal="Metal.Silver"
                />
            </div>
            <div class="flex flex-col">
                <label for="" class="text-center text-4xl font-bold font-serif uppercase"
                    >Gold</label
                >
                <BraceletCharm
                    class="w-40 h-35"
                    @click="metalSwitchStore.setMetal(Metal.Gold)"
                    :metal="Metal.Gold"
                />
            </div>
        </div>
        <h2 class="text-lg uppercase font-serif">start your creation by picking a base color</h2>
    </section>
</template>
