const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


// queryselector all returns nodelist of all elemenets
document.querySelectorAll(".elem").forEach(function (elem) {

  let rotate = 0;
  let diffrotate = 0;

  elem.addEventListener("mouseleave", function (dets) {   // when mouse leave 
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: .5,
  
    });
  });


  elem.addEventListener("mousemove", function (dets) {   // // performs mousemove on element
    // var diff = dets.clientY - elem.getBoundingClientRect().top;  // get element from top
    diffrotate = dets.clientX - rotate;
    rotate = dets.clientX
    
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-10,10,diffrotate*0.5),

    });
  });
});

