/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};


// tailwind.config = {
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {"50":"#fafafa","100":"#f4f4f5","200":"#e4e4e7","300":"#d4d4d8","400":"#a1a1aa","500":"#71717a","600":"#52525b","700":"#3f3f46","800":"#27272a","900":"#18181b","950":"#09090b"}
//       }
//     },
//     fontFamily: {
//       'body': [
//     'Inter', 
//     'ui-sans-serif', 
//     'system-ui', 
//     '-apple-system', 
//     'system-ui', 
//     'Segoe UI', 
//     'Roboto', 
//     'Helvetica Neue', 
//     'Arial', 
//     'Noto Sans', 
//     'sans-serif', 
//     'Apple Color Emoji', 
//     'Segoe UI Emoji', 
//     'Segoe UI Symbol', 
//     'Noto Color Emoji'
//   ],
//       'sans': [
//     'Inter', 
//     'ui-sans-serif', 
//     'system-ui', 
//     '-apple-system', 
//     'system-ui', 
//     'Segoe UI', 
//     'Roboto', 
//     'Helvetica Neue', 
//     'Arial', 
//     'Noto Sans', 
//     'sans-serif', 
//     'Apple Color Emoji', 
//     'Segoe UI Emoji', 
//     'Segoe UI Symbol', 
//     'Noto Color Emoji'
//   ]
//     }
//   }
// }