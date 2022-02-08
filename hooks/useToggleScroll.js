import { useEffect, useState } from 'react';
import { removeScroll, activateScroll } from '@/utils/utilities';

export function useToggleScroll() {
  const [scrollbarAction, setScrollbarAction] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !scrollbarAction) return;

    const htmlNode = document.querySelector('html');

    // Toggle scrollbar
    if (scrollbarAction === 'add') {
      activateScroll(htmlNode);
    }

    if (scrollbarAction === 'remove') {
      removeScroll(htmlNode);
    }

    // clean state
    setScrollbarAction('');
  }, [scrollbarAction]);

  return [setScrollbarAction];
}
