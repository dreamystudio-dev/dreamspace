import { ref, onMounted, nextTick } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

export function useActiveSection(sections, options = { threshold: 0.5 }) {
  const activeSection = ref(null);

  onMounted(async () => {
    await nextTick();

    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);

    if (els.length === 0) return;

    useIntersectionObserver(
      els,
      (entries) => {
        const visibles = entries.filter((e) => e.isIntersecting);
        if (visibles.length > 0) {
          const topMost = visibles.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
          activeSection.value = topMost.target.id;
        }
      },
      options,
    );
  });

  return { activeSection };
}
