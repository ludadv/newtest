$(document).ready(function() {
    let productList = [
        new Card('cream', 2, 'buy'),
        new Card('shampoo', 5, "don't buy"),
        new Card('pomade', 3, "don't buy"),
        new Card('pomade', 1, 'buy'),
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
        appendBuy(productList);
        $('.input').val('');
        showList(productList);
    });
    function appendBuy (listBuy) {
        let name = $('.input-name').val();
        let quantity = +$('.input-quantity').val();
        let status = $('.input-status').val();
        if (!name || !quantity || !status) {
            return;
        }
        let currentName = listBuy.find( currentValue => currentValue.name == name);
        if (quantity !== 0 && currentName) {
            currentName.quantity = currentName.quantity + quantity;
            return;
        }
        let newBuy = {
            name: name,
            quantity: quantity,
            status: status,
        };
        listBuy.push(newBuy);
    }

    productList.sort(function(a, b) {
        var x = a.status.toLowerCase();
        var y = b.status.toLowerCase();
        if (x > y) {return -1;}
        if (x < y) {return 1;}
        return 0;
    });

    showList(productList);
});

