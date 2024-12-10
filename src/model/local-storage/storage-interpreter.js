/*
 ** Wraps localStorage API.
 ** Behaves as an adapter between
 ** application logic and the aforementioned
 ** storage system.
 */

export default function StorageInterpreter() {
  const searchKeyExists = (key) => {
    let keyExists = false;

    localStorage.getItem(key) !== null
      ? (keyExists = true)
      : (keyExists = false);

    return keyExists;
  };

  const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const readUsingKey = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const deleteUsingKey = (key) => {
    localStorage.removeItem(key);
  };

  return {
    searchKeyExists,
    setStorage,
    readUsingKey,
    deleteUsingKey,
  };
}
