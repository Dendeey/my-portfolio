/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        poppyred: "#D64045",
        eerieblack: "#1B2021",
        gunmetal: "#30343F",
        platinum: "#D9D9D9",
        javascript: "#f7df1e",
        php: "#777BB3",
        react: "#61DBFB",
        mysql: "#00758F",
        wordpress: "#00749C",
        sass: " #CD6799",
        tailwind: "#06b6d4",
        github: "#171515",
        linkedin: "#0A66C2",
      },
      backgroundImage: {
        reactProject: "url('/src/assets/images/react_website.jpg')",
        wordpressProject: "url('/src/assets/images/wordpress_website.jpg')",
        phpProject: "url('/src/assets/images/php_website.jpg')",
      },
      translate: {
        sideBarHidden: "-200px",
      },
      spacing: {
        "30rem": "30rem",
      },
      screens: {
        "max-desktop": { max: "1440px" },
        "max-laptop": { max: "1023px" },
        "max-tablet": { max: "768px" },
        "max-mobile": { max: "425px" },
      },
    },
  },
  plugins: [],
};
