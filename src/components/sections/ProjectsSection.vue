<script setup>
  import { useI18n } from 'vue-i18n';
  import { useSearchProject } from '@/composables/use-search-project.js';
  import { projects } from '@/constants/projects.js';
  import BaseIcon from '@/components/ui/BaseIcon.vue';
  import BaseHeader from '@/components/ui/BaseHeader.vue';
  import BaseSection from '@/components/ui/BaseSection.vue';
  import BaseCard from '@/components/ui/BaseCard.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';

  const { t } = useI18n();

  const { query, filteredProjects, hasResults } = useSearchProject(projects);
</script>

<template>
  <BaseSection>
    <div class="border-b-default/50 w-full border-b-2 pb-24">
      <BaseHeader :heading="t('projects.heading')" :icon="'FolderCode'" :justify="'start'" />
      <div class="flex h-12 w-full items-center justify-between gap-x-8">
        <div class="relative w-full">
          <BaseIcon name="Search" class="absolute inset-0 top-1/2 left-4 w-fit -translate-y-1/2" />
          <input
            v-model="query"
            :placeholder="t('projects.search_placeholder')"
            class="bg-primary border-default/25 ring-default focus:bg-secondary h-12 w-full rounded-md border-2 pr-4 pl-12 focus:ring-2 focus:outline-none"
            type="text"
          />
        </div>
      </div>
      <template v-if="hasResults">
        <div class="mt-12 grid grid-cols-1 gap-y-12">
          <div
            data-project-card
            v-for="(project, idx) in filteredProjects"
            :key="`project-${idx}`"
            class=""
          >
            <BaseCard class="flex flex-col lg:flex-row">
              <div
                class="border-default/25 flex h-64 w-full items-center justify-center overflow-hidden rounded-t-lg border-b-2 lg:h-auto lg:rounded-l-lg lg:rounded-r-none lg:border-r-2 lg:border-b-0 xl:w-1/2 2xl:w-1/4"
              >
                <img :src="project.logo" :alt="project.alt" class="h-full w-full object-cover" />
              </div>
              <div class="flex flex-col justify-between gap-y-8 p-8 lg:w-full">
                <div class="flex flex-col gap-y-4">
                  <p class="font-heading flex justify-between text-3xl">
                    {{ project.title }}
                    <span class="bg-tertiary flex items-center px-4 text-base font-normal">
                      {{ project.engine }}
                    </span>
                  </p>
                  <p>
                    {{ t(project.description) }}
                  </p>
                </div>
                <div class="flex flex-col gap-y-8 lg:flex-row lg:gap-x-4">
                  <BaseButton :href="project.github" target="_blank" class="w-full">
                    {{ t('projects.source') }}
                    <template #icon>
                      <BaseIcon name="Code" />
                    </template>
                  </BaseButton>
                  <BaseButton :href="project.download" target="_blank" class="w-full">
                    {{ t('projects.download') }}
                    <template #icon>
                      <BaseIcon name="Download" />
                    </template>
                  </BaseButton>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          data-project-empty
          class="bg-primary text-subtext mt-16 flex h-64 w-full items-center justify-center rounded-md"
        >
          {{ t('projects.no_results') }}
        </div>
      </template>
    </div>
  </BaseSection>
</template>
