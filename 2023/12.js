let game_info = document.getElementById("puzzle-12");
const data = game_info.innerText.split(" ");

let rows = [];
for (let i = 0; i < data.length; i += 2) {
    let newRow = {};
    newRow.record = data[i].split('');
    newRow.nums = data[i+1].split(',');
    rows.push(newRow);
}

rows.forEach(row => {
    let permutations = [];
    for (let i = 0; i < row.record.length; i++) {
        for (let j = 0; j < row.record.length; j++) {
            let permutation = row.record;
            if (row.record[j] === '?') {

            }
        }
    }
})