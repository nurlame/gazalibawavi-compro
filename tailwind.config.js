/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navy:"#243C7A"
      },
      borderWidth: {
        dashed: "2px",
      },
    },
    container:true
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    base: false,
    themes: [
      {
        mytheme: {
          primary: '#243C7A',
          'primary-focus': '#3d4451',
          'primary-content': '#ffffff',
          secondary: '#D4F1FA',
          info: '#2094f3',
          success: '#38A34F',
          warning: '#ff9900',
          error: '#F64E60',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          navy: '#243C7A'
        },
      },
    ],
  },
}

