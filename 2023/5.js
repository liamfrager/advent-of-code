let game_info = document.getElementById("puzzle-5");
const data = game_info.innerText.split(": ");
data.shift();

// PART 1

for (let i = 0; i < data.length; i++) {
    map = data[i].split(" ");
    map.pop();
    map.pop();
    let x = [];
    for (let j = 0; j < map.length; j+=3) {
        const three = [map[j], map[j+1], map[j+2]]
        x.push(three);
    }
    data[i] = i === 0 ? map : x;
}

function findLocation(seed) {
    let x = Number(seed);
    for (let i = 0; i < 7; i++) {
        let map = data[i+1];
        for (let j = 0; j < map.length; j++) {
            const line = map[j];
            const destination_range_start = Number(line[0]);
            const source_range_start = Number(line[1]);
            const range_length = Number(line[2]);
            if (x >= source_range_start && x <= source_range_start + range_length) {
                x = destination_range_start + (x - source_range_start);
                break;
            }
        }
    }
    return x;
}

let locations = [];
let seeds = data[0];
seeds.forEach(seed => {
    locations.push(findLocation(seed));
})
let answer = Math.min(...locations);
console.log(answer);

// PART II

let seed_pairs = [];
for (let i = 0; i < seeds.length; i+=2) {
    const pair = [Number(seeds[i]), Number(seeds[i+1])]
    seed_pairs.push(pair);
}


function findLocationRanges(pair) {
    let pairs = [pair];
    for (let i = 0; i < 7; i++) {
        let map = data[i+1];
        let newPairs = [];
        for (let j = 0; j < pairs.length; j++) {
            let low = pairs[j][0];
            let high = low + pairs[j][1];
            let newLow = null;
            let newRange = null;
            for (let k = 0; k < map.length; k++) {
                const line = map[k];
                const destination_range_start = Number(line[0]);
                const source_range_start = Number(line[1]);
                const range_length = Number(line[2]);
                const source_range_end = source_range_start + range_length;
                if (low >= source_range_start && high <= source_range_end) {
                    newLow = destination_range_start + (low - source_range_start);
                    newRange = high - low;

                } else if (low >= source_range_start && high > source_range_end) {
                    newLow = destination_range_start + (low - source_range_start);
                    newRange = range_length - (low - source_range_start);
                    low = source_range_end;

                } else if (low < source_range_start && high <= source_range_end) {
                    newLow = destination_range_start;
                    newRange = range_length - (source_range_end - high);
                    high = source_range_start;

                } else if (low < source_range_start && high > source_range_end) {
                    newLow = destination_range_start;
                    newRange = range_length;

                } else {
                    console.log("error");
                }
                newPairs.push([newLow,newRange]);
            }
        }
        pairs = newPairs;
    }
    return pairs;
}

let x = 0;
seed_pairs.forEach(pair => {   
    findLocationRanges(pair);
})
console.log(x)


// seeds
// soil
// fertilizer
// water
// light
// temperature
// humidity
// location