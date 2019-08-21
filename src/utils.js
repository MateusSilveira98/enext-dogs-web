const localstorage = {
  set: (label, obj) => {
    window.localStorage.setItem(label, JSON.stringify(obj));
  },
  get: (label) => {
    let string = window.localStorage.getItem(label);
    return JSON.parse(string);
  },
  remove: (label) => {
    window.localStorage.removeItem(label);
  },
  clear: () => {
    window.localStorage.clear();
  }
}
const verifyAndUpdateItemFromLocalStorage = (item, prop, value) => {
  let update = localstorage.get(item) || {};
  update[prop] = value;
  localstorage.set(item, update);
}

module.exports = {
  localstorage,
  verifyAndUpdateItemFromLocalStorage
}
