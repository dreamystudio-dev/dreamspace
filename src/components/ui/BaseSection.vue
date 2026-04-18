<script setup>
  const props = defineProps({ tag: { type: String, default: 'section' } });
</script>

<template>
  <component
    :is="props.tag"
    v-bind="$attrs"
    :class="[
      'flex flex-col justify-center px-12 sm:px-24 md:px-36 lg:px-48 xl:px-60 2xl:px-72',
      $attrs.class,
    ]"
  >
    <slot />
  </component>
</template>
