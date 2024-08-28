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
        divider: "rgb(var(--color-divider) / <alpha-value>)",
        dividerSubtle: "rgb(var(--color-divider-subtle) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
