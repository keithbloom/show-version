var version = require('./package.json').version;

module.exports = showVersion;

function showVersion() {
    console.log(`Version: ${version}`);
}