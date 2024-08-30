import React, { ReactNode } from 'react';
import { ButtonProps, DialogProps, ModalOverlayProps } from 'react-aria-components';
export * from 'react-aria-components';

interface ButtonVariantsProps extends ButtonProps {
    iconOnly?: boolean;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "strava";
    className?: string;
    children?: React.ReactNode;
    variant?: "text" | "outlined" | "contained";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    disabled?: boolean;
    shape?: "rounded" | "pill";
}
declare function Button(props: ButtonVariantsProps): React.JSX.Element;

interface AlertDialogProps extends Omit<DialogProps, "children"> {
    title: string;
    children: ReactNode;
    variant?: "info" | "destructive";
    actionLabel: string;
    cancelLabel?: string;
    onAction?: () => void;
}
declare function AlertDialog({ title, variant, cancelLabel, actionLabel, onAction, children, ...props }: AlertDialogProps): React.JSX.Element;

declare function Dialog(props: DialogProps): React.JSX.Element;

declare function Modal(props: ModalOverlayProps): React.JSX.Element;

export { AlertDialog, Button, Dialog, Modal };
