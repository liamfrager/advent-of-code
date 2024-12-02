import fs from 'fs';

let data = null;
fs.readFile("./puzzle-inputs/14.txt", "utf-8", (err, file) => {
    data = file.split("\n");

    let rocks = data;
    console.log(rocks);
    for (let i = 0; i < rocks.length; i++) {
        rocks[i] = rocks[i].split("");
        if (i === 0) { continue };
        for (let j = 0; j < rocks[i].length; j++) {
            if (rocks[i][j] !== "O") { continue };
            let offset = 0;
            while (rocks[i - offset - 1][j] === ".") {
                offset++;
                if (i - offset === 0) { break };
            }
            rocks[i][j] = ".";
            rocks[i - offset][j] = "O";
        }
    }
    let totalLoad = 0;
    for (let i = 0; i < rocks.length; i++) {
        const rockCount = rocks[i].filter(x => x === "O").length;
        totalLoad += rockCount * (rocks.length - i);
    }
    console.log(totalLoad);
});