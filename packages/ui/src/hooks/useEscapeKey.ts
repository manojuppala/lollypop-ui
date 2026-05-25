'use client';

import * as React from 'react';

export function useEscapeKey(handler: () => void, active: boolean = true) {
  React.useEffect(() => {
    if (!active) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handler, active]);
}
