let game_info = document.getElementById("puzzle-10");
const data = game_info.innerText.split(" ");

let map = [];
data.forEach(row => {
    map.push(row.split(''))
})
console.log(map);

// S is a J

let rowS = -1;
let colS = -1;
for (let i = 0; i < map.length; i++) {
    const row = map[i];
    for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        if (map[i][j] === 'S') {
            rowS = i;
            colS = j;
            break;
        }
    }
    if (rowS !== -1) { break; }
}

let row = rowS;
let col = colS - 1;
let direction = 'W';
let stepCount = 1;

let pipeCells = [];

while (map[row][col] !== 'S') {
    let cell = map[row][col];
    pipeCells.push([map[row][col], row, col]);
    switch (cell) {
        case '-':
            if (direction === 'E') {
                col++;
            } else if (direction === 'W') {
                col--;
            }
            break;
        case '|':
            if (direction === 'N') {
                row--;
            } else if (direction === 'S') {
                row++;
            }
            break;
        case 'J':
            if (direction === 'S') {
                col--;
                direction = 'W';
            } else if (direction === 'E') {
                row--;
                direction = 'N';
            }
            break;
        case 'L':
            if (direction === 'S') {
                col++;
                direction = 'E';
            } else if (direction === 'W') {
                row--;
                direction = 'N';
            }
            break;
        case 'F':
            if (direction === 'N') {
                col++;
                direction = 'E';
            } else if (direction === 'W') {
                row++;
                direction = 'S';
            }
            break;
        case '7':
            if (direction === 'N') {
                col--;
                direction = 'W';
            } else if (direction === 'E') {
                row++;
                direction = 'S';
            }
            break;
        default:
            console.log('error');
    }
    stepCount++;
}
console.log(stepCount/2);
console.log(pipeCells)