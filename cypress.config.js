const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rjimn1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
