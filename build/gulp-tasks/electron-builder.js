module.exports = function (callback) {
    const electronBuilder = require("electron-builder");

    electronBuilder.build()
                   .then(callback)
                   .catch(callback);
};
