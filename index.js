document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        var navbar = document.querySelector("nav");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.remove("navbar-transparente");
        } else {
            navbar.classList.add("navbar-transparente");
        }
    }
});
