var config = {
  local: {
    mode: 'local',
    port: 30000,
    mongoHost: 'localhost',
    mongoDbName: 'reposte'
  }
};

module.exports = function (mode) {
  return config[mode || process.argv[2] || 'local'] || config.local;
};