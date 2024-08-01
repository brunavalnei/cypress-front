const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        logDateTime(message){
          console.log(new Date().toLocaleString(), message);
          return null;
        }
      });
      return config
    },
  },

});