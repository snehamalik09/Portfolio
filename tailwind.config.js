/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-violet': '#85586F',
        'my-violet' : '#D0B8A8',
        'soft-violet':'#DFD3C3',
        'nude-violet': '#DFD3C3',
        
      },
    },
  },
  plugins: [],
}
