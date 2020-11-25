window.addEventListener("scroll", function() {
    let menuArea = document.getElementById('nav-sticky');

    if(window.pageYOffset > 0) {
        menuArea.classList.add("cus-nav");
        
    } else {
        menuArea.classList.remove("cus-nav");
        menuArea.classList.add("cus-menu");
    }
})