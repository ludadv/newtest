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
    let shoppingBox = $(".shopping-box")
    function showList (list) {
        shoppingBox.html("");
        list.forEach(function(item) {
            let listbuy = "<tr>" + "<td>" + item.name + "</td>" + "<td>" + item.quantity + "</td>"
                + "<td>" + item.status + "</td>" + "</tr>";
            shoppingBox.append(listbuy);
        });
    };

    shoppingList.sort(function(a, b) {
            var x = a.status.toLowerCase();
            var y = b.status.toLowerCase();
            if (x > y) {return -1;}
            if (x < y) {return 1;}
            return 0;
    });

    showList(shoppingList);

});
