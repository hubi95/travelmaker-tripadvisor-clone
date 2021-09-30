var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    groupCells: true
});

var rentals_elem = document.querySelector('.rentals-carousel');
var flkty = new Flickity(rentals_elem, {
    // options
    cellAlign: 'left',
    contain: true,
    groupCells: true
});

var explore_elem = document.querySelector('.explore-carousel');
var flkty = new Flickity(explore_elem, {
    // options
    cellAlign: 'left',
    contain: true,
    groupCells: true
});

var destinations_elem = document.querySelector('.destinations-carousel');
var flkty = new Flickity(destinations_elem, {
    // options
    cellAlign: 'left',
    contain: true,
    groupCells: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {

});

var flkty = new Flickity('.rentals-carousel', {
    // options
});

var flkty = new Flickity('.explore-carousel', {
    // options
});

var flkty = new Flickity('.destinations-carousel', {
    // options
});