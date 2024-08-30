import React from "react";
import {
  ModalOverlay,
  ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const overlayStyles = tv({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg duration-[2s]",
  variants: {
    isEntering: {
      true: "animate-in fade-in ease-out",
    },
    isExiting: {
      true: "animate-out fade-out ease-in",
    },
  },
});

const modalStyles = tv({
  base: "w-full max-w-md max-h-full rounded-2xl bg-layer01 text-left text-contentPrimary align-middle text-slate-700 shadow-2xl bg-clip-padding border border-dividerDarkOnly duration-[2s]",
  variants: {
    isEntering: {
      true: "animate-in zoom-in-105 ease-out",
    },
    isExiting: {
      true: "animate-out zoom-out-95 ease-in",
    },
  },
});

export function Modal(props: ModalOverlayProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <RACModal {...props} className={modalStyles} />
    </ModalOverlay>
  );
}
