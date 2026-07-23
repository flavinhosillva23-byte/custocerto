export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf8',
          100: '#d5f5ee',
          500: '#119c88',
          600: '#0d7f72',
          700: '#09665c',
          900: '#073b36'
        }
      },
      boxShadow: {
        soft: '0 18px 55px rgba(21, 49, 45, 0.10)'
      }
    }
  },
  plugins: []
}
