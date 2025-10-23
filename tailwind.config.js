/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./component/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#f1f2f4",
                "background-light": "#f7f7f7",
                "background-dark": "#18191a",
            },
            fontFamily: {
                "display": ["Inter"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        },
    },
}
