$(document).on('click',".dropbtn",function(){
    $(".dropdown-content").not($(this).next(".dropdown-content")).removeClass("show");
    $(this).next(".dropdown-content").toggleClass("show");  
  });
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      $(".dropdown-content").removeClass("show");
    }
  }
  
  $(".dropdown-content").on("contextmenu", function(){
     $(this).addClass("show");
  });

