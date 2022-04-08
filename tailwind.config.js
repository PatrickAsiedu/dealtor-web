module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      colors: {
        primary: "#005048",
        logotext: "#000E0D",
        grey: "#F5F5F5",
        deepblue: "#000F44",
        tfill: "#00231F",
      },
      height: {
        "706px": "706px",
        "103px": "103px",
        "45px": "45px",
      },
      spacing: {
        "14px": "14px",
        "30px": "30px",
        "34px": "34px",
      },
      borderRadius: {
        "5px": "5px",
      },
      fontSize: {
        hero: "65px",
        list: "22px",
        tiny: "6px",
      },
      width: {
        forty: "40%",
        60: "60%",
        ninety: "90%",
        "170px": "170px",
        "888px": "888px",
        "650px": "650px",
      },

      inset: {
        ten: "10%",
        twenty: "20%",
        five: "5%",
        2.5: "2.5%",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
