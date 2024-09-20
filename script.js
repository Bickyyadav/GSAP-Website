var t1 = gsap.timeline()

t1.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.1,
    duration: 0.7,
    stagger: 0.5  
})

t1.from("#main h1",{
    x: -500,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: 1
})

t1.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration: 0.5,
    stagger:0.7

})