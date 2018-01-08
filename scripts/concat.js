const fs = require('fs');
const concat = require('concat');

const libDirectory = './lib';
const buildDirectory = './lib/build';

if (!fs.existsSync(libDirectory)) {
  fs.mkdirSync(libDirectory);

  if (!fs.existsSync(buildDirectory)) {
    fs.mkdirSync(buildDirectory);
  }
}

const appFiles = [
  './src/javascripts/application.js',
  './src/javascripts/plugins/auto-font-size.js',
  './src/javascripts/plugins/auto-resize.js',
  './src/javascripts/plugins/connection-feedback.js',
  './src/javascripts/plugins/error-handler.js',
  './src/javascripts/plugins/grid.js',
  './src/javascripts/plugins/spinner.js'
];

const vendorFiles = [
  './node_modules/jquery/dist/jquery.js',
  './node_modules/underscore/underscore.js',
  './node_modules/moment/moment.js',
  './node_modules/spin.js/spin.js'
];

concat(appFiles, './lib/build/app.js');
concat(vendorFiles, './lib/build/vendor.js');
