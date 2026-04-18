<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    href: { type: String, default: null },
    download: { type: [String, Boolean], default: null },
    target: { type: String, default: null },
    type: { type: String, default: 'button' },
    customClass: { type: String, default: '' },
  });

  const tag = computed(() => (props.href ? 'a' : 'button'));
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :type="tag === 'button' ? type : null"
    :download="download"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : null"
    class="bg-default text-primary hover:bg-secondary flex cursor-pointer items-center justify-center gap-x-2 rounded-lg border-2 px-8 py-4 font-bold transition-colors duration-200 hover:text-inherit"
  >
    <slot />

    <slot name="icon" />
  </component>
</template>
