import React, { ReactNode } from "react";
import { chain } from "react-aria";
import { DialogProps, Heading } from "react-aria-components";
import { Button } from "../Button/Button";
import { Dialog } from "./Dialog";

interface AlertDialogProps extends Omit<DialogProps, "children"> {
  title: string;
  children: ReactNode;
  variant?: "info" | "destructive";
  actionLabel: string;
  cancelLabel?: string;
  onAction?: () => void;
}

export function AlertDialog({
  title,
  variant,
  cancelLabel,
  actionLabel,
  onAction,
  children,
  ...props
}: AlertDialogProps) {
  return (
    <Dialog role="alertdialog" {...props}>
      {({ close }) => (
        <>
          <Heading
            slot="title"
            className="text-xl font-semibold leading-6 my-0 text-contentPrimary"
          >
            {title}
          </Heading>

          <p className="mt-3 text-contentSecondary">{children}</p>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outlined" color="secondary" onPress={close}>
              {cancelLabel || "Cancel"}
            </Button>
            <Button
              variant="contained"
              color={variant === "destructive" ? "danger" : "secondary"}
              autoFocus
              onPress={chain(onAction, close)}
            >
              {actionLabel}
            </Button>
          </div>
        </>
      )}
    </Dialog>
  );
}
