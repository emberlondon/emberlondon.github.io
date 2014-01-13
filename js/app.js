$(function () {
  $('.accordion').each(function () {
    var $accordion = $(this),
        $headers   = $accordion.find('.accordion-header'),
        $contents  = $accordion.find('.accordion-content'),
        $icons     = $accordion.find('.accordion-icon');

    $contents.hide();
    $icons.removeClass('fa-minus-circle').addClass('fa-plus-circle');

    $headers.click(function (event) {
      event.preventDefault();

      var $header = $(this),
          $content = $header.next('.accordion-content')
          $icon = $header.find('.accordion-icon').first();

      $content.slideToggle();
      $icon.toggleClass('fa-minus-circle fa-plus-circle');
    });
  });
});
