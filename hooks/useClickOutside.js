/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

function useEventListener(eventType, callback, element = window) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element === null) return;
    const handler = e => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

export function useClickOutside(ref, callback) {
  useEventListener(
    'click',
    e => {
      if (ref.current === null || ref.current.contains(e.target)) return;
      callback(e);
    },
    document
  );
}
