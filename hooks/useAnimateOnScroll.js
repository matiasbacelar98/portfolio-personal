import { useInView } from 'react-intersection-observer';

export function useAnimateOnScroll(runAnimation, threshold = 0, once = false) {
  const [element, view] = useInView({
    threshold,
    triggerOnce: once,
  });

  if (view) {
    runAnimation();
  }

  // return
  return { element };
}
