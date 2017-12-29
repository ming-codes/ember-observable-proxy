/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
  });

  app.import('node_modules/zen-observable/zen-observable.js');

  return app.toTree();
};
