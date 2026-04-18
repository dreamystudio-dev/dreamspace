<script setup>
  import { useI18n } from 'vue-i18n';
  import BaseHeader from '@/components/ui/BaseHeader.vue';
  import BaseSection from '@/components/ui/BaseSection.vue';
  import BaseCard from '@/components/ui/BaseCard.vue';

  const { t } = useI18n();
</script>

<template>
  <BaseSection>
    <div class="border-b-default/50 w-full border-b-2 pb-24">
      <BaseHeader :heading="t('profile.heading')" :icon="'UserRound'" :justify="'start'" />
      <BaseCard class="flex flex-col p-8 text-center">
        <p class="text-lg leading-loose">
          {{ t('profile.description') }}
        </p>
      </BaseCard>
    </div>
  </BaseSection>
</template>
