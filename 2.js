function getMoney(change, cash) {
  let denominations = cash.split(",").map((x) => {
    let [denom, amount] = x.split(":").map(Number);
    return { denom, amount };
  });

  let result = [];
  for (let i = denominations.length - 1; i >= 0; i--) {
    let { denom, amount } = denominations[i];
    let count = Math.min(Math.floor(change / denom), amount);
    if (count > 0) {
      result.push(`${denom}:${count}`);
      change -= denom * count;
    }
  }

  if (change > 0) {
    return "Error: Not enough money";
  }

  return result.join(",");
}

// Пример использования функции
const input = "78;1:7,5:5,10:3,50:6,100:2";
const [change, cash] = input.split(";");
const output = getMoney(parseInt(change), cash);
console.log(output); // "1:3,5:1,10:2,50:1"
