
$(document).ready(function() {
    let users = [
        {
            id: 1,
            name: 'Ivan',
            age: 20,
        },
        {
            id: 2,
            name: 'Lena',
            age: 22,
        },
        {
            id: 3,
            name: 'Igor',
            age: 24,
        },
        {
            id: 4,
            name: 'Vera',
            age: 28,
        },
        {
            id: 5,
            name: 'Vlad',
            age: 29,
        },
    ];
    let containerTable = $('.container');
    function showUsers (userArray) {
        let deleteElement = '&#9746';
        containerTable.html("");
        userArray.forEach(function(item, i) {
            let newstring = "<tr>" + "<td>" + userArray[i].id + "</td>" + "<td>" + userArray[i].name + "</td>"
                + "<td>" + userArray[i].age + "</td>" + "<td class='close'>" + deleteElement + "</td>" + "</tr>";
            containerTable.append(newstring);
        });
    }
    containerTable.on( "click", '.close', function() {
        $(this).parent().remove();
    });

    $('.box').hide();
    $('.btn-add').on( "click", function() {
        $('.box').show();
    });

    $('.button').on( "click", function() {
        let input1 = $('.input1').val();
        let input2 = $('.input2').val();
        let input3 = $('.input3').val();
        if (input1 == "" || input2 == "" || input3 == "") {
            return false;
        }
        let object = {
            id: input1,
            name: input2,
            age: input3,
        };
        users.push(object);
        showUsers(users);
        $('.input').val('');
    });

    showUsers(users);
});
