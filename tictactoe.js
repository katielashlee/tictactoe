const generateBoard = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const subArr = [];
    for (let j = 0; j < n; j++) {
      subArr.push(null);
    }
    arr.push(subArr);
  }
  return arr;
};

const checkWin = (arr) => {
  for (let column = 0; column < arr.length; column++) {
    const caseMatch = arr[column][0];
    if (caseMatch !== null) {
      for (let row = 0; row < arr.length; row++) {
        if (caseMatch !== arr[column][row]) {
          break;
        } else {
          if (row === arr.length - 1) {
            return true;
          }
        }
      }
    }
  }
  for (let column = 0; column < arr.length; column++) {
    const caseMatch = arr[0][column];
    if (caseMatch !== null) {
      for (let row = 0; row < arr.length; row++) {
        if (caseMatch !== arr[row][column]) {
          break;
        } else {
          if (row === arr.length - 1) {
            return true;
          }
        }
      }
    }
  }
  for (let column = 0; column < arr.length; column++) {
    const caseMatch = arr[0][0];
    if (caseMatch !== null) {
      for (let row = 0; row < arr.length; row++) {
        if (caseMatch !== arr[row][row]) {
          break;
        } else {
          if (row === arr.length - 1) {
            return true;
          }
        }
      }
    }
  }
  for (let column = 0; column < arr.length; column++) {
    const caseMatch = arr[0][arr.length - 1];
    if (caseMatch !== null) {
      for (let row = 0; row < arr.length; row++) {
        if (caseMatch !== arr[row][arr.length - 1 - row]) {
          break;
        } else {
          if (row === arr.length - 1) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

module.exports = {
    checkWin,
    generateBoard,
};
