const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  console.debug(arr)
  let arr2 = []

  arr.forEach((val, i, mas) => {
    if(mas[i] === -1 && mas[i+1] !== -1 ){
    console.debug(mas[i], 'one')
    arr2.push(val)
  }else if(mas[i] !== -1 && mas[i + 1] === -1){
    console.debug(mas[i], 'two')
    arr2.push(val)
  }else if( mas[i] === -1 && mas[i + 1] === -1){
    console.debug(mas[i], 'three')
    arr2.push(val)
  }else if (mas[i] !== -1 && mas[i + 1] !== -1 && (mas[i] - mas[i + 1] > 0)){
    console.debug(mas[i], 'four')
    arr2.push(mas[i])
  }else if (mas[i] !== -1 && mas[i + 1] !== -1 && (mas[i] - mas[i + 1] < 0)){
    console.debug(mas[i], 'four')
    arr2.push(mas[i + 1])
  }
});
return arr2
//  arr.sort(function comNumb(a, b) {
//     if(a === -1 && b !== -1 ){
//       console.debug(a, 'one')
//       return a;
//     }else if(a !== -1 && b === -1){
//       console.debug(a, 'two')
//       return a;
//     }else if( a === -1 && b === -1){
//       console.debug(a, 'three')
//       return a;
//     }else{
//       console.debug(a, 'four')
//     return a - b;
//     }
//   })
//   console.debug(arr)
//   return arr
}

module.exports = {
  sortByHeight
};
