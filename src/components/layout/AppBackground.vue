<script setup>
  import { onMounted, ref, onUnmounted } from 'vue';
  import { useAnimateBackground } from '@/composables/use-animate-background.js';

  const canvasRef = ref(null);
  const { drawCanvas, stopCanvas } = useAnimateBackground(canvasRef);

  onMounted(() => {
    drawCanvas();
  });

  onUnmounted(() => {
    stopCanvas();
  });
</script>

<template>
  <canvas ref="canvasRef" class="bg-tertiary fixed inset-0 -z-10" />
</template>
