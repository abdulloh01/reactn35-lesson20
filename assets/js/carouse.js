$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                1260:{
                    items:2,
                    nav:true,
                    loop:false
                }
            }
        }
    );
  });


//   navbar shrink

window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }