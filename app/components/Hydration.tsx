"use client";

import { ReactNode, useEffect, useState } from "react";

export default function Hydration({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydrated ? (
        // Here was the error what I Did was I have typed a JS element without any div or react fragments that has given me the error of array error.
        <>{children}</>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <p className="text-secondary text-xl italic font-bold">
            “What separates design from art is that design is meant to be…
            functional.”
          </p>
        </div>
      )}
    </>
  );
}
