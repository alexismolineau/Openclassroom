$('.bloc').on('mouseover',(function() {
    $(this).addClass('couleur');
}));

$('.bloc').on('mouseout',(function() {
    $(this).removeClass('couleur');
}));

$('#profile').on('click', function() {
  alert("J'suis plutôt BG");
});
