<script setup>
  const props = defineProps({ tag: { type: String, default: 'div' } });
</script>

<template>
  <component
    :is="props.tag"
    v-bind="$attrs"
    :class="[
      'bg-primary border-default/25 hover:border-default w-full rounded-lg border-2 tracking-wider transition-colors duration-500',
      $attrs.class,
    ]"
  >
    <slot />
  </component>
</template>
