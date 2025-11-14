<script setup lang="ts">
import BraceletCharm from './BraceletCharm.vue'
import { useMetalSwitchStore } from '@/stores/metal-switcher'
import { useBraceletMaker } from '@/stores/bracelet-maker'
import { computed, ref } from 'vue'
import { toPng } from 'html-to-image'

const metalSwitchStore = useMetalSwitchStore()
const braceletMakerStore = useBraceletMaker()

const previewArea = ref<HTMLElement | null>(null)
const showPreview = ref(true)

const hasCharms = computed(
    (): boolean =>
        showPreview.value &&
        Array.isArray(braceletMakerStore.bracelet.charms) &&
        braceletMakerStore.bracelet.charms.length > 0,
)

function copyDesignCode() {
    navigator.clipboard.writeText(braceletMakerStore.braceletSummary.codes).then(() => {
        alert('Design code copied!')
    })
}

function downloadPreview() {
    if (previewArea.value) {
        toPng(previewArea.value)
            .then(function (dataUrl) {
                const link = document.createElement('a')
                link.download = 'bracelet-design.png'
                link.href = dataUrl
                link.click()
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error)
            })
    }
}

function togglePreview() {
    showPreview.value = !showPreview.value
}
</script>

<template>
    <section class="sticky top-0">
        <div class="bg-gray-50 p-4 space-y-4">
            <div v-if="hasCharms" ref="previewArea" class="grid lg:grid-cols-10 grid-cols-4 gap-4">
                <BraceletCharm
                    v-for="charm in braceletMakerStore.bracelet.charms"
                    :key="charm.id"
                    :charm="charm"
                    :metal="metalSwitchStore.selectedMetal"
                    @click="braceletMakerStore.removeCharm(charm)"
                />
            </div>

            <p v-if="showPreview && !hasCharms" class="lg:text-8xl text-lg font-serif uppercase text-center">
                bracelet preview
            </p>

            <div class="grid lg:grid-cols-4 grid-cols-2 gap-2">
                <button class="bg-gray-200 p-3" @click="braceletMakerStore.clearCharms">
                    Start over
                </button>
                <button class="bg-gray-200 p-3 lg:text-base text-xs" @click="copyDesignCode">Copy design code</button>
                <button class="bg-gray-200 p-3 lg:text-base text-xs" @click="downloadPreview">Download Design</button>
                <button class="bg-gray-200 p-3 lg:text-base text-xs" @click="togglePreview">
                    {{ showPreview ? 'Close' : 'Open' }} Preview
                </button>
            </div>
        </div>
    </section>
</template>
