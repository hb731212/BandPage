/* SIDE NAVIGATION BAR...*/
const navToggle = document.getElementById("nav-toggle");
const sideNav = document.getElementById("side-nav");
let p = document.querySelectorAll(".home-sidenav-div2 > a > p")

const sideNavProfile = document.querySelector(".home-sidenav-profile");
const sideNavProfileTmp = document.querySelector(".home-sidenav-profile-tmp");

const sideNavLinkSpan = document.querySelectorAll(".home-sidenav-div2 > a > span");


navToggle.addEventListener("click", function(){
    sideNav.classList.toggle("nav-width");
    sideNavProfile.classList.toggle("display-none");
    sideNavProfileTmp.classList.toggle("display-none");

    p.forEach(function(e){
        e.classList.toggle("display-none");
    })
    sideNavLinkSpan.forEach(function(e){
        e.classList.toggle("home-sidenav-div2-link-span");
        e.classList.toggle("home-sidenav-div2-link-span1");
    })
    
})



