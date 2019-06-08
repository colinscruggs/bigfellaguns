'use strict';

function aboutSWAL() {
  swal({
    title: 'About',
    text: 'Lorem impsum yada yada, flark gnar wombo gumbo reeeef.',
    confirmButtonText: 'Continue'
  });
}

function exportSWAL() {
  swal({
    title: 'ITAR & Export Controls',
    text: 'Lorem impsum yada yada, flark gnar wombo gumbo reeeef.',
    confirmButtonText: 'Continue'
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  $(document).ready(function () {

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });

    $('.custom1').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items: 1,
      margin: 30,
      stagePadding: 30,
      smartSpeed: 450
    });

    // document.getElementsByClassName(".owl-carousel").ownCarousel();
  });
});