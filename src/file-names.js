const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCounts = new Map()

  return names.map(name => {
    if (!nameCounts.has(name)) {
      nameCounts.set(name, 1)
      return name
    }

    let newName
    do {
      newName = `${name}(${nameCounts.get(name)})`
      nameCounts.set(name, nameCounts.get(name) + 1)
    } while (nameCounts.has(newName))

    nameCounts.set(newName, 1)
    return newName
  })
}

module.exports = {
  renameFiles
};
