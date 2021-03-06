module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        react_blue: '#63dbfb',
        discord_gray: '#3a3c41',
        discord_primary: '#262729',
        discord_secondary: '#333439',
        stryker_yellow: '#edb328'
      }
    },
  },
  plugins: [],
}
