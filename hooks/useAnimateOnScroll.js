import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export function useAnimateOnScroll(threshold = 0, duration = 0) {
  const [element, view] = useInView({
    threshold,
    triggerOnce: true,
  });
  const controls = useAnimation();

  const initialAnimValues = {
    opacity: 0,
    y: 60,
  };

  if (view) {
    controls.start(i => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration,
        delay: i * 0.2,
      },
    }));
  }

  // return
  return [element, controls, initialAnimValues];
}
