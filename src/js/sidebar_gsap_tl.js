
let menuOpen = document.querySelector("#menuOpen")
let menuClose = document.querySelector("#menuClose")

var tl = gsap.timeline({ pause: false });

tl.to("#navBox", {
    right: -10,
    duration: 0.3,
});

tl.from("#navBox h4", {
    x: 150,
    duration: 0.4,
    stagger: 0.2,
    opacity: 0,
});

tl.from("#menuClose", {
    duration: 0.04,
    opacity: 0
})


tl.pause()

// menu actions 
menuOpen.addEventListener('click', () => tl.play())
menuClose.addEventListener('click', () => tl.reverse())
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        tl.reverse();
    }
});

// headerbar color 
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        tl.reverse()
    } else {

        tl.pause()
    }
});