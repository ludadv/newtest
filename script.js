
$(document).ready(function() {

    // $('button').on('click', function() {
    //     const a = 0.8256;
    //     let b = $('.input1').val();
    //     let c = a * b;
    //     $('.input2').val(c.toFixed(2));
    //
    // });

    // $('button').on('click', function() {
    //     let a = 820;
    //     let b = $('.input1').val();
    //     let c = (b * 1000)/820;
    //     $('.input2').val(c);
    // });

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

    // $('button').on('click', function () {
    //     let deposit = $('.input1').val();
    //     let depositInterest = ((deposit / 12) * 0.05) * 2
    //     $('.input2').val(depositInterest);
    //
    // })

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

    // let number1 = +prompt("Введите первое число", "");
    // let number2 = +prompt("Введите второе число", "");
    // let i = number1;
    // let result = 0;
    // for (; i < number2; i++) {
    //     result+=i;
    // }
    // console.log(result);

    // let number = prompt("Введите число", "");
    // console.log(number.length);

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
    //
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

    // function factorial (number) {
    //     let factorialNumber = 1;
    //     for (let i = 1; i <= number; i++) {
    //     factorialNumber = factorialNumber * i;
    //     }
    //     console.log(factorialNumber);
    // }
    //
    // factorial (7);
    /*----------------------------------------------------------------*/
    let car1 = {
        manufacturer: 'Mazda',
        model: 'Mazda6',
        year: 2002,
        speed: 28
    };
    let car2 = {
        manufacturer: 'Volvo',
        model: 'Volvo5',
        year: 2006,
        speed: 30
    }
    let car3 = {
        manufacturer: 'BMW',
        model: 'BMW3',
        year: 2013,
        speed: 36
    };


    function showInfoCar (carInfo) {
        console.log("производитель" + ":" + " " + carInfo.manufacturer + " " +
            "модель" + ":" + " " + carInfo.model  + " " +
            "год выпуска" + ": " +  carInfo.year + ":"  + " " + "скорость" + ":"  + " "+ carInfo.speed);
    }
    // showInfoCar(car1);
    // showInfoCar(car2);
    // showInfoCar(car3);


    let arrayCar = [
        {
            manufacturer: 'Mazda',
            model: 'Mazda6',
            year: 2002,
            speed: 28
        },
        {
            manufacturer: 'Volvo',
            model: 'Volvo5',
            year: 2006,
            speed: 30
        },
        {
            manufacturer: 'BMW',
            model: 'BMW3',
            year: 2013,
            speed: 36
        }
    ]
    function showAllCar (carsArray) {
        carsArray.forEach(function(carItem) {
            showInfoCar(carItem);
        });
    }
    showAllCar (arrayCar);
    /*---------------------------------------------------------*/
    function timing (distance, speed) {
        let time = distance / speed;
        if (time > 4) {
            let relax = Math.trunc (time / 4);
            time = time + relax;
            console.log(time.toFixed(2));
        } else {
            console.log(time);
        }
    }

    timing (85, 20 );


});


