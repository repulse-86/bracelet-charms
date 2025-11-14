import type { Bracelet } from '@/types/bracelet'
import { ref, watchEffect, computed } from 'vue'
import { defineStore } from 'pinia'
import { useMetalSwitchStore } from '@/stores/metal-switcher'
import type { Charm } from '@/types/charm'

export const useBraceletMaker = defineStore('bracelet-maker', () => {
    const metalSwitchStore = useMetalSwitchStore()

    const bracelet = ref<Bracelet>({
        charms: [],
        metal: metalSwitchStore.selectedMetal,
    })

    const braceletSummary = computed(() => {
        const charms = bracelet.value.charms ?? []
        const total = charms.reduce((t, c) => t + c.price, 0)
        const codes = charms.map((c) => c.code).join('-')
        return { total, codes }
    })

    watchEffect(() => {
        bracelet.value.metal = metalSwitchStore.selectedMetal
    })

    const addCharm = (charm: Charm) => {
        bracelet.value.charms?.push(charm)
    }

    const removeCharm = (charm: Charm) => {
        const index = bracelet.value.charms?.indexOf(charm)
        if (index !== undefined && index > -1) {
            bracelet.value.charms?.splice(index, 1)
        }
    }

    const clearCharms = () => {
        bracelet.value.charms = []
    }

    return {
        bracelet,
        addCharm,
        removeCharm,
        clearCharms,
        braceletSummary,
    }
})
