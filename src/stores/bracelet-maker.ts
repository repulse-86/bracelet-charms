import type { Bracelet } from '@/types/bracelet'
import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useMetalSwitchStore } from '@/stores/metal-switcher'
import type { Charm } from '@/types/Charm'

export const useBraceletMaker = defineStore('bracelet-maker', () => {
    const metalSwitchStore = useMetalSwitchStore()

    const bracelet = ref<Bracelet>({
        charms: [],
        metal: metalSwitchStore.selectedMetal,
    })

    watchEffect(() => {
        bracelet.value.metal = metalSwitchStore.selectedMetal
    })

    const addCharm = (charm: Charm) => {
        bracelet.value.charms?.push(charm)
    }

    return {
        bracelet,
        addCharm,
    }
})
