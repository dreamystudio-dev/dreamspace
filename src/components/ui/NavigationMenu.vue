<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { sections } from '@/constants/sections.js';
  import { useScrollToSection } from '@/composables/use-scroll-to-section.js';
  import { useActiveSection } from '@/composables/use-active-section.js';
  import BaseIcon from '@/components/ui/BaseIcon.vue';
  import BaseInteractiveText from '@/components/ui/BaseInteractiveText.vue';
  import { onClickOutside } from '@vueuse/core';
  import BaseCard from '@/components/ui/BaseCard.vue';

  const { t } = useI18n();
  const menuRef = ref(null);
  const isMenuOpen = ref(false);

  const { scrollToTarget } = useScrollToSection();
  const { activeSection } = useActiveSection(sections);

  onClickOutside(menuRef, () => {
    isMenuOpen.value = false;
  });

  function handleItemClick(sectionId) {
    scrollToTarget(sectionId);
    isMenuOpen.value = false;
  }
</script>

<template>
  <div ref="menuRef" class="relative inline-block">
    <BaseInteractiveText class="flex cursor-pointer" @click="isMenuOpen = !isMenuOpen">
      <BaseIcon name="LucideX" v-if="isMenuOpen" />
      <BaseIcon name="MenuIcon" v-else class="pointer-events-none" />
    </BaseInteractiveText>
    <BaseCard v-if="isMenuOpen" class="absolute top-16 right-0 min-w-48 px-4">
      <ul class="divide-default/25 divide-y">
        <li v-for="section in sections" :key="section.id">
          <BaseInteractiveText
            class="flex w-full items-center py-4"
            @click.prevent="handleItemClick(section.id)"
            :class="{ 'text-default! font-bold': activeSection === section.id }"
          >
            <BaseIcon v-if="activeSection === section.id" name="LucideStar" />
            <p class="w-full text-right">
              {{ t(`header.sections.${section.name}`) }}
            </p>
          </BaseInteractiveText>
        </li>
      </ul>
    </BaseCard>
  </div>
</template>
