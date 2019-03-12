// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
makeExchange = function (currency){
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    const H = {"H":50}, Q = {"Q":25}, D = {"D":10}, N = {"N":5}, P = {"P":1};
    const amount = {"H":50, "Q":25, "D":10, "N":5, "P":1};

    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency/amount[H]>=0) return amount[H] = parseInt(currency/amount[H]);
    console.log (amount[H]);
    // if (currency%50>=0) return {"H":parseInt(currency/50)};
    // if (currency%25>=0) return {"Q":parseInt(currency/25)};
    

    console.log (amount[H])
}
