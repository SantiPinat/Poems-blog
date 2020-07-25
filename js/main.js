/*$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, a[href='#home']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  });
  window.sr = ScrollReveal();

  sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
  });

  sr.reveal('carousel', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
  });

  sr.reveal('.omgfondo', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
  });

  sr.reveal('.poesia-section', {
    duration: 2000,
    delay: 1000, 
    origin: 'bottom'
  });

  sr.reveal('#contacto div',{
    duration: 2000,
    origin: 'left',
    distance: '300px',

  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  */