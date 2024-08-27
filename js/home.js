// gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
tl.fromTo("#orangeimg", 
    { y:-window.innerHeight},
    { 
        y: window.innerHeight/2,  
        duration: 1,
        ease: "power2.in" 
    }
)
.to("#orangeimg", 
    { 
        y: -window.innerHeight/7, 
        rotation: 360, 
        duration: 0.65,
        ease:"power.in"
    })
.fromTo("#orangeimg", 
    {y: -window.innerHeight/7},
    { 
        y: 0, 
        duration: 0.5,
        ease:"power2.in"
    });
const img = document.getElementById('orangeimg');
img.addEventListener('click', () => {
    let tli = gsap.timeline();
tli.set(img, { rotation: 0 });

tli.to(img, {
    y: -window.innerHeight/10, 
    duration: 0.5,
    rotation: 360,
    ease: "power2.out"
})
.to(img, {
    y: 0, 
    duration: 0.4,
    ease: "power2.in"
});
});

function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    let paths = document.querySelectorAll("path");
    let mode=repeat?'infinite':'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}
setTextAnimation(0.1,3,2,'ease-out','#000000',false);
// gsap.from(".about", {
// scrollTrigger: {
//     // trigger: ".about",
//     scrub: true,
//     pin: true,
//     start: "top top",
//     end: "+=100%"
// },
// scaleX: 0, 
// transformOrigin: "left center", 
// ease: "none"
// });

document.getElementById("buynow").onclick = function () {
    location.href = "./juices.html";
};

document.getElementById("servicebutton").onclick = function () {
    location.href = "./services.html";
};
document.getElementById("myteambutton").onclick = function () {
    location.href = "./team.html";
};

