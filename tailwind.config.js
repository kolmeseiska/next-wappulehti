/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themes: [
      {
        // NOTE: remember to update colors.css fallback values
        wappu: {
          'primary': '#e11d48',
          'secondary': '#D926AA',
          'accent': '#00c7b5',
          'neutral': '#191D24',
          'base-100': '#2A303C',
          'base-content': '#e3e2ee',
          'info': '#3ABFF8',
          'success': '#36D399',
          'warning': '#FBBD23',
          'error': '#FBBD23',
        },
      },
      {
        // Pönkeli 2024 colors
        gallery: {
          primary: '#f1f1f1',
          secondary: '#152747',
          accent: '#513448',
          neutral: '#EBE7E5',
          'neutral-content': '#181818',
          'base-100': '#51212D',
          'base-200': '#181818',
          'base-300': '#915A68',
          'base-content': '#EBE7E5',
          info: '#66c6ff',
          success: '#87d039',
          warning: '#e2d562',
          error: '#ff6f6f',
        }
      }
    ],
  }
}
