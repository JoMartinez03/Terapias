"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function MetaPixelRouteTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitial = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    try {
      if (typeof window.fbq === "function") {
        window.fbq("track", "PageView");
      }
    } catch {
      // Silently ignore errors to avoid breaking the page
    }
  }, [pathname, searchParams]);

  return null;
}

export function MetaPixelRouteTracker() {
  return (
    <Suspense fallback={null}>
      <MetaPixelRouteTrackerInner />
    </Suspense>
  );
}
