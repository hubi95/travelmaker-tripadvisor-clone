const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// show navigation search input

const searchAppear = document.querySelector('.header-search-wrapper');

const changeHeight = function () {

    let searchHeight = document.querySelector('.search-bubble').getBoundingClientRect().top;

    if ((searchHeight < 0) && (window.innerWidth > 750)) {
        searchAppear.classList.add('active');
    }
    else {
        searchAppear.classList.remove('active');
    }
};

window.addEventListener('scroll', changeHeight)
window.addEventListener('resize', changeHeight);