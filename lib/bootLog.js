const Module = require('./module');
/**
 * Logs the module boot process...
 */
class BootLog extends Module {
  constructor(app, config) {
    console.log('BootLog');
    super();
    app.addHook('boot', () => {
      console.log(arguments);
    });
  }
}

module.exports = BootLog;
