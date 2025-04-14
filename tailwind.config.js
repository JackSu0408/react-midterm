module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          MyColor:{
            'blueGray': '#DDE3EA',
          },
        },
        fontFamily: {'playfair':['Playfair Display', 'serif']},
      }
    },
    plugins: [],
  };
  