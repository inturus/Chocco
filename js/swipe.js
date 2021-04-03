$(function() {
    $("wrapper").swipe( {
      //Generic swipe handler for all directions
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        console.log("You swiped " + direction );  
      }
    });
  
    //Set some options later
    $("#test").swipe( {fingers:2} );
  });