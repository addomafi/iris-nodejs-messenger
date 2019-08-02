const asyncLocalStorage = require('async-local-storage');

module.exports = class AsyncLocalStorage {
  static getValue(propertyName) { return asyncLocalStorage.get(propertyName); }

  static setValue(propertyName, value) { return asyncLocalStorage.set(propertyName, value); }

  static setActive() { asyncLocalStorage.enable(); }

  static startScope() { asyncLocalStorage.scope(); }
};
