let game_info = document.getElementById("puzzle-6");
const data = game_info.innerText.split(" ");

// PART 1

let races = []
for (let i = 0; i < 4; i++) {
    races.push([data[i+1], data[i+6]])
}

let answer = 1;

races.forEach(race => {
    let time = race[0];
    let distance = race[1];

    let results = [];
    for (let i = 0; i < time; i++) {
        results.push((time-i)*i)
    }
    answer *= results.filter((x) => x > distance).length;
})

console.log(answer);

// PART 2

console.log(data);
let time = [];
let distance = [];
for (let i = 0; i < 4; i++) {
    time.push(data[i+1])
    distance.push(data[i+6])
}
time = Number(time.join(''));
distance = Number(distance.join(''));

let results = [];
for (let i = 0; i < time; i++) {
    results.push((time-i)*i)
}
let big_race = results.filter((x) => x > distance).length;
console.log(big_race);
