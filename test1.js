$(document).ready(function() {
    let shoppingList = [
        {
            name: 'cream',
            quantity: 2,
            status: 'buy',
        },
        {
            name: 'shampoo',
            quantity: 5,
            status: "don't buy",
        },
        {
            name: 'pomade',
            quantity: 3,
            status: "don't buy",
        },
        {
            name: 'foundation',
            quantity: 1,
            status: 'buy',
        },
    ];
    let shoppingBox = $(".shopping-box");
    function showList (list) {
        shoppingBox.html("");
        list.forEach(function(item) {
            let listbuy = "<tr>" + "<td>" + item.name + "</td>" + "<td>" + item.quantity + "</td>"
                + "<td>" + item.status + "</td>" + "</tr>";
            shoppingBox.append(listbuy);
        });
    };

    $('.btn-add-buy').on( "click", function() {
        appendBuy(shoppingList);
        $('.input').val('');
        showList(shoppingList);
    });
    function appendBuy (listBuy) {
        let name = $('.input-name').val();
        let quantity = +$('.input-quantity').val();
        let status = $('.input-status').val();
        let currentName = listBuy.find( currentValue => currentValue.name == name);
        if (quantity !== 0 && currentName) {
            currentName.quantity = currentName.quantity + quantity;
            return;
        }
        if (listBuy.name !== name) {
            let newBuy = {
                name: name,
                quantity: quantity,
                status: status,
            };
            listBuy.push(newBuy);
        }
        if (name == "" || quantity == "" || status == "") {
            return;
        }
    }

    shoppingList.sort(function(a, b) {
            var x = a.status.toLowerCase();
            var y = b.status.toLowerCase();
            if (x > y) {return -1;}
            if (x < y) {return 1;}
            return 0;
    });

    showList(shoppingList);


let buyUser1 = new Card('cream', 2, 'buy');
let buyUser2 = new Card('shampoo', 6, 'buy');
let buyUser3 = new Card('pomade', 8, "don't buy");

});
