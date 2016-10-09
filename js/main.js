  $(document).ready(function() {
  
  $(".animsition").animsition({
    inClass: 'fade-in-left-lg',
    outClass: 'fade-out-right-lg', 
    linkElement: ".animsition-link", 
    inDuration: 500,
    outDuration: 500,  
  });

  $(".header").sticky();

  });