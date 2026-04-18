import { onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

export function useAnimateProjectCards() {
  let currentTween = null;

  function animateCards() {
    const cards = document.querySelectorAll('[data-project-card]');
    const empty = document.querySelector('[data-project-empty]');

    currentTween?.kill();
    currentTween = null;

    if (cards.length) {
      gsap.killTweensOf(cards);
      gsap.set(cards, { opacity: 0, x: 100 });

      currentTween = gsap.to(cards, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => {
          currentTween = null;
        },
      });
    }

    if (empty) {
      gsap.killTweensOf(empty);
      gsap.set(empty, { opacity: 0, y: 50 });
      gsap.to(empty, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
    }
  }

  onBeforeUnmount(() => {
    currentTween?.kill();
    currentTween = null;
  });

  return {
    animateCards,
  };
}
