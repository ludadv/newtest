$(document).ready(function() {

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {
            $.ajax({
                url: "data.json",
            }).done(function(data) {
                $.each( data, function( key, value ) {
                    $('.user').append('<tr>' + '<td>' + value.username +
                        '</td>' + '<td>' + value.userAge + '</td>' + '</tr>')
                });
            });
        }
    })

});
