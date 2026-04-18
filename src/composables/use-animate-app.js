import { gsap } from 'gsap';
import { nextTick } from 'vue';

export function useAnimateApp() {
  const animateApp = async () => {
    await nextTick();

    const tl = gsap.timeline({ defaults: { ease: 'power1', opacity: 0 } });

    tl.from('header', { y: -80, duration: 1 });

    tl.from(
      'header img, header nav li, header nav button',
      { y: -20, stagger: 0.1, duration: 0.5 },
      '-=0.0',
    );

    tl.from('#smooth-content > *', { y: 50, stagger: 0.2, duration: 1 }, '-=0.5');
  };

  return { animateApp };
}
