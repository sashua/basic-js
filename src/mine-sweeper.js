const { config } = require("chai");
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
  const getNeighboursXY = ({ x, y, maxX, maxY }) => {
    const neighbours = [];
    for (const dY of [-1, 0, 1]) {
      for (const dX of [-1, 0, 1]) {
        const newX = x + dX;
        const newY = y + dY;
        if (
          newX < 0 ||
          newY < 0 ||
          newX > maxX ||
          newY > maxY ||
          (dX === 0 && dY === 0)
        ) {
          continue;
        }
        neighbours.push([newX, newY]);
      }
    }
    return neighbours;
  };

  const config = [];
  const maxY = matrix.length - 1;
  for (let y = 0; y <= maxY; y += 1) {
    config.push([]);
    const maxX = matrix[y].length - 1;
    for (let x = 0; x <= maxX; x++) {
      const sum = getNeighboursXY({ x, y, maxX, maxY })
        .map(([x, y]) => matrix[y][x])
        .reduce((sum, val) => sum + val, 0);

      config[y].push(sum);
    }
  }
  return config;
}

module.exports = {
  minesweeper,
};
