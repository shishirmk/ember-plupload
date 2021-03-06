export default function (config) {
  var removedFiles = [];
  return {
    config: config,
    removedFiles: removedFiles,

    total: {
      queued: 0,
      size: 0,
      loaded: 0
    },

    init: function () {
      this.initialized = true;
    },

    bind: function (functionName, callback) {
      this[functionName] = callback;
    },

    unbindAll: function () {
      this.unbound = true;
    },

    removeFile: function (file) {
      removedFiles.push(file);
    },

    start: function () {
      this.started = true;
    }
  };
}
