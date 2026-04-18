<script setup>
  import BaseIcon from '@/components/ui/BaseIcon.vue';

  defineProps({
    heading: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    justify: {
      type: String,
      default: 'start',
      validator: (value) => ['start', 'end'].includes(value),
    },
  });
</script>

<template>
  <div
    class="flex items-center gap-x-6"
    :class="justify === 'end' ? 'justify-end' : 'justify-start'"
  >
    <BaseIcon v-if="justify === 'start'" :name="icon" :size="60" />
    <h1
      class="font-heading tracking-wider; py-12 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
    >
      {{ heading }}
    </h1>
    <BaseIcon v-if="justify === 'end'" :name="icon" :size="60" />
  </div>
</template>
