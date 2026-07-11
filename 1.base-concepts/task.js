"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;
  if (a === 0) {
    console.log("Уравнение не квадратное 'a' не может быть равна '0'");
  } else if (d < 0) {
  } else if (d === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  } else {
    const sqrtd = Math.sqrt(d);
    const x1 = (-b + sqrtd) / (2 * a);
    const x2 = (-b - sqrtd) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}

console.log(solveEquation(1, 4, 1));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const p = percent / 100 / 12;
  const s = amount - contribution;
  if (s <= 0) return 0;

  const monthlyPayment = s * (p + p / ((1 + p) ** countMonths - 1));
  const totalPayment = monthlyPayment * countMonths;

  return Math.round(totalPayment * 100) / 100;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
