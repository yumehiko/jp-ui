import * as React from 'react';

const popupHeights = new Map<HTMLElement, number>();

const updateMaxHeight = () => {
  let maxHeight = 0;
  popupHeights.forEach((height) => {
    if (height > maxHeight) {
      maxHeight = height;
    }
  });
  popupHeights.forEach((_height, element) => {
    element.style.setProperty('--dialog-max-height', `${maxHeight}px`);
  });
};

const setPopupHeight = (element: HTMLElement, height: number) => {
  popupHeights.set(element, height);
  element.style.setProperty('--dialog-own-height', `${height}px`);
  updateMaxHeight();
};

export function useDialogPopupMeasurements(ref: React.RefObject<HTMLElement>) {
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const element = ref.current;
    if (!element) {
      return;
    }

    const updateFromElement = () => {
      const height = element.getBoundingClientRect().height;
      if (Number.isFinite(height)) {
        setPopupHeight(element, height);
      }
    };

    updateFromElement();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target !== element) return;
          const nextHeight =
            entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
          if (Number.isFinite(nextHeight)) {
            setPopupHeight(element, nextHeight);
          }
        });
      });
      resizeObserver.observe(element);
    }

    return () => {
      resizeObserver?.disconnect();
      popupHeights.delete(element);
      updateMaxHeight();
    };
  }, [ref]);
}
