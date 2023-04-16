jQuery(document).ready(function(){


jQuery('[data-toggle="tooltip"]').tooltip()

jQuery('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = jQuery(this.hash);
  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    jQuery('html, body').animate({
      scrollTop: target.offset().top
    }, 900, 'swing');
    return false;
  }
}
});


// Fix active menu class for our work - single and archive
if (jQuery('body').hasClass('single-our-work')) {  
  jQuery("li.menu-item-1100").removeClass("current_page_parent");  
  jQuery("li.menu-item-1154").addClass("current_page_parent"); 
}
if (jQuery('body').hasClass('post-type-archive-our-work')) {  
  jQuery("li.menu-item-1100").removeClass("current_page_parent");  
}


// Mobile Menu
jQuery('body').prepend('<div class="opacity-mobile"></div>');
jQuery('nav.main-navigation').prepend('<div class="close-button hidden-lg hidden-md"><i class="fa fa-times" aria-hidden="true"></i></div>');
jQuery('nav.main-navigation ul li').has('ul').prepend('<span class="nav-click hidden-md hidden-lg"><i class="fa fa-chevron-down arrow-nav" aria-hidden="true"></i></span>');
 
jQuery('.nav-click').click(function(){
    jQuery(this).siblings('ul').slideToggle();
    jQuery(this).children('.arrow-nav').toggleClass('nav-rotate');
})

jQuery('.open-nav-mobile, .opacity-mobile, .close-button').click(function(){
  if(jQuery(this).hasClass('opacity-mobile') && jQuery(this).hasClass('on')) {
    jQuery('nav.main-navigation').removeClass('slide-menu');
    jQuery(this).removeClass('on');
    jQuery('body').removeClass('fixed-body');
  } else if(jQuery(this).hasClass('open-nav-mobile')) {
    jQuery('.opacity-mobile').toggleClass('on');
    jQuery('body').toggleClass('fixed-body');
    jQuery('nav.main-navigation').toggleClass('slide-menu');
  }
  else if(jQuery(this).hasClass('close-button')) {
    jQuery('.opacity-mobile').removeClass('on');
    jQuery('body').removeClass('fixed-body');
    jQuery('nav.main-navigation').removeClass('slide-menu');
  }
})





// projectInMind button 
jQuery.fn.scrollBottom = function() { 
  return jQuery(document).height() - this.scrollTop() - this.height(); 
};
jQuery(window).scroll(function () {
  if (jQuery(this).scrollBottom() > 200) {
    jQuery('.projectInMind').addClass('inView');
  } else {
     jQuery('.projectInMind').removeClass('inView');
  }
});
// Clicking a anchor with a class of ScrollToContact will focus on the input field
jQuery('.ScrollToContact').click(function(){
setTimeout(
    function() {
        jQuery('.your-name').focus();
    }, 900);
});

});




jQuery(document).ready(function() {
    jQuery('.home-jumbotron-btn').click(function(){
      gtag('event', 'click', {'event_category': 'User Interactions', 'event_label': 'Clicked Jumbotron Button'});
    });
});