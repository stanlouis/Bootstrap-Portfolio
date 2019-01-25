$(document).ready(function() {

  //smooth scroll
  $('.nav-item a').click(function(link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        3000
      );
    $('.navbar-toggler').toggleClass('change');
    $('#navbar7').collapse('hide');
  });
});
