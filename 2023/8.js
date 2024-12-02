let game_info = document.getElementById("puzzle-8");
const toReplace = ['(',')',',',' =']
let data = game_info.innerText;
toReplace.forEach(char => {
    data = data.replaceAll(char,'');
})
data = data.split(' ');

const instructions = data[0].split('');

let nodes = {};
for (let i = 1; i < data.length; i += 3) {
    const from = data[i];
    const to = {
        'L': data[i+1],
        'R': data[i+2]
    };
    nodes[from] = to;
}
console.log(nodes);


function onePath() {
    let node = 'AAA';
    let steps = 0;
    while (node !== 'ZZZ') {
        const direction = instructions[steps % (instructions.length)];
        node = nodes[node][direction];
        steps++;
    }
    return steps;
}

function ghostPath() {
    let endsA = [];
    for (const node in nodes) {
        if (node[2] === 'A') {
            endsA.push(node);
        }
    }

    let steps = [];

    for (let i = 0; i < endsA.length; i++) {
        let node = endsA[i];
        let stepCount = 0
        while (node[2] !== 'Z') {
            const direction = instructions[stepCount % (instructions.length)];
            node = nodes[node][direction];
            stepCount++;
        }
        steps[i] = stepCount;
        endsA[i] = node;
    }

    console.log(steps);
    let total = 1;
    steps.forEach(step => {
        total *= step / instructions.length;
    })
    total *= instructions.length;
    return total;
    
}

console.log(onePath());
console.log(ghostPath());