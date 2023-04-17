const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  console.debug(matrix);
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {

    let d = matrix[i].map((val, a, arr) => {
      if (val === true) {
        return 1;
      } else {
        let count = 0
        if(matrix[i][a + 1] === true) {
          count++
        }
        if(matrix[i][a - 1] === true) {
          count++
        }
        if(matrix[i + 1] && matrix[i + 1][a + 1] === true) {
          count++
        }
        if(matrix[i + 1] && matrix[i + 1][a - 1] === true){
          count++
        }
        if(matrix[i + 1] && matrix[i + 1][a]){
          count++
        }
        if(matrix[i - 1] && matrix[i - 1][a - 1]){
          count++
        }
        if(matrix[i - 1] && matrix[i - 1][a + 1]){
          count++
        }
        if(matrix[i - 1] && matrix[i - 1][a]){
          count++
        }

        return count;
      }
    })
    newArr.push(d)
    }

return newArr
}

module.exports = {
  minesweeper,
};
