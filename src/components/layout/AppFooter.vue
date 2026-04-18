<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <footer
    class="bg-primary text-subtext border-t-default border-t-2 px-12 sm:px-24 md:px-36 lg:px-48 xl:px-60 2xl:px-72"
  >
    <div
      class="flex flex-col items-center justify-center gap-y-4 py-8 lg:flex-row lg:justify-between"
    >
      <div class="flex flex-col gap-y-2 text-center lg:items-start lg:text-left">
        <img
          src="@/assets/images/branding/dreamspace-logo.webp"
          alt="dreamspace_logo"
          class="h-16 w-auto object-contain"
        />
        <p>
          {{ t('footer.copyright') }}
        </p>
      </div>
      <div class="flex flex-col gap-y-4 text-center lg:text-right">
        <p>
          {{ t('footer.icons_provided_by') }}
          <a
            class="hover:font-bold"
            href="https://lucide.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lucide
          </a>
          &
          <a
            class="hover:font-bold"
            href="https://devicon.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Devicon
          </a>
        </p>
        <p>
          {{ t('footer.developed_by') }}
          <span class="font-bold">ddreamm ❤</span>
        </p>
      </div>
    </div>
  </footer>
</template>
