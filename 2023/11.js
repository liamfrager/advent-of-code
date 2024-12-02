let game_info = document.getElementById("puzzle-11");
const data = game_info.innerText.split(" ");

let image = [];
data.forEach(row => {
    image.push(row.split(''))
})

// expand rows
let expandedRows = [];
for (let i = 0; i < image.length; i++) {
    const row = image[i];
    if (row.indexOf('#') === -1) {
        let expansion = [];
        for (let j = 0; j < row.length; j++) {
            expansion.push('*');
        }
        image.splice(i, 1, expansion);
        expandedRows.push(i);
        i++;
    }
}
console.log(image);

// expand columns
let expandedCols = [];
for (let i = 0; i < image[0].length; i++) {
    let col = [];
    for (let j = 0; j < image.length; j++) {
        col.push(image[j][i]);
    }
    if (col.indexOf('#') === -1) {
        image.forEach(row => {
            row.splice(i,1,'*')
        })
        expandedCols.push(i);
        i++;
    }
}

// number galaxies
let galaxies = [];
let galaxyCount = 0;
for (let i = 0; i < image.length; i++) {
    let row = image[i];
    for (let j = 0; j < row.length; j++) {
        if (image[i][j] === '#') {
            let newGalaxy = {};
            newGalaxy.num = galaxyCount;
            newGalaxy.row = i;
            newGalaxy.col = j;
            galaxyCount++
            galaxies.push(newGalaxy);
        }
    }
}
console.log(expandedRows, expandedCols);
console.log(galaxies);

// calculate shortest paths
let total = 0;
for (let i = 0; i < galaxies.length; i++) {
    for (let j = i; j < galaxies.length; j++) {
        let start = galaxies[i];
        let end = galaxies[j];
        let distance = Math.abs(start.row - end.row) + Math.abs(start.col - end.col);
        expandedRows.forEach(row => {
            // if path crosses row expansion
            if ( !((start.row < row && end.row < row) || (start.row > row && end.row > row)) ) {
                distance += 999999;
            }
        })
        expandedCols.forEach(col => {
            // if path crosses col expansion
            if ( !((start.col < col && end.col < col) || (start.col > col && end.col > col)) ) {
                distance += 999999;
            }
        })
        total += distance;
    }
}

console.log(total);