import { ref, onMounted, onBeforeUnmount } from 'vue';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function useMatchViewportSize(target) {
  const matches = ref(false);

  const update = () => {
    const width = window.innerWidth;
    const threshold = breakpoints[target];
    matches.value = typeof threshold === 'number' ? width >= threshold : false;
  };

  onMounted(() => {
    update();
    window.addEventListener('resize', update);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', update);
  });

  return matches;
}
