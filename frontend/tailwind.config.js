import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        extend: {
            colors: {
                blue: 'oklch(var(--blue))'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
