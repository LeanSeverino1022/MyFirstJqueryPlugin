  $(document).ready(function() {
  
  $(".animsition").animsition({
    inClass: 'fade-in-left-lg',
    outClass: 'fade-out-right-lg', 
    linkElement: ".animsition-link", 
    inDuration: 500,
    outDuration: 500,  
  });

  $(".header").sticky({
    responsiveWidth: true,
    getWidthFrom: ".container"
  });

  $(".grid-full h5").sticky({ topSpacing: 60  });

    //sample use of plugin events
    $('.header').on('sticky-start', function() {
      //check work.html h1 element with class 'description'
       $("h1.description").html("Changed");  
         $(".header").css({"height" : "60px" });
      });

  $('.header').on('sticky-end', function() {
      $("h1.description").html("bla is what we do");  
      console.log("abaw");

    });

  $('.grid-full h5').on('sticky-start', function () {
    $(this).append('<a href="mailto:someone@yoursite.com" target="_top" class="email-text"> Send Mail</a>');
  });

  $('.grid-full h5').on('sticky-end', function() {
      $(".email-text").remove();
  });


  });