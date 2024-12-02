let game_info = document.getElementById("puzzle-3");
const lines = game_info.innerText.split(" ");

let total = 0;

// PART 1

for (let j = 0; j < lines.length; j++) {
    let line = lines[j].split("")
    for (let i = 0; i < line.length; i++) {
        let char = line[i]
        if (isNaN(char) && char !== ".") {
            let adjacent_coords = [-1,0,1];
            adjacent_coords.forEach(a => {
                adjacent_coords.forEach(b => {
                    if(a !== 0 || b !== 0) {
                        let row_i = j+a
                        let col_i = i+b;
                        if((row_i >= 0 && col_i >=0) && (row_i <= lines.length && col_i <= line.length)) {
                            let row = lines[row_i];
                            let adjacent = row[col_i];
                            if (!isNaN(adjacent)) {
                                let num = [];
                                num.push(adjacent);
                                let num_start = col_i;
                                while(!isNaN(row[num_start-1]) && num_start > 0) {
                                    num_start--;
                                    num.unshift(row[num_start]);
                                }
                                let num_end = col_i;
                                while(!isNaN(row[num_end+1]) && num_end < row.length) {
                                    num_end++;
                                    num.push(row[num_end]);
                                }
                                num = Number(num.join(''));
                                total += num;
                                row = row.split('');
                                for (let i = num_start; i <= num_end; i++) {
                                    row[i] = ".";
                                }
                                row = row.join('');
                                lines[j+a] = row;
                            }
                        }
                    } 
                })
            })
        }
    }
}

console.log(total);

// PART 2

let sum = 0;

for (let j = 0; j < lines.length; j++) {
    let line = lines[j].split("")
    for (let i = 0; i < line.length; i++) {
        let char = line[i]
        if (char === "*") {
            let nums = [];
            let adjacent_coords = [-1,0,1];
            adjacent_coords.forEach(a => {
                adjacent_coords.forEach(b => {
                    if(a !== 0 || b !== 0) {
                        let row_i = j+a
                        let col_i = i+b;
                        if((row_i >= 0 && col_i >=0) && (row_i <= lines.length && col_i <= line.length)) {
                            let row = lines[row_i];
                            let adjacent = row[col_i];
                            if (!isNaN(adjacent)) {
                                let num = [];
                                num.push(adjacent);
                                let num_start = col_i;
                                while(!isNaN(row[num_start-1]) && num_start > 0) {
                                    num_start--;
                                    num.unshift(row[num_start]);
                                }
                                let num_end = col_i;
                                while(!isNaN(row[num_end+1]) && num_end < row.length) {
                                    num_end++;
                                    num.push(row[num_end]);
                                }
                                num = Number(num.join(''));
                                nums.push(num);
                                row = row.split('');
                                for (let i = num_start; i <= num_end; i++) {
                                    row[i] = ".";
                                }
                                row = row.join('');
                                lines[j+a] = row;
                            }
                        }
                    } 
                })
            })
            if (nums.length === 2) {
                sum += nums[0]*nums[1];
            }
        }
    }
}
console.log(sum);