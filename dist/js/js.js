$('.rec_button').click(function() {
    $('.overlay').fadeIn();
    $('.overlay').addClass('disabled');
});

$('.appeal_btn').click(function() {
    $('.overlay').fadeIn();
    $('.overlay').addClass('disabled');
});

$(document).mouseup(function(e) {
    var popup = $('.popup_form');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.overlay').fadeOut();
    }
});

$('.next-form').click(function() {
    $('.popup_form').submit(function() {
        if ( $( 'select' ).val() !== "Вид спорта") {
            $('.next_modal').fadeIn();
            $('.next_modal').addClass('disabled');
            $('.overlay').fadeOut();
            return false;
        }
    });
});

$(document).mouseup(function(e) {
    var popup = $('.next_form');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.next_modal').fadeOut();
    }
});

$('.close-form').click(function() {
    $('.last_modal').fadeIn();
    $('.last_modal').addClass('disabled');
});


$(document).mouseup(function(e) {
    var popup = $('.last_form');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.last_modal').fadeOut();
    }
});


// $('.close-form').click(function() {
//     $('.next_form').submit(function() {
//         if ( $( 'input' ).val() !== " ") {
//             $('.last_form').fadeIn();
//             $('.last_form').addClass('disabled');
//             $('.next_modal').fadeOut();
//             return false;
//         }
//     });
// });


// $('.close-form').click(function() {
//     $('.next_form').submit(function() {
//         if ( $('input:checked','form').val() !== " ") {
//             $('.last_form').fadeIn();
//             $('.last_form').addClass('disabled');
//             $('.next_modal').fadeOut();
//             return false;
//         }
//     });
// });