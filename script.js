let coins = +prompt("Enter the number of coins", "10");

alert(coinCombo(coins));

function coinCombo(c) {
  let coinsCombo = new Array(4).fill(0);
  
  while(c >= 25) {
    c -= 25;
    coinsCombo[3]++;
  }

  while(c >= 10) {
    c -= 10;
    coinsCombo[2]++;
  }

  while(c >= 5) {
    c -= 5;
    coinsCombo[1]++;
  }

  while(c >= 1) {
    c -= 1;
    coinsCombo[0]++;
  }

  return coinsCombo;
}