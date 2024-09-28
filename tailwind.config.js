module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        //bg-colors:#52BFDB
        primary: {
          50: "#eefbf3",
          100: "#cbf4db",
          150: "#a8ecc3",
          200: "#85e4ab",
          250: "#62dd93",
          300: "#3fd57b",
          350: "#2ac066",
          400: "#229d53",
          450: "#009500",
          500: "#006a00",
          550: "#004000",
          600: "#001500",
        },

        // text

        accent: {
          50: "#eefbf3",
          100: "#cbf3da",
          150: "#a8ebc2",
          200: "#86e3aa",
          250: "#63dc91",
          300: "#41d479",
          350: "#2bbe64",
          400: "#239c52",
          450: "#1c7940",
          500: "#14572d",
        },
      },
    },
  },
  plugins: [],
};
