const fs = require('fs');
const ncp = require('ncp').ncp;

const libDirectory = './lib';

ncp.limit = 16;

function myCallback(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Copied!');
}

// Stylesheets
const cssDestination = './lib/stylesheets';
const rickshawCss = './node_modules/rickshaw/rickshaw.min.css';
const gridsterCss = './node_modules/gridster/dist/jquery.gridster.min.css';
const normalizeCss = './node_modules/normalize.css/normalize.css';

if (!fs.existsSync(libDirectory)) {
  fs.mkdirSync(libDirectory);

  if (!fs.existsSync(cssDestination)) {
    fs.mkdirSync(cssDestination);
  }
}

ncp(rickshawCss, cssDestination + '/rickshaw.min.css', myCallback);
ncp(gridsterCss, cssDestination + '/jquery.gridster.min.css', myCallback);
ncp(normalizeCss, cssDestination + '/normalize.css', myCallback);

// JavaScript
const jsDestination = './lib/javascript';
const rickshawD3 = './node_modules/rickshaw/vendor/d3.v2.js';
const rickshawJs = './node_modules/rickshaw/rickshaw.min.js';
const logViewer = './src/javascripts/log-viewer.js';

if (!fs.existsSync(libDirectory)) {
  fs.mkdirSync(libDirectory);

  if (!fs.existsSync(jsDestination)) {
    fs.mkdirSync(jsDestination);
  }
}

ncp(rickshawD3, jsDestination + '/d3.v2.js', myCallback);
ncp(rickshawJs, jsDestination + '/rickshaw.min.js', myCallback);
ncp(logViewer, jsDestination + '/log-viewer.js', myCallback);
