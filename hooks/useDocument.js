import { useEffect, useState } from 'react';

export function useDocument() {
  const [htmlNode, setHtmlNode] = useState(null);

  useEffect(() => {
    setHtmlNode(document.querySelector('html'));
  }, []);

  return { htmlNode };
}
