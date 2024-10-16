$(document).ready(function () {
  // Toggle the side navigation when hamburger is clicked
  $('.hamburger').click(function () {
    $('.side-nav').toggleClass('active'); // Toggle side navigation visibility
    $('body').toggleClass('no-scroll'); // Toggle body scroll lock
  });

  // Close the side navigation when clicking outside of it
  $(document).click(function (e) {
    if (!$(e.target).closest('.side-nav, .hamburger').length) {
      $('.side-nav').removeClass('active'); // Hide side navigation
      $('body').removeClass('no-scroll'); // Allow body scrolling again
    }
  });
});
