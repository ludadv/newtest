
$(document).ready(function() {
//Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
    // $('button').on('click', function() {
    //     const a = 0.8256;
    //     let b = $('.input1').val();
    //     let c = a * b;
    //     $('.input2').val(c.toFixed(2));
    //
    // });

//Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку
    // $('button').on('click', function() {
    //     let a = 820;
    //     let b = $('.input1').val();
    //     let c = (b * 1000)/820;
    //     $('.input2').val(c);
    // });

//Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
    // $('button').on('click', function() {
    //     let cash = $('.input1').val();
    //     let price = $('.input2').val();
    //     let quantity = Math.trunc(cash / price);
    //     $('.input3').val(quantity);
    //     if (cash % price !==  0) {
    //         let shortСhange = cash - (price * quantity);
    //         $('.input4').val(shortСhange);
    //     }
    // });

//Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
    // $('button').on('click', function () {
    //     let deposit = $('.input1').val();
    //     let depositInterest = ((deposit / 12) * 0.05) * 2
    //     $('.input2').val(depositInterest);
    //
    // })

//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
    // let age = prompt("Сколько вам лет", "");
    // if (age >= 0 && age <= 2) {
    //     console.log("ребенок");
    // } else if (age >= 12 && age <= 18) {
    //     console.log("подросток");
    // } else if (age >= 18 && age <= 60) {
    //     console.log("взрослый");
    // } else if (age > 60) {
    //     console.log("пенсионер");
    // }

//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
//     let number1 = +prompt("Введите первое число", "");
//     let number2 = +prompt("Введите второе число", "");
//     let i = number1;
//     let result = 0;
//     for (; i < number2; i++) {
//         result+=i;
//     }
//     console.log(result);

//Определить количество цифр в введенном числе.
    // let number = prompt("Введите число", "");
    // console.log(number.length);

//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
    // let sumPositive = 0;
    // let sumNegative = 0;
    // let sumNull = 0;
    // for ( let i = 0; i < 10; i++) {
    //     let number = +prompt("Введите число", "");
    //     if (number > 0) {
    //         sumPositive += 1;
    //     } else if (number < 0) {
    //         sumNegative += 1;
    //     } else if (number == 0) {
    //         sumNull += 1;
    //     }
    // }
    // console.log("положительных" + ":" + sumPositive + " "  + "отрицательных" + ":" + sumNegative + " " + "нулей" + ":" + sumNull);

//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
    // function getNumber (number1, number2) {
    //     if (number1 < number2) {
    //         return -1;
    //     } else if (number1 > number2) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // }
    //
    // getNumber(2, 5);

//Вывести объекты id которого соответсвуют значению в массиве
    // let arrayID = [0, 1, 2, 3, 4, 5, 6, 7];
    // let arrayUser = [
    //     {
    //         id: 11,
    //         name: 'Ivan'
    //     },
    //     {
    //         id: 24,
    //         name: 'Igor'
    //     },
    //     {
    //         id: 6,
    //         name: 'Lida'
    //     },
    //     {
    //         id: 4,
    //         name: 'Rita'
    //     },
    //     {
    //         id: 5,
    //         name: 'Sasha'
    //     }
    // ];
    // console.log(arrayID.includes(8));

    // for (let key in arrayUser) {
    //     if ((arrayID.includes(arrayUser[key].id))) {
    //     console.log(arrayUser[key]);
    //     }
    // }

    // arrayUser.filter(function(itemId) {
    //     if ((arrayID.includes(itemId.id))) {
    //         console.log(itemId);
    //     }
    // })

//Написать функцию, которая вычисляет факториал переданного ей числа.
    // function factorial (number) {
    //     let factorialNumber = 1;
    //     for (let i = 1; i <= number; i++) {
    //     factorialNumber = factorialNumber * i;
    //     }
    //     console.log(factorialNumber);
    // }
    //
    // factorial (7);

// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
//     let arrayCar = [
//         {
//             manufacturer: 'Mazda',
//             model: 'Mazda6',
//             year: 2002,
//             speed: 28
//         },
//         {
//             manufacturer: 'Volvo',
//             model: 'Volvo5',
//             year: 2006,
//             speed: 30
//         },
//         {
//             manufacturer: 'BMW',
//             model: 'BMW3',
//             year: 2013,
//             speed: 36
//         }
//     ]
//     function showInfoCar (carInfo) {
//         console.log("производитель" + ":" + " " + carInfo.manufacturer + " " +
//             "модель" + ":" + " " + carInfo.model  + " " +
//             "год выпуска" + ": " +  carInfo.year + ":"  + " " + "скорость" + ":"  + " "+ carInfo.speed);
//
//     }
//     function showAllCar (carsArray) {
//         carsArray.forEach(function(carItem) {
//             showInfoCar(carItem);
//         });
//     }
//     showAllCar (arrayCar);
//
//     function timing (distance, speed) {
//         let time = distance / speed;
//         if (time > 4) {
//             let relax = Math.trunc (time / 4);
//             time = time + relax;
//             console.log(time.toFixed(2));
//         } else {
//             console.log(time);
//         }
//     }
//
//     timing (85, 20 );

// //Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
// // Функция сложения 2-х объектов-дробей;
// // Функция вычитания 2-х объектов-дробей;
// // Функция умножения 2-х объектов-дробей;
// // Функция деления 2-х объектов-дробей;
// // Функция сокращения объекта-дроби.
//     let fraction = {
//         numerator: 5,
//         denominator: 20
//     }
//     console.log(fraction);

//Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
//

});
