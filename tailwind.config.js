/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D4AFF",
        primaryDark: "#4B2FD6",
        primaryLight: "#EEF1FF",
        primaryHover: "#5D3DEC",
        dark: "#061B4E",
        accent: "#FF8A00",
        accentHover: "#EA7D00",
        accentBlue: "#0284C7",
        accentGreen: "#166B00",
        success: "#166B00",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#0284C7",
        light: "#EEF1FF",
        borderPurple: "#E9DDFE",
        surface: {
          page: "#FFFFFF",
          section: "#F7F7FA",
          lavender: "#F5F1FF",
          blue: "#EEF6FF",
          card: "#FFFFFF",
          purple: "#EFE8FF"
        },
        neutral: {
          white: "#FFFFFF",
          50: "#F7F7FA",
          100: "#EEF1F7",
          200: "#E4E7EF",
          300: "#CBD2E1",
          500: "#667085",
          700: "#344054",
          900: "#061B4E",
          950: "#03102E"
        },
        border: {
          soft: "#ECECF4",
          purple: "#E9DDFE",
          blue: "#DCE8FF"
        }
      },
      spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "section-sm": "3.5rem",
        "section-md": "5rem",
        "section-lg": "6rem"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.08", fontWeight: "800" }],
        h1: ["3.75rem", { lineHeight: "1.08", fontWeight: "800" }],
        h2: ["3rem", { lineHeight: "1.12", fontWeight: "800" }],
        h3: ["1.75rem", { lineHeight: "1.2", fontWeight: "800" }],
        h4: ["1.5rem", { lineHeight: "1.25", fontWeight: "700" }],
        "body-lg": ["1.25rem", { lineHeight: "1.8" }],
        body: ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
        label: ["0.875rem", { lineHeight: "1.2", fontWeight: "700" }]
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        card: "1.75rem",
        banner: "2.5rem",
        button: "9999px"
      },
      boxShadow: {
        nav: "0 8px 24px rgba(109, 74, 255, 0.06)",
        soft: "0 16px 42px rgba(6, 27, 78, 0.06)",
        card: "0 18px 45px rgba(6, 27, 78, 0.07)",
        "card-hover": "0 28px 70px rgba(6, 27, 78, 0.13)",
        testimonial: "0 22px 58px rgba(6, 27, 78, 0.09)",
        avatar: "0 18px 48px rgba(6, 27, 78, 0.12)",
        cta: "0 28px 80px rgba(109, 74, 255, 0.28)",
        button: "0 14px 34px rgba(6, 27, 78, 0.16)",
        "button-hover": "0 18px 42px rgba(6, 27, 78, 0.22)",
        social: "0 10px 24px rgba(109, 74, 255, 0.08)"
      },
      backgroundImage: {
        "cta-purple": "linear-gradient(135deg, #6D4AFF 0%, #7657FF 48%, #9B5CFF 100%)"
      }
    }
  },
  plugins: []
};
