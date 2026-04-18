<script setup>
  import { useI18n } from 'vue-i18n';
  import { useDownloadResume } from '@/composables/use-download-resume.js';
  import BaseIcon from '@/components/ui/BaseIcon.vue';
  import BaseSection from '@/components/ui/BaseSection.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';

  const { t } = useI18n();

  const { resumeFile } = useDownloadResume();
</script>

<template>
  <BaseSection class="border-b-default border-b-8">
    <div class="flex h-screen flex-col items-center justify-center gap-y-12">
      <div>
        <img
          src="@/assets/images/branding/dreamspace-logo.webp"
          alt="dreamspace_logo"
          class="lg:h-64"
        />
        <p class="animate-pulse text-center text-xl">
          {{ t('hero.role') }}
        </p>
      </div>
      <BaseButton :href="resumeFile" download="resume" class="">
        {{ t('hero.resume') }}
        <template #icon>
          <BaseIcon name="Heart" />
        </template>
      </BaseButton>
    </div>
  </BaseSection>
</template>
