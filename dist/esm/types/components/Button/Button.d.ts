import React from "react";
import { ButtonProps } from "react-aria-components";
export interface ButtonVariantsProps extends ButtonProps {
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
export { Button };
