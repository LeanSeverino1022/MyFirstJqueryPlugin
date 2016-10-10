  $(document).ready(function() {
  
  $(".animsition").animsition({
    inClass: 'fade-in-left-lg',
    outClass: 'fade-out-right-lg', 
    linkElement: ".animsition-link", 
    inDuration: 500,
    outDuration: 500,  
  });

  $(".header").sticky();

    //sample use of plugin events
    $('.header').on('sticky-start', function() {
      //check work.html h1 element with class 'description'
       $("h1.description").html("Changed");    
      });

  $('.header').on('sticky-end', function() {
      $("h1.description").html("bla bla is what we do");  
      console.log("abaw");  
    });


  });