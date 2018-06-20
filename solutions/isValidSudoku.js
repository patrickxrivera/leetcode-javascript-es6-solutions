const insertVal = (seen) => (val) => {
  if (seen.has(val)) return true;

  seen.add(val);
};

const isValidSudoku = (grid) => {
  const seen = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const curr = grid[i][j];

      if (curr !== '.') {
        const newVals = [
          `${curr} in row ${i}`,
          `${curr} in column ${j}`,
          `${curr} in block ${Math.floor(i / 3)} ${Math.floor(j / 3)}`
        ];

        const hasDuplicate = newVals.some(insertVal(seen));

        if (hasDuplicate) return false;
      }
    }
  }

  return true;
};

const grid = [
  ['4', '.', '.', '1', '.', '.', '.', '2', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.']
];

isValidSudoku(grid);
