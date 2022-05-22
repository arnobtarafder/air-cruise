module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "light": {
          primary: "#205493",
          primaryDarker: "#0b3d91",
          visited: "#4c2c92",
          secondary: "#111430",
          accent: "#ff3d00",
          secondaryDark: "#c62d1f",
          secondaryLight: "#e59892",
          neutral: "#3d4451",
          cool: "#dce4ef",
          success: "#4caf50",
          warning: "#ffc107",
          gold: "#ff9d1e",
          error: "#009444",
          green: "#2e8540",
          "base-100": "#ffffff",
          "base-200": "#E9F6FF",
          "base-300": "#FBFFFC",
        },
      },
      "night",
    ],
  },
  plugins: [require("daisyui")],
};