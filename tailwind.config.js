/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "signup-image": "url('./assets/signup-hero.svg')",
        "signin-image": "url('./assets/Standing.png')",
        "church-image": "url('./assets/Church.png')",
        "party-image": "url('./assets/Party.png')",
        "mosque-image": "url('./assets/Mosque.png')",
        "concert-image": "url('./assets/Concert.png')",
        "seminar-image": "url('./assets/Seminar.png')",
      }),

      colors: {
        primary: "#381648",
        secondary: "#DC3239",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        custom: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      },
      spacing: {
        "word-tight": "-0.1em",
        "word-normal": "normal",
        "word-wide": "0.5em",
        "word-wider": "0.em",
        "word-widest": "0.3em",
      },
    },
  },
};

