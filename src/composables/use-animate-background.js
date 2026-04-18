import { useWindowSize, useMouseInElement } from '@vueuse/core';
import gsap from 'gsap';

class Star {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = 0.25 + Math.random() * 0.25;
    this.vx = (Math.random() - 0.5) * 0.25;
    this.vy = (Math.random() - 0.5) * 0.25;
    this.alpha = 0;
    this.isVisible = false;
  }

  update(width, height, cursorX, cursorY) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    if (!this.isVisible) {
      this.alpha += 0.01;
      if (this.alpha >= 1) {
        this.alpha = 1;
        this.isVisible = true;
      }
    }

    const dx = cursorX - this.x;
    const dy = cursorY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const influenceRadius = 250;
    const influenceStrength = 0.25;

    if (dist < influenceRadius) {
      const factor = (1 - dist / influenceRadius) * influenceStrength;

      this.offsetX = dx * factor;
      this.offsetY = dy * factor;
    } else {
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x + (this.offsetX || 0), this.y + (this.offsetY || 0), this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  }
}

export function useAnimateBackground(canvasRef) {
  const maxElements = 500;
  const { width, height } = useWindowSize();
  const { elementX, elementY } = useMouseInElement(canvasRef);

  let stars = [];
  let ctx;
  let animationFrameId;

  const createStars = (w, h) => Array.from({ length: maxElements }, () => new Star(w, h));

  const drawCanvas = () => {
    const canvas = canvasRef.value;
    ctx = canvas.getContext('2d');
    canvas.width = width.value;
    canvas.height = height.value;

    stars = createStars(canvas.width, canvas.height);

    const resizeCanvas = () => {
      const newStars = createStars(width.value, height.value);

      newStars.forEach((newStar, i) => {
        const oldStar = stars[i];
        if (oldStar) {
          gsap.fromTo(
            newStar,
            { x: oldStar.x, y: oldStar.y, alpha: oldStar.alpha },
            { x: newStar.x, y: newStar.y, alpha: 1, duration: 5, ease: 'power4' },
          );
        } else {
          newStar.alpha = 0;
          gsap.to(newStar, { alpha: 1, duration: 1 });
        }
      });

      stars = newStars;
      canvas.width = width.value;
      canvas.height = height.value;
    };

    window.addEventListener('resize', resizeCanvas);

    const animateCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update(canvas.width, canvas.height, elementX.value, elementY.value);
        star.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animateCanvas);
    };

    animateCanvas();
  };

  const stopCanvas = () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', () => {});
  };

  return { drawCanvas, stopCanvas };
}
