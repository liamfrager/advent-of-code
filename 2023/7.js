let game_info = document.getElementById("puzzle-7");
const data = game_info.innerText.split(" ");

let hands = [];
for (let i = 0; i < data.length; i+=2) {
    let hand = {
        cards: data[i],
        bid: data[i+1],
        jCount: function() {
            let count = 0;
            this.cards.split('').forEach(card => {
                count = card === 'J' ? count + 1 : count;
            })
            return count;
        }
    }
        hands.push(hand)
}

function getMost(hand) {
        let most = 0;
    hand.split('').forEach(card => {
        result = 0;
        hand.split('').forEach(elem => {
            if (card === elem) {
                result++;
            }
        });
        if (result > most) {
            most = result;
        }
    });
    return most;
}
function getHandType(hands, J) {
    for (let i = 0; i < hands.length; i++) {
        let hand = hands[i].cards;
        let uniques = hand.split('').filter((char,index) => hand.indexOf(char) === index).length;
        hand_type = 0;
        switch (uniques) {
            case 5:
                // high card
                if (J === 'joker' && hands[i].jCount() > 0) {
                    hand_type = 5;
                } else {
                    hand_type = 6;
                }
                break;
            case 4:
                // one pair
                if (J === 'joker' && hands[i].jCount() > 0) {
                    hand_type = 3;
                } else {
                    hand_type = 5;
                }
                break;
            case 3:
                // three of a kind || two pair
                if (J === 'joker' && hands[i].jCount() > 0) {
                    if (hands[i].jCount() > 1) {
                        hand_type = 1;
                    } else {
                        if (getMost(hand) === 3) {
                            hand_type = 1;
                        } else {
                            hand_type = 2;
                        }
                    }
                } else {
                    if (getMost(hand) === 3) {
                        hand_type = 3;
                    } else {
                        hand_type = 4;
                    }
                }
                break;
            case 2:
                // four of a kind || full house
                if (J === 'joker' && hands[i].jCount() > 0) {
                    hand_type = 0;
                } else {
                    if (getMost(hand) === 4) {
                        hand_type = 1;
                    } else {
                        hand_type = 2;
                    }
                }
                break;
            case 1:
                // five of a kind
                hand_type = 0;
                break;
            default:
                break;
        }
        hands[i].hand_type = hand_type;
    }
    console.log(hands);
}



function sortCards(hands,J) {
    let card_types = [[],[],[],[],[],[],[]];
    hands.forEach(hand => {
        card_types[hand.hand_type].push(hand);
    })
    console.log(card_types);
    card_types.forEach(type => {
        type.sort((a,b) => {
            let i = 0;
            while (a.cards[i] === b.cards[i]) {
                i++;
            }
            function letterToNum(char) {
                switch (char) {
                    case 'A':
                        return 14;
                        break;
                    case 'K':
                        return 13;
                        break;
                    case 'Q':
                        return 12;
                        break;
                    case 'J':
                        return J === 'joker' ? 1: 11;
                        break;
                    case 'T':
                        return 10;
                        break;
                    default:
                        return Number(char);
                        break;
                }
            }
            let x = letterToNum(a.cards[i]);
            let y = letterToNum(b.cards[i]);
            return y - x;
        })
    })
    card_types = card_types.flat(1);
    for (let i = 0; i < card_types.length; i++) {
        total += card_types[i].bid * (card_types.length-i);
    }
}

let total = 0;
getHandType(hands, 'joker');
sortCards(hands, 'joker');
console.log(total);

// too high 250595560
// too low 248882247