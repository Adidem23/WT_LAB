$(document).ready(function() {
  $('h2').click(function() {
    $(this).next().slideToggle();
  });
  $('h5').click(function() {
    $(this).next().slideToggle();
    alert("You clicked on this Heading 5");
  }); 
  $('.card-text').click(function(){
    $(this).fadeOut(2000);                                                            
  })
});
