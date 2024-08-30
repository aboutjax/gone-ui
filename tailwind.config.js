/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./.storybook/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        layer01: "rgb(var(--color-layer-01) / <alpha-value>)",
        layer02: "rgb(var(--color-layer-02) / <alpha-value>)",
        layer03: "rgb(var(--color-layer-03) / <alpha-value>)",
        contentPrimary: "rgb(var(--color-content-primary) / <alpha-value>)",
        contentSecondary: "rgb(var(--color-content-secondary) / <alpha-value>)",
        contentDisabled: "rgb(var(--color-content-disabled) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        primaryContrast: "rgb(var(--color-primary-contrast) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        secondaryContrast:
          "rgb(var(--color-secondary-contrast) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        dangerContrast: "rgb(var(--color-danger-contrast) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        successContrast: "rgb(var(--color-success-contrast) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        warningContrast: "rgb(var(--color-warning-contrast) / <alpha-value>)",
        divider: "rgb(var(--color-divider) / <alpha-value>)",
        dividerSubtle: "rgb(var(--color-divider-subtle) / <alpha-value>)",
        dividerDarkOnly: "rgb(var(--color-divider-dark-only) / <alpha-value>)",
        strava: "rgb(var(--color-strava) / <alpha-value>)",
        stravaContrast: "rgb(var(--color-strava-contrast) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-react-aria-components"),
  ],
};
