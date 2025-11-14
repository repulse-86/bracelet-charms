import { Metal } from '@/types/metal'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMetalSwitchStore = defineStore('metalSwitcher', () => {
    const selectedMetal = ref<Metal>(Metal.Silver)

    const setMetal = (metal: Metal) => {
        selectedMetal.value = metal
        console.log(selectedMetal.value)
    }

    return { selectedMetal, setMetal }
})
