<script setup lang="ts">
import BaseColorSwitcherSection from '@/components/BaseColorSwitcherSection.vue'
import BraceletDetailsSection from '@/components/BraceletDetailsSection.vue'
import BraceletPreviewSection from '@/components/BraceletPreviewSection.vue'
import CharmsContainerSection from '@/components/CharmsContainerSection.vue'
import HeaderSection from '@/components/HeaderSection.vue'
</script>

<template>
    <div class="space-y-8">
        <HeaderSection />
        <BaseColorSwitcherSection />
        <BraceletPreviewSection />
        <BraceletDetailsSection />
        <CharmsContainerSection />
    </div>
</template>
