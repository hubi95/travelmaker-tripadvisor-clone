var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true
});

var rent_elem = document.querySelector('.rental-carousel');
var flkty = new Flickity(rent_elem, {
    // options
    cellAlign: 'left',
    contain: true
});

var explore_elem = document.querySelector('.explore-carousel');
var flkty = new Flickity(explore_elem, {
    // options
    cellAlign: 'left',
    contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    // options
});

var flkty = new Flickity('.rentals-carousel', {
    // options
});

var flkty = new Flickity('.explore-carousel', {
    // options
});