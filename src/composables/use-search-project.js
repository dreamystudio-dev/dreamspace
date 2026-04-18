import { ref, computed, watch, nextTick } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useAnimateProjectCards } from '@/composables/use-animate-project-cards.js';

export function useSearchProject(items = [], key = 'title') {
  const { animateCards } = useAnimateProjectCards();
  const query = ref('');
  const queryTime = ref('');

  const updateQueryTime = useDebounceFn((val) => {
    queryTime.value = val;
  }, 500);

  watch(query, (val) => {
    updateQueryTime(val);
  });

  const sourceArray = computed(() =>
    Array.isArray(items) ? items : items && typeof items === 'object' ? Object.values(items) : [],
  );

  const filteredProjects = computed(() => {
    const q = queryTime.value.trim().toLowerCase();
    if (!q) return sourceArray.value;
    return sourceArray.value.filter((item) => {
      const val = (item?.[key] || '').toString().toLowerCase();
      return val.includes(q);
    });
  });

  const hasResults = computed(() => filteredProjects.value.length > 0);

  watch(queryTime, async () => {
    await nextTick();
    animateCards();
  });

  return {
    query,
    filteredProjects,
    hasResults,
  };
}
