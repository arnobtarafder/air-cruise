module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "light": {
          primary: "#1976d2",
          secondary: "#111430",
          accent: "#ff3d00",
          neutral: "#3d4451",
          success: "#4caf50",
          warning: "#ffc107",
          error: "#009444",
          "base-100": "#ffffff",
          "base-200": "#FFF0F5",
          "base-300": "#f5f6fa",
        },
      },
      "night",
    ],
  },
  plugins: [require("daisyui")],
};