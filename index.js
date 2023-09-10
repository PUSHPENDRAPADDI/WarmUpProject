var rect = document.querySelector('#center');

rect.addEventListener("mousemove", function (details) {
    let rectangleLocation = rect.getBoundingClientRect();
    var insideRectval = details.clientX - rectangleLocation.left;

    if (insideRectval < rectangleLocation.width / 2) {
        var redColor = gsap.utils.mapRange(
            0,
            rectangleLocation.width / 2,
            255,
            0,
            insideRectval
        );
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0,0)`,
            ease: Power4,
        })
    } else {
        var blueColor = gsap.utils.mapRange(
            rectangleLocation.width / 2,
            rectangleLocation.width,
            0,
            255,
            insideRectval
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0,0, ${blueColor})`,
            ease: Power4,
        })
    }
})

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: 'white'
    })
})


window.addEventListener('mousemove', function (details) {
    var rect = document.querySelector('#rect')
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
        details.clientX)
    gsap.to('#rect', {
        left: xval,
        ease: Power3
    });
});