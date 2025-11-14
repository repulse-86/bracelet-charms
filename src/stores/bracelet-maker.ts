import type { Bracelet } from '@/types/bracelet'
import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useMetalSwitchStore } from '@/stores/metal-switcher'

export const useBraceletMaker = defineStore('bracelet-maker', () => {
    const metalSwitchStore = useMetalSwitchStore()

    const bracelet = ref<Bracelet>({
        charms: [],
        metal: metalSwitchStore.selectedMetal,
    })

    watchEffect(() => {
        bracelet.value.metal = metalSwitchStore.selectedMetal
    })

    return {
        bracelet
    }
})
