// wow.js
new WOW().init();

//drawer menu
jQuery('.js-drawer-icon').on('click', function (e) {
  e.preventDefault();
  jQuery('.js-drawer-icon').toggleClass('is-open');
  jQuery('.js-nav').toggleClass('is-open');
  return false;
})

//drawer menu items
jQuery('.js-nav-link').on('click', function (e) {
  jQuery('.js-drawer-icon').removeClass('is-open');
  jQuery('.js-nav').removeClass('is-open');
})

//scroll
jQuery('a[href^="#"]').on('click', function () {
  let header = jQuery('.l-header').outerHeight();
  let id = jQuery(this).attr('href');
  let target = jQuery(id === "#" ? "html" : id)
  let position = jQuery(target).offset().top

  jQuery('html, body').animate({
    scrollTop: position - header - 50,
  }, 300)
})

//to-top button
jQuery(window).on('scroll', function () {
  let BtnShowScrollAmount = 100;
  let currentScrollAmount = jQuery(this).scrollTop()

  if (BtnShowScrollAmount < currentScrollAmount) {
    jQuery('.js-to-top-btn').addClass('is-show');
    jQuery('.js-to-top-btn').fadeIn(300)
  } else {
    jQuery('.js-to-top-btn').removeClass('is-show');
  }
})

