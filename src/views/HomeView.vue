<script setup lang="ts">
import BaseColorSwitcherSection from '@/components/BaseColorSwitcherSection.vue'
import BraceletDetailsSection from '@/components/BraceletDetailsSection.vue'
import BraceletPreviewSection from '@/components/BraceletPreviewSection.vue'
import CharmsContainerSection from '@/components/CharmsContainerSection.vue'
import HeaderSection from '@/components/HeaderSection.vue'
import { useBraceletMaker } from '@/stores/bracelet-maker'
</script>

<template>
    <div class="space-y-8">
        <HeaderSection />
        <BaseColorSwitcherSection />
        <BraceletPreviewSection />
        <BraceletDetailsSection :bracelet="useBraceletMaker().bracelet" />
        <CharmsContainerSection />
    </div>
</template>
