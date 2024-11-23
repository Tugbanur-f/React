const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://hyf-react-w2-example.netlify.app/", // Correct: Base URL of the app you're testing
    specPattern: "cypress/e2e/0-myown/1-navigation.spec.js", // Correct: Path to your test files
    supportFile: false, // Correct: Path to your support file
    setupNodeEvents(on, config) {
      // Optional: Add custom event handling or plugin configuration here if needed
    },
  },
});
