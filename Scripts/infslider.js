// Init vars.
var timer = 4000;
var i = 0;
var $lis = $('#sliderproducts > li');
var max = $lis.length;

// Init classes.
for (var j = 0; j < 4; j++) {
    $lis[j].classList.add('active');
}
for (var j = 0; j < max; j++) {
    $lis[j].classList.add('li' + (j % 4));
}

// Run timer.
setInterval(function () {

    // Hide everything
    $lis.removeClass('active');

    // Show the next four.
    for (var j = i; j < i + 4; j++) {
        $lis[j].classList.add('active');
    }

    // Advance iterator.
    i = (i < max - 4) ? i + 4 : 0

}, timer);
