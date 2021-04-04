$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $("navbar").addClass("sticky")
        }
    })
    $(".menu-btn").click(function () {
        $(".link .menu").toggleClass("active")
        $(".menu-btn i").toggleClass("active")
    })
})

//typed letter changes
var typed = new Typed(".typing", {
    strings: ["Freelancer", "Graphic Desginer", "Web Designer", "Web Developer",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    
})