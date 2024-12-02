let game_info = document.getElementById("puzzle-2");
const games = game_info.innerText.split("Game ");
games.shift();

// PART 1

let sum = 0;
games.forEach(x => {
    line = x.split(" ")
    gameID = Number(line[0].substring(0, line[0].indexOf(":")));
    let num = "";
    let isTooBig = false;
    while (line.length > 0 && !isTooBig) {
        while (isNaN(num = line.shift())) {
        };
        num = Number(num);
        if (num > 12) {
            let color = line[0][0]
            switch (color) {
                case 'b':
                    if (num > 14) {
                        isTooBig = true;
                    };
                    break;
                case 'g':
                    if (num > 13) {
                        isTooBig = true;
                    };
                    break;
                case 'r':
                    isTooBig = true;
                    break;
                default: console.log("error");
            }
        }
        num = line.shift();
    }
    if (!isTooBig) {
        sum += gameID;
    }
});

console.log(sum);


// PART 2

sum = 0;

games.forEach(x => {
    line = x.replace(/,/g, '');
    line = line.replace(/;/g, '');
    line.split(' ');
    gameID = Number(line[0].substring(0, line[0].indexOf(":")));
    line = line.split(' ');

    let reds = [];
    let greens = [];
    let blues = [];
    
    for (let i = 2; i < line.length; i+=2) {
        let color = line[i];
        let array = [];
        switch (color) {
            case 'red': array = reds; break;
            case 'green': array = greens; break;
            case 'blue': array = blues; break;
        }
        array.push(line[i - 1]);
    }

    reds = Math.max.apply(Math, reds);
    greens = Math.max.apply(Math, greens);
    blues = Math.max.apply(Math, blues);
    
    let power = reds * greens * blues;
    sum += power;
});

console.log(sum);