/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const baserel = {
  80: "20rem",
  88: "22rem",
  96: "24rem",
  104: "26rem",
  112: "28rem",
  116: "29rem",
  120: "30rem",
  124: "31rem",
  128: "32rem",
  132: "33rem",
  136: "34rem",
  144: "36rem",
  152: "38rem",
  160: "40rem",
  168: "42rem",
  176: "44rem",
  180: "45rem",
  184: "46rem",
  192: "48rem",
  200: "50rem",
  208: "52rem",
  216: "54rem",
  224: "56rem",
  232: "58rem",
  240: "60rem",
  360: "90rem",
};

const dt = require("tailwindcss/defaultTheme");
const Color = require("color");
// const hsl = require("hsl-to-hex");

const alpha = (clr, val) => Color(clr).alpha(val).hsl().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const shakacolors = {
  primary: {
    relief: "#3d4451",
  },
  secondary: {
    relief: "#FEFDFE",
  },
  accent: {
    relief: `#FFF2C8`,
  },
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./public/**/*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', ...dt.fontFamily.sans],
        serif: [...dt.fontFamily.serif],
        mono: [...dt.fontFamily.mono],
        segoe: ["Segoe UI"],
        apercu: ["Apercu Mono Pro"],
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2280px",
      },
      height: {
        ...baserel,
      },
      minHeight: {
        ...baserel,
      },
      width: {
        ...baserel,
      },
      minWidth: {
        ...baserel,
      },
      padding: {
        ...baserel,
      },
      margin: {
        ...baserel,
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      ringWidth: {
        6: "6px",
      },
      colors: {
        shaka: {
          primary_relief: {
            DEFAULT: shakacolors.primary.relief,
            lighter: lighten(shakacolors.primary.relief, 0.1),
            darker: darken(shakacolors.primary.relief, 0.1),
            75: alpha(shakacolors.primary.relief, 0.75),
          },
          secondary_relief: {
            DEFAULT: shakacolors.secondary.relief,
            lighter: lighten(shakacolors.secondary.relief, 0.1),
            darker: darken(shakacolors.secondary.relief, 0.1),
            75: alpha(shakacolors.secondary.relief, 0.75),
          },
          accent_relief: {
            DEFAULT: shakacolors.accent.relief,
            lighter: lighten(shakacolors.accent.relief, 0.1),
            darker: darken(shakacolors.accent.relief, 0.1),
            75: alpha(shakacolors.accent.relief, 0.75),
          },
        },
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
      animation: ["hover", "group-hover"],
      skew: ["hover", "group-hover"],
    },
  },
  corePlugins: {
    aspectRatio: false,
    fontFamily: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        basis: {
          primary: "#F04623",
          "primary-focus": "#C50A0A",
          "primary-content": "#9C0000",

          secondary: "#D5C0DE",
          "secondary-focus": "#714B79",
          "secondary-content": "#5A3263",

          accent: "#FACF14", // "#FAD714",
          "accent-focus": "#C9A401", // "#C9AB01",
          "accent-content": "#9F8100", // "#9F8700",

          neutral: "#3d4451",
          "base-100": "#fefefe",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      "light",
      "dark",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
