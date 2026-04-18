<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import BaseIcon from '@/components/ui/BaseIcon.vue';
  import BaseInteractiveText from '@/components/ui/BaseInteractiveText.vue';
  import { onClickOutside } from '@vueuse/core';
  import BaseCard from '@/components/ui/BaseCard.vue';

  const { t, locale } = useI18n();
  const isMenuOpen = ref(false);
  const menuRef = ref(null);

  const languages = [
    { code: 'en', label: t('languages.english') },
    { code: 'es', label: t('languages.spanish') },
  ];

  function setLanguage(lang) {
    locale.value = lang;
    isMenuOpen.value = false;
  }

  onClickOutside(menuRef, () => {
    isMenuOpen.value = false;
  });
</script>

<template>
  <div ref="menuRef" class="relative">
    <BaseInteractiveText class="flex cursor-pointer" @click="isMenuOpen = !isMenuOpen">
      <BaseIcon name="Languages" />
      <BaseIcon name="ChevronUp" v-if="isMenuOpen" />
      <BaseIcon name="ChevronDown" v-else class="pointer-events-none" />
    </BaseInteractiveText>
    <BaseCard v-if="isMenuOpen" class="absolute top-16 right-0 min-w-40 px-4">
      <ul class="divide-default/25 divide-y">
        <li v-for="lang in languages" :key="lang.code">
          <BaseInteractiveText
            class="flex w-full items-center py-4"
            @click="setLanguage(lang.code)"
            :class="{ 'text-default! font-bold': locale === lang.code }"
          >
            <BaseIcon name="LucideStar" v-if="locale === lang.code" />
            <p class="w-full text-right">{{ lang.label }}</p>
          </BaseInteractiveText>
        </li>
      </ul>
    </BaseCard>
  </div>
</template>
