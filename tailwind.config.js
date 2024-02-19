module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px', // custom breakpoint for extra small screens
        'sm': '640px', // small screen
        'md': '768px', // medium screen
        'lg': '1024px', // large screen
        'xl': '1280px', // extra large screen
        '2xl': '1536px', // 2x large screen
      },
      // ... other customizations
    },
  },
  plugins: [],
};