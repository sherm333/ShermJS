"use strict";

// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)

// const fName = prompt("Enter name: ");
// const sName = prompt("Enter second name: ");
// const Age = prompt("Enter age: ");

// userData();

// function userData() {
//   return console.log(`Привет ${fName} ${sName} с возрастом ${Age} лет`);
// }

// Создайте функцию которая возводит переданное число в квадрат

// const number = Number.parseInt(prompt("Input:"));
// let numUp = (number) => number ** number;
// console.log(numUp(number));

// function numberDouble(number) {
//   return (number = number ** number);
// }

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// const number = Number.parseInt(prompt("Input:"));
// numSign(number);

// function numSign() {
//   if (number > 0) {
//     console.log("+++");
//   } else {
//     console.log("---");
//   }
// }

// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// const summ = (a, b, c) => {
//   return a + b + c;
// };

// console.log(summ(10, 2, 33));

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// const summ = (param1, param2, param3) => {
//   return param1 + param2 + param3;
// };

// console.log(summ(param1, param2, param3));

// function func(num = 5) {
//   console.log(num * num);
// }

// func(2);
// func(3);
// func();

// function func(num) {
//   return Math.sqrt(num).toFixed(2) % 10;
// }

// console.log(func(3));
// console.log(func(4));
// console.log(func(3) + func(4));

// function min(num1, num2) {
//   return Math.min(num1, num2);
// }

// console.log(min(3, 6));
// console.log(min(9, 6));

// function dayOftheWeek(num) {
//   switch (num) {
//     case 1:
//       console.log("Понедельник");
//       break;
//     case 2:
//       console.log("Вторник");
//       break;
//     case 3:
//       console.log("Среда");
//       break;
//     case 4:
//       console.log("Четверг");
//       break;
//     case 5:
//       console.log("Пятница");
//       break;
//     case 6:
//       console.log("Суббота");
//       break;
//     case 7:
//       console.log("Воскресенье");
//       break;
//     default:
//       console.log("Нет такого дня недели");
//       break;
//   }
// }

//   if (num < 1 || num > 7) {
//     return console.log("Wrong number");
//   }

//   if (num === 1) {
//     console.log("Monday");
//   } else if (num === 2) {
//     console.log("Tuesday");
//   } else if (num === 3) {
//     console.log("Wednesday");
//   } else if (num === 4) {
//     console.log("Thursday");
//   } else if (num === 5) {
//     console.log("Friday");
//   } else if (num === 6) {
//     console.log("Saturday");y
//   } else {
//     console.log("Sunday");
//   }
// }

// console.log(dayOftheWeek(1));

// function a1() {
//   console.log("ggg");
// }

// a1();

// const date = new Date();
// const time = new Date().getHours();

// const userName = prompt("Введите имя: ");

// dayTime(userName, time);

// function dayTime(userName, time) {
//   if (time > 6 && time < 12) {
//     console.log(`Доброе утро ${userName}`);
//   } else if (time > 12 && time < 18) {
//     console.log(`Добрый день ${userName}`);
//   } else if (time > 18 && time < 24) {
//     console.log(`Добрый вечер ${userName}`);
//   } else {
//     console.log(`Доброй ночи ${userName}`);
//   }
//   console.log(`Сейчас ${date.toLocaleTimeString()}`);
// }

// Задание 1:
// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
// function helloUser(name, lastName, age) { // параметры
//     console.log(`Привет, ${name} ${lastName}. Вы уже большой, вам ${age}`);
// }
// helloUser("Сергей", "Маврин", 36); // аргументы

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.
// const square = (num) => num ** 2;
// const square = function (num) {
//     return num ** 2;
// };
// console.log(square(4));

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.
// const func = (num) => {
//     if (!Number.isFinite(num) || num === 0) {
//         return;
//     }
//     // if (num > 0) {
//     //     console.log("+++");
//     // } else {
//     //     console.log("---");
//     // }
//     num > 0 ? console.log("+++") : console.log("---");
// };
// func(Infinity);

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.
// const rand = (num) => Math.floor(Math.random() * num);
// const x = rand(100);
// const y = rand(100);
// const z = rand(100);

// console.log(sum(x, y, z));

// function sum(a, b, c) {
//     console.log(a + b + c);
// }

// 3. Дан код:

// ```
// func(2); // 4
// func(3); // 9
// func(); // 25

// function func(num = 5) {
//     console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.

// Задание 3:
// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.
// const sqrt = (num) => Math.sqrt(num); // 2.6457513110645907
// const sqrt = (num) => num ** 0.5; // 2.6457513110645907
// console.log(sqrt(3) + sqrt(4));

// function fl(a, b, ...fq) {
//     // console.log(arguments);
//     console.log(fq);
// }
// fl(4, 5, "g", true);

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// const min = (a, b) => Math.min(a, b);
// console.log(min(4, 3.5));

// Задание 4:
// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.
// function getWeekleDay(num) {
//     switch (num) {
//         case 1:
//             return "понедельник";
//         case 2:
//             return "вторник";
//         case 3:
//             return "среда";
//         case 4:
//             return "четверг";
//         case 5:
//             return "пятница";
//         case 6:
//             return "суббота";
//         default:
//             return "воскресенье";
//     }
// }
// console.log(getWeekleDay(5));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// function getGoodnight(params) {
//     // const date = new Date();
//     const time = new Date().getHours();
//     if (time < 6) {
//         console.log(`Доброе ночи  ${params}`);
//     } else if (time < 12) {
//         console.log(`Добрый утро  ${params}`);
//     } else if (time < 18) {
//         console.log(`Добрый день  ${params}`);
//     } else {
//         console.log(`Доброй вечер ${params}`);
//     }
// }
// getGoodnight("Сергей");

const userNumber = prompt("Введите сколько у вас велосипедов");
function t(num, one, two, five) {
  const lastTwoDigits = Math.abs(num % 100);
  if (lastTwoDigits >= 5 && lastTwoDigits <= 20) {
    return five;
  }
  const lastDigit = lastTwoDigits % 10;
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit < 5) {
    return two;
  }
  return five;
}
console.log(
  `у меня есть ${userNumber} ${t(
    userNumber,
    "велосипед",
    "велосипеда",
    "велосипедов"
  )}`
);
// console.log(`у меня есть 2 ${t(2, "велосипед", "велосипеда", "велосипедов")}`);
// console.log(
//     `у меня есть 121 ${t(121, "велосипед", "велосипеда", "велосипедов")}`
// );