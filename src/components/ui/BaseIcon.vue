<script setup>
  import { computed, onMounted, ref } from 'vue';
  import { gsap } from 'gsap';
  import {
    ChevronDown,
    ChevronUp,
    Code,
    Download,
    FolderCode,
    Heart,
    Languages,
    Layers,
    LucideStar,
    LucideX,
    Mail,
    MenuIcon,
    Search,
    UserRound,
  } from '@lucide/vue';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 20,
    },
    strokeWidth: {
      type: Number,
      default: 3,
    },
  });

  const iconMap = {
    MenuIcon,
    LucideX,
    LucideStar,
    Languages,
    ChevronDown,
    ChevronUp,
    Heart,
    UserRound,
    Layers,
    FolderCode,
    Search,
    Code,
    Download,
    Mail,
  };

  const icon = computed(() => iconMap[props.name]);

  const iconRef = ref(null);

  onMounted(() => {
    if (iconRef.value) {
      gsap.from(iconRef.value, {
        opacity: 0.5,
        duration: 1,
        ease: 'power4',
      });
    }
  });
</script>

<template>
  <span ref="iconRef" class="inline-block">
    <component :is="icon" :size="size" />
  </span>
</template>
