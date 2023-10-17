/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
      ],
  theme: {
    extend: {
        lineClamp: {
            8: '8',
          },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

