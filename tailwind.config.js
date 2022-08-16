/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                header: 'var(--header-height)',
            },
        },
    },
    plugins: [],
};
