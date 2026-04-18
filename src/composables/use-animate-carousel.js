import gsap from 'gsap';

export default function useAnimateCarousel() {
  const tweens = new Map();

  const startCarousel = (wrapperEl, itemsCount, id) => {
    if (!wrapperEl) return;

    let isAnimating = false;

    const animate = () => {
      if (isAnimating) return;

      const items = wrapperEl.querySelectorAll('.carousel-card');
      if (items.length === 0) return;

      const firstItem = items[0];
      const gapWidth = 16;
      const singleItemWidth = firstItem.offsetWidth + gapWidth;
      const oneSetWidth = singleItemWidth * itemsCount;

      isAnimating = true;

      const tween = gsap.to(wrapperEl, {
        x: -oneSetWidth,
        duration: 20,
        ease: 'none',
        onComplete: () => {
          gsap.set(wrapperEl, { x: 0 });
          for (let i = 0; i < itemsCount; i++) {
            const firstSetItem = wrapperEl.querySelector('.carousel-card');
            if (firstSetItem) {
              wrapperEl.appendChild(firstSetItem);
            }
          }

          isAnimating = false;
          animate();
        },
      });
      tweens.set(id, tween);
    };
    animate();
  };

  const pauseCarousel = (id) => {
    const tween = tweens.get(id);
    if (tween) tween.pause();
  };

  const resumeCarousel = (id) => {
    const tween = tweens.get(id);
    if (tween) tween.resume();
  };

  const togglePause = (id) => {
    const tween = tweens.get(id);
    if (tween) {
      if (tween.paused()) {
        tween.resume();
      } else {
        tween.pause();
      }
    }
  };

  const initCarousel = (technologies) => {
    technologies.forEach((tech) => {
      const wrapper = document.querySelector(`[data-carousel-id="${tech.id}"]`);
      if (wrapper) {
        startCarousel(wrapper, tech.items.length, tech.id);
      }
    });
  };

  return {
    pauseCarousel,
    resumeCarousel,
    togglePause,
    initCarousel,
  };
}
