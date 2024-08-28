import React from "react";
import { Button as AriaButton, ButtonProps } from "react-aria-components";
import { tv } from "tailwind-variants";

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

function Button(props: ButtonVariantsProps) {
  const button = tv({
    base: `shrink-0 font-medium relative inline-flex gap-1.5 items-center justify-center overflow-hidden text-contentPrimary bg-secondary text-base py-1 px-4 data-[pressed=true]:opacity-80 ring-primary ring-offset-2 ring-offset-layer01 data-[focused=true]:outline-none data-[focus-visible=true]:ring-2 transition-opacity transition-200 hover:opacity-70 active:80 ${props.className}`,
    variants: {
      shape: {
        rounded: "rounded-md",
        pill: "rounded-full",
      },
      color: {
        primary: "bg-primary text-primaryContrast",
        secondary: "bg-secondary text-secondaryContrast",
        success: "bg-success text-successContrast",
        warning: "bg-warning text-warningContrast",
        danger: "bg-danger text-dangerContrast",
        strava: "bg-strava text-white",
      },
      size: {
        sm: "text-sm px-3 leading-none h-[1.5rem]",
        md: "text-base py-2 px-3 leading-none h-[2rem]",
        lg: "text-lg py-3 px-5 leading-5 h-[2.875rem]",
        xl: "text-2xl py-4 px-6 leading-6 h-[3.5rem]",
      },
      variant: {
        outlined: "bg-transparent border border-divider",
        text: "bg-transparent border border-transparent",
        contained: "border-transparent border",
      },
      disabled: {
        true: "opacity-10 cursor-not-allowed",
      },
      iconOnly: {
        true: "aspect-square inline-flex items-center justify-center",
      },
    },
    compoundVariants: [
      { color: "primary", variant: "text", className: "text-primary" },
      { color: "secondary", variant: "text", className: "text-contentPrimary" },
      { color: "success", variant: "text", className: "text-success" },
      { color: "warning", variant: "text", className: "text-warning" },
      { color: "danger", variant: "text", className: "text-danger" },
      { color: "primary", variant: "outlined", className: "text-primary" },
      {
        color: "secondary",
        variant: "outlined",
        className: "text-contentPrimary",
      },
      { color: "success", variant: "outlined", className: "text-success" },
      { color: "warning", variant: "outlined", className: "text-warning" },
      { color: "danger", variant: "outlined", className: "text-danger" },
      { size: "sm", iconOnly: true, className: "h-[1.5rem] p-0" },
      { size: "md", iconOnly: true, className: "h-[2rem] p-0" },
      { size: "lg", iconOnly: true, className: "h-[2.875rem] p-0" },
    ],
    defaultVariants: {
      color: "secondary",
      size: "md",
      variant: "contained",
      shape: "rounded",
    },
  });
  return (
    <AriaButton
      {...props}
      className={button({
        shape: props.shape,
        color: props.color,
        size: props.size,
        variant: props.variant,
        disabled: props.disabled,
        iconOnly: props.iconOnly,
      })}
    >
      {props.startIcon && (
        <div className="-ml-1">{props.startIcon as React.ReactElement}</div>
      )}
      {props.children}
      {props.endIcon && (
        <div className="-mr-1">{props.endIcon as React.ReactElement}</div>
      )}
    </AriaButton>
  );
}

export { Button };
