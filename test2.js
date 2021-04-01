/* 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту).
 */

$(document).ready(function() {
    let audienceList = [
        {
            name: 'a',
            quantity: 10,
            faculty: 'economy',
        },
        {
            name: 'c',
            quantity: 26,
            faculty: 'economy',
        },
        {
            name: 'k',
            quantity: 23,
            faculty: 'journalism',
        },
        {
            name: 'c',
            quantity: 20,
            faculty: 'economy',
        },
        {
            name: 'd',
            quantity: 25,
            faculty: 'journalism',
        },
        {
            name: 'd',
            quantity: 28,
            faculty: 'journalism',
        },
    ];
    let group = {
        name: 'd',
        quantity: 19,
        faculty: 'economy',
    }

    function outAudienceForGroup (listArray, itemCompare) {
        let filtered = listArray.filter((item) => {
                if (item.name == itemCompare.name && item.quantity >= itemCompare.quantity && item.faculty == itemCompare.faculty) {
                    return true;
                }
        })
        console.log(filtered);
    }

    function outAudienceList(list) {
        console.log(list);
    }

    function outFaculty(list) {
        let item = list.filter( currentValue => currentValue.faculty == 'journalism');
        console.log(item);
    }


    // outAudienceList(audienceList);
    // outFaculty(audienceList);
    outAudienceForGroup(audienceList, group);
});
