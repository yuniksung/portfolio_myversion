window.addEventListener("scroll", function() {
    let menuArea = document.getElementById('nav-sticky');

    if(window.pageYOffset > 0) {
        menuArea.classList.add("cus-nav");
        menuArea.classList.remove("cus-menu");
    } else {
        menuArea.classList.remove("cus-nav");
        menuArea.classList.add("cus-menu");
    }
})