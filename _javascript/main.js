function aboutSWAL() {
  swal({
    title: 'About',
    text: 'Lorem impsum yada yada, flark gnar wombo gumbo reeeef.',
    confirmButtonText: 'Continue'
  })
}

function exportSWAL() {
  swal({
    title: 'ITAR & Export Controls',
    text: 'Lorem impsum yada yada, flark gnar wombo gumbo reeeef.',
    confirmButtonText: 'Continue'
  })
}

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

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
    },
  })

  $('#sendMailButton').click(function () {
    Email.send({
      // SecureToken: "68a9e875-9398-4d50-a0a4-cce2211cb2bc",
      To: "colinscruggs97@gmail.com",
      From: 'hassanbakhtiar@bigfellaguns.com',
      Subject: "This is the subject",
      Body: "And this is the body"
    }).then(
      // message => alert(message),
      console.log("EMAIL SENT! Check mailbox.")
    );
  });
});
