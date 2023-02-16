const sudokuPuzzle = [[ 8,9,5,7,4,2,1,3,6 ],
[ 2,7,1,9,6,3,4,8,5 ],
[ 4,6,3,5,8,1,7,9,2 ],
[ 9,3,4,6,1,7,2,5,8 ],
[ 5,1,7,2,3,8,9,6,4 ],
[ 6,8,2,4,5,9,3,7,1 ],
[ 1,5,9,8,7,4,6,2,3 ],
[ 7,4,6,3,2,5,8,1,9 ],
[ 3,2,8,1,9,6,5,4,7 ]];

function getRow(grid, rowIndex) {
    return grid[rowIndex];
}

function getColumn(grid, columnIndex) {
    let result = [];
    for (let index = 0; index < grid.length; index++) {
        const row = grid[index];
        result.push(row[columnIndex]);   
    }
    return result;
}

// Get 3x3 section
// max is getSection(2, 2)
function getSection(grid, x, y) {
    let results = [];
    let row = x * 3
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        let column = y * 3;
        for (let colIndex = 0; colIndex < 3; colIndex++) {
            results.push(grid[row][column]);
            column++;
        }
        row++;
    }
    return results;
}

// Returns if there is all numbers from 1-9 and no repeats
function includes1to9(unsortedArray) {
    let sortedArray = unsortedArray.sort((a, b) => a - b);
    let result = true;
    for (let index = 0; index < sortedArray.length; index++) {
        if (sortedArray[index] !== index + 1) result = false;
        
    }
    return result;
}

function sudokuIsValid(puzzle) {
    let result = true;
    for (let iterations = 0; iterations < 9; iterations++) {
        
        if (!includes1to9(getRow(puzzle, iterations))) {
            result = false;
        }
        
        // if (!includes1to9(getColumn(puzzle, iterations))) {
        //     result = false;
        // }

        // let sectionX = 0;
        // let sectionY = 0;
        
        // if (!includes1to9(getSection(puzzle, sectionY, sectionX))) {
        //     result = false;
        // }
        // if (sectionX < 3) {
        //     sectionX ++;
        // }
        // else {
        //     sectionY++;
        //     sectionX = 0;
        // }
    }
    return result;
}

console.log(sudokuIsValid(sudokuPuzzle))