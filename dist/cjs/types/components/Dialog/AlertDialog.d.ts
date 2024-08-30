import React, { ReactNode } from "react";
import { DialogProps } from "react-aria-components";
interface AlertDialogProps extends Omit<DialogProps, "children"> {
    title: string;
    children: ReactNode;
    variant?: "info" | "destructive";
    actionLabel: string;
    cancelLabel?: string;
    onAction?: () => void;
}
export declare function AlertDialog({ title, variant, cancelLabel, actionLabel, onAction, children, ...props }: AlertDialogProps): React.JSX.Element;
export {};
