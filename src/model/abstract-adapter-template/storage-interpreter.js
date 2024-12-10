/*
 ** Empty signatures for interchangeable
 ** StorageInterpreter factory functions.
 ** Intended to be used as a consistent adapter
 ** for various storage system API's.
 */

export default function StorageInterpreter() {
  const searchKeyExists = (key) => {
    //Empty Signature
  };

  const setStorage = (key, value) => {
    //Empty Signature
  };

  const readUsingKey = (key) => {
    //Empty Signature
  };

  const deleteUsingKey = (key) => {
    //Empty Signature
  };

  return {
    searchKeyExists,
    setStorage,
    readUsingKey,
    deleteUsingKey,
  };
}
