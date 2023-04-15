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
  console.debug(names)
  if (names.length === 0){
    return []
  }
  let arr2 = [];
for (let i = 0; i < names.length; i++){
      if(i === 0){

      arr2.push(names[i])
      }else if(arr2.includes('doc(1)(1)')){
        arr2.push(names[i] + '(2)')

    }else if(arr2.includes(names[i])){
      console.debug("111")
arr2.push(names[i] + '(1)')
    }else{
      arr2.push(names[i])
    }

}
console.debug(arr2)
return arr2;

}

module.exports = {
  renameFiles
};
