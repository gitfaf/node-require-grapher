module.exports = function patchRequire () {
    var MODULE = require('module');
    var _require = MODULE.prototype.require;
    MODULE.prototype.require = function (name) {
        console.log(`required ${name}`);
        return _require.call(this, name);
    }
};
