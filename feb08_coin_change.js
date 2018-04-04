//ours: katie, Preston, Fredd
function coins(amt) {
    var coins = [
        ["quarters", 25],
        ["dimes", 10],
        ["nickels", 5],
        ["pennies", 1]
        ];
    var change = {};
    amt *= 100
    for (var x=0; x<coins.length; x++) {
        change[coins[x][0]]=Math.floor(amt/coins[x][1]);
        amt = amt%coins[x][1];
    }
    return change;
}
coins(0.91)


//presenting group
function CoinChange(cents) {
    var dict = {
        "quarters" : 0,
        "dimes" : 0,
        "nickels" : 0,
        "pennies" : 0
    };
    dict["quarters"] = Math.trunc(cents/25);
    cents = cents%25;
    dict["dimes"] = Math.trunc(cents/10);
    cents = cents%10;
    dict["nickels"] = Math.trunc(cents/5);
    cents = cents%5;
    dict["pennies"] = cents;
    return dict;
}
CoinChange(73)
