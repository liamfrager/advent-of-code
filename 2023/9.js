let game_info = document.getElementById("puzzle-9");
const data = game_info.innerText.split(" ");


let sequences = [];
for (let i = 0; i < data.length; i += 21) {
    let sequence = [];
    for (let j = 0; j < 21; j++) {
        sequence.push(Number(data[i+j]));
    }
    sequences.push([sequence]);
}

let total = 0;

for (let i = 0; i < sequences.length; i++) {
    let sequence = sequences[i];
    while (!sequence[sequence.length - 1].every(value => value === 0)) {
        const x = sequence[sequence.length - 1];
        let arr = [];
        for (let j = 0; j < x.length - 1; j++) {
            const low = x[j];
            const high = x[j+1];
            let difference = high - low;
            arr.push(difference);
        }
        sequence.push(arr);
    }

    // for (let j = sequence.length - 1; j > 0; j--) {
    //     const x = sequence[j];
    //     const y = sequence[j-1];
    //     let sum = x[x.length - 1] + y[y.length - 1];
    //     y.push(sum);
    // }

    for (let j = sequence.length - 1; j > 0; j--) {
        const x = sequence[j];
        const y = sequence[j-1];
        let sum = y[0] - x[x.length - 1];
        y.push(sum);
    }
    let prediction = sequence[0][sequence[0].length - 1];

    total += prediction;
}
console.log(total);