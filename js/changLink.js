//$('body').hide().fadeIn(1000, function(){alert("done")}); // This is a callback function
//console.log("I am here");
/* How does a jquery event work. Click() is the event listener*/



$('h1').click(function(){
    $(this).text("Hide the image");
    $('img').hide();
    $('body').children('p').slideToggle();

}); // Function in this case is a no-name function


// Plat with JQuery .each function

// Update the image link

$('img').each(function() {
    var path = $(this).attr('src');
    var newpath = "img/" + path;
    $(this).attr("src",newpath);
    console.log(newpath);
});
$('href').each(function() {

  $(this).text("google.com");
});





// Update the anchor link ---- all links go to google.com

