// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    var H=parseInt(currency/50);
    var Q=0, D=0, N=0, P=0;
    var amount = {};
        if (currency <= 0) return {};
        if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
          currency=currency - H*50;
          Q=parseInt(currency/25);
          currency=currency - Q*25;
          D=parseInt(currency/10);
          currency=currency - D*10;
          N=parseInt(currency/5);
          currency=currency - N*5;
          P=parseInt(currency);
    
        if (H) amount["H"]=H;
        if (Q) amount["Q"]=Q;
        if (D) amount["D"]=D;
        if (N) amount["N"]=N;
        if (P) amount["P"]=P;
        return amount;
}
