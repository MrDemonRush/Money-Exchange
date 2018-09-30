// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coins = {};
  
    if (currency <= 0) {
      return coins;
    }
  
    if (currency > 10000) {
      coins.error = "You are rich, my friend! We don't have so much coins for exchange";
      return coins;
    }
      
      const H = Math.floor(currency / 50); 
  
      if (H) {
        coins.H = H;
      }
  
      const h = currency % 50;
      const Q = Math.floor(h / 25);  
  
      if (Q) {
        coins.Q = Q;
      }
      
      const q = h % 25;
      const D = Math.floor(q / 10);  
  
      if (D) {
        coins.D = D;
      }
  
      const d = q % 10;
      const N = Math.floor(d / 5); 
  
      if (N) {
        coins.N = N;
      }
  
      const P = Math.floor(d % 5);
  
      if (P) {
        coins.P = P;
      }
  
      return coins;
}
