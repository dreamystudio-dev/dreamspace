<script setup>
  import { useI18n } from 'vue-i18n';
  import { sendEmail } from '@/composables/use-send-email.js';
  import { socials } from '@/constants/socials.js';
  import BaseHeader from '@/components/ui/BaseHeader.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseSection from '@/components/ui/BaseSection.vue';
  import BaseCard from '@/components/ui/BaseCard.vue';

  const { t } = useI18n();
</script>

<template>
  <BaseSection>
    <BaseHeader :heading="t('contact.heading')" :icon="'Mail'" :justify="'end'" />
    <div class="mb-16 flex w-full flex-col justify-between gap-y-12 lg:flex-row lg:gap-x-12">
      <div class="flex h-full flex-col p-0 lg:w-1/2">
        <ul class="flex w-full flex-col gap-y-12">
          <li v-for="(link, key) in socials" :key="key">
            <BaseButton :href="link.href" :title="link.title" target="_blank">
              {{ link.title }}
            </BaseButton>
          </li>
        </ul>
      </div>
      <BaseCard class="p-8">
        <h2 class="font-heading pb-8 text-center text-3xl">
          {{ t('contact.form.heading') }}
        </h2>
        <form @submit.prevent="sendEmail" class="space-y-8">
          <div>
            <label for="name">{{ t('contact.form.name') }}</label>
            <input
              type="text"
              id="name"
              name="name"
              class="border-default/25 focus:bg-secondary focus:ring-default mt-2 block w-full rounded-lg border-2 p-2 focus:ring-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label for="email">{{ t('contact.form.email') }}</label>
            <input
              type="email"
              id="email"
              name="email"
              class="border-default/25 focus:ring-default focus:bg-secondary mt-2 block w-full rounded-lg border-2 p-2 focus:ring-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label for="message">{{ t('contact.form.message') }}</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="border-default/25 focus:ring-default focus:bg-secondary mt-2 block w-full rounded-lg border-2 p-2 focus:ring-2 focus:outline-none"
              required
            ></textarea>
          </div>
          <BaseButton type="submit" class="w-full">
            {{ t('contact.form.submit') }}
          </BaseButton>
        </form>
      </BaseCard>
    </div>
  </BaseSection>
</template>
