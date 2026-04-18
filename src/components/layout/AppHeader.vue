<script setup>
  import { useI18n } from 'vue-i18n';
  import { useMatchViewportSize } from '@/composables/use-match-viewport-size.js';
  import { useScrollToSection } from '@/composables/use-scroll-to-section.js';
  import { sections } from '@/constants/sections.js';
  import NavigationMenu from '@/components/ui/NavigationMenu.vue';
  import LanguageMenu from '@/components/ui/LanguageMenu.vue';
  import BaseInteractiveText from '@/components/ui/BaseInteractiveText.vue';
  import { useActiveSection } from '@/composables/use-active-section.js';

  const { t } = useI18n();
  const isDesktop = useMatchViewportSize('lg');

  const { scrollToTarget } = useScrollToSection();
  const { activeSection } = useActiveSection(sections);
</script>

<template>
  <header
    class="border-b-default bg-primary fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b-2 px-12 sm:px-24 md:px-36 lg:px-48 xl:px-60 2xl:px-72"
  >
    <a href="/">
      <img
        src="@/assets/images/branding/dreamspace-favicon.webp"
        alt="dreamspace_logo"
        class="h-6 w-auto object-contain"
      />
    </a>
    <nav v-if="isDesktop" class="flex w-md gap-x-4 lg:gap-x-8">
      <ul class="flex w-full gap-x-8">
        <li
          v-for="section in sections"
          :key="section.id"
          @click.prevent="scrollToTarget(section.id)"
          class="flex-1 text-center"
        >
          <BaseInteractiveText
            tag="a"
            :class="[{ 'text-default! font-bold': activeSection === section.id }]"
          >
            {{ t(`header.sections.${section.name}`) }}
          </BaseInteractiveText>
        </li>
      </ul>
    </nav>
    <nav class="flex items-center gap-x-4">
      <LanguageMenu />
      <NavigationMenu v-if="!isDesktop" />
    </nav>
  </header>
</template>
