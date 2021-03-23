$(document).ready(function() {
    
// flipcard fuction was taken from https://codepen.io/bycreator/pen/RNQmZK

$(".card").click(function(){
    $(this).toggleClass('flipped');
    });

$("#button-card-3").click(function(){
   $("#par-3").slideToggle(); 
});

});