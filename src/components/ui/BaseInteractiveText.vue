<script setup>
  const props = defineProps({ tag: { type: String, default: 'button' } });
</script>

<template>
  <component
    :is="props.tag"
    v-bind="$attrs"
    :class="[
      'text-subtext cursor-pointer transition-colors duration-300 hover:font-bold hover:text-inherit',
      $attrs.class,
    ]"
  >
    <slot />
  </component>
</template>
