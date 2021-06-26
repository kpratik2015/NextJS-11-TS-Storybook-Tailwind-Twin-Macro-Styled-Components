const purgeEnabled = process.env.NODE_ENV === "production"

console.log(`\n TailwindCS ✅ purgeEnabled=${purgeEnabled}\n`);

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
