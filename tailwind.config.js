/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#161412',
        ink: '#0e0d0c',
        burnt: '#b5471f',
        burntdark: '#8f3415',
        chrome: '#cfd2d6',
        chromedark: '#9aa0a6',
        burgundy: '#5c1f24',
        cream: '#f3ead7',
        creamsoft: '#e9dcc2',
        steel: '#4a4f55',
        leather: '#6b4a2f',
        leatherlight: '#8a5d38'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        base: ['17px', '1.7']
      },
      boxShadow: {
        panel: '0 10px 40px -12px rgba(0,0,0,0.45)',
        chrome: 'inset 0 1px 0 rgba(255,255,255,0.18), 0 2px 10px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'garage-grain':
          'radial-gradient(circle at 20% 10%, rgba(181,71,31,0.10), transparent 45%), radial-gradient(circle at 85% 80%, rgba(92,31,36,0.14), transparent 40%)'
      }
    }
  },
  plugins: []
}
