let game_info = document.getElementById("puzzle-4");
const cards = game_info.innerText.split("Card ");
cards.shift();

// PART 1

let total = 0;

cards.forEach(card => {
    card = card.split(": ");
    card.splice(0,1);
    card = card[0].split(" | ");
    let win_nums = card[0].split(" ");
    let my_nums = card[1].split(" ");

    let matches = 0;
    my_nums.forEach(num => {
        if (win_nums.indexOf(num) != -1) {
            matches++;
        }
    })
    let points = matches === 0 ? 0 : 2 ** (matches-1);
    total += points;
 })
 console.log(total);

 // PART 2
 
 let highest_card = cards.length;
 for (let j = 0; j < cards.length; j++) {
    nums = cards[j].split(": ");
    nums.splice(0,1);
    nums = nums[0].split(" | ");
    let win_nums = nums[0].split(" ");
    let my_nums = nums[1].split(" ");

    let matches = 0;
    my_nums.forEach(num => {
        if (win_nums.indexOf(num) != -1) {
            matches++;
        }
    })
    for (let i = 1; i <= matches; i++) {
        let card_num = cards.indexOf(cards[j]);
        let copy = cards[card_num+i];
        if (card_num+i <= highest_card) {
            cards.push(copy);
        }
    }
 }
 total = cards.length;
 console.log(total);