let money = +prompt("Ваш баланс: ");
while (money > 0.1) {
  let bet = prompt(`Ваш баланс: ${money.toFixed(2)}
Сколько поставите?
Выйти? - пишите exit`);

  if (bet == "exit") {
    alert(`Ваш баланс ${money.toFixed(2)}
  Хорошего дня!`);
    break;
  }
  bet = +bet;

  if (bet > money || bet <= 0 || isNaN(bet)) {
    alert("Неверная ставка. Попробуйте еще раз.");
    continue;
  }

  let color = +prompt("1. Красная\n2. Черная");
  if (color !== 1 && color !== 2) {
    alert("Только 1 или 2. Попробуйте еще раз.");
    continue;
  }
  let randomNumber = Math.floor(Math.random() * 2) + 1;

  if (color == randomNumber) {
    bet *= 1.8;
    money += bet;
    alert(`Победа! Ваш выигрышь - ${bet.toFixed(2)}
Баланс: ${money.toFixed(2)} `);
  } else {
    money -= bet;
    alert(`Проиграл.
Баланс: ${money.toFixed(2)} `);
  }
}
