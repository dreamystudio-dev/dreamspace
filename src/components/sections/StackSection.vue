<script setup>
  import { onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useAnimateCarousel from '@/composables/use-animate-carousel.js';
  import { technologies } from '@/constants/technologies.js';
  import BaseHeader from '@/components/ui/BaseHeader.vue';
  import BaseSection from '@/components/ui/BaseSection.vue';
  import BaseCard from '@/components/ui/BaseCard.vue';

  const { t } = useI18n();

  const { pauseCarousel, resumeCarousel, togglePause, initCarousel } = useAnimateCarousel();

  onMounted(() => {
    initCarousel(technologies);
  });
</script>

<template>
  <BaseSection>
    <div class="border-b-default/50 w-full border-b-2 pb-24">
      <div class="flex items-center justify-end gap-x-6">
        <BaseHeader :heading="t('technologies.heading')" :icon="'Layers'" :justify="'end'" />
      </div>
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <BaseCard
          class="flex w-full flex-col gap-y-4 p-4"
          v-for="tech in technologies"
          :key="tech.id"
        >
          <p class="font-heading text-center text-lg">
            {{ t(`technologies.categories.${tech.id}`) }}
          </p>
          <div class="overflow-hidden">
            <div
              :data-carousel-id="tech.id"
              class="flex gap-x-4"
              @mouseenter="pauseCarousel(tech.id)"
              @mouseleave="resumeCarousel(tech.id)"
              @click="togglePause(tech.id)"
            >
              <div
                v-for="item in tech.items"
                :key="`1-${item.title}`"
                class="carousel-card shrink-0"
              >
                <a
                  :href="item.link"
                  class="hover:bg-default hover:text-primary flex size-32 flex-col items-center justify-center gap-y-2 rounded-lg transition-colors duration-200 md:size-24 xl:size-32"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i :class="['text-5xl', item.icon]" />
                  <p>{{ item.title }}</p>
                </a>
              </div>
              <div
                v-for="item in tech.items"
                :key="`2-${item.title}`"
                class="carousel-card shrink-0"
              >
                <a
                  :href="item.link"
                  class="hover:bg-default hover:text-primary flex size-32 flex-col items-center justify-center gap-y-2 rounded-lg transition-colors duration-200 md:size-24 xl:size-32"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i :class="['text-5xl', item.icon]" />
                  <p>{{ item.title }}</p>
                </a>
              </div>
              <div
                v-for="item in tech.items"
                :key="`3-${item.title}`"
                class="carousel-card shrink-0"
              >
                <a
                  :href="item.link"
                  class="hover:bg-default hover:text-primary flex size-32 flex-col items-center justify-center gap-y-2 rounded-lg transition-colors duration-200 md:size-24 xl:size-32"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i :class="['text-5xl', item.icon]" />
                  <p>{{ item.title }}</p>
                </a>
              </div>
              <div
                v-for="item in tech.items"
                :key="`4-${item.title}`"
                class="carousel-card shrink-0"
              >
                <a
                  :href="item.link"
                  class="hover:bg-default hover:text-primary flex size-32 flex-col items-center justify-center gap-y-2 rounded-lg transition-colors duration-200 md:size-24 xl:size-32"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i :class="['text-5xl', item.icon]" />
                  <p>{{ item.title }}</p>
                </a>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </BaseSection>
</template>
