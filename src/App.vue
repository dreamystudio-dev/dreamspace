<script setup>
  import { onMounted } from 'vue';
  import { useAnimateApp } from '@/composables/use-animate-app.js';
  import { sections } from '@/constants/sections.js';
  import AppHeader from '@/components/layout/AppHeader.vue';
  import AppFooter from '@/components/layout/AppFooter.vue';
  import AppBackground from '@/components/layout/AppBackground.vue';

  const { animateApp } = useAnimateApp();

  onMounted(() => {
    animateApp();
  });
</script>

<template>
  <div id="main-wrapper">
    <AppHeader />
    <AppBackground />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Component
          v-for="section in sections"
          :is="section.tag"
          :id="section.id"
          :key="section.id"
        />
        <AppFooter />
      </div>
    </div>
  </div>
</template>
