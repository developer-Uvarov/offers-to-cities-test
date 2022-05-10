const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
