// function getMoney(change, cash) {
//   let denominations = cash.split(",").map((x) => {
//     let [denom, amount] = x.split(":").map(Number);
//     return { denom, amount };
//   });

//   let result = [];
//   for (let i = denominations.length - 1; i >= 0; i--) {
//     let { denom, amount } = denominations[i];
//     let count = Math.min(Math.floor(change / denom), amount);
//     if (count > 0) {
//       result.push(`${denom}:${count}`);
//       change -= denom * count;
//     }
//   }

//   if (change > 0) {
//     return "Error: Not enough money";
//   }

//   return result.join(",");
// }

// // Пример использования функции
// const input = "78;1:7,5:5,10:3,50:6,100:2";
// const [change, cash] = input.split(";");
// const output = getMoney(parseInt(change), cash);
// console.log(output); // "1:3,5:1,10:2,50:1"

function atm(line) {
  //разделяем сумму и имеющиеся наличные
  let [amount, cash] = line.split(";");
  //разделяем строку на элементы
  const parts = cash.split(",");

  // console.log("parts", parts);

  //создаем из частей массив объектов с парами {nominal:номинал купюры,quantity:количество}
  let denominations = parts.map((part) => {
    const temparr = part.split(":");
    return { nominal: Number(temparr[0]), quantity: Number(temparr[1]) };
  });
  console.log("denominations", denominations);

  let resultStr = [];
  //перебираем полученный массив начиная с конца (с самой большой купюры)
  for (let i = denominations.length - 1; i >= 0; i--) {
    //выбираем меньшее от (деления между суммой и номиналом купюры) и кол-вом купюр
    let count = Math.min(
      Math.floor(amount / denominations[i].nominal),
      denominations[i].quantity
    );
    //если получилось положительное число - то купюр хватает - записываем в результат
    // и отнимаем из общей суммы
    if (count > 0) {
      resultStr.push(`${denominations[i].nominal}:${count}`);
      amount -= denominations[i].nominal * count;
    }
  }

  if (amount > 0) {
    return "Error: Not enough money";
  }

  return resultStr.join(",");
}

const input = "78;1:7,5:5,10:3,50:6,100:2";
console.log(atm(input)); // "1:3,5:1,10:2,50:1"
