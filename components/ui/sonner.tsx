"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "!bg-surface !border !border-line !text-bone !rounded-none !font-sans",
          title: "!text-bone !font-semibold",
          description: "!text-muted",
          actionButton: "!bg-flame !text-ink",
          icon: "!text-flame",
        },
      }}
    />
  );
}
