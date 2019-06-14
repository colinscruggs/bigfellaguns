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
  // boolean flag to control email sending
  let emailButtonClicked = false;

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

  // if (!emailButtonClicked) {
    $('#sendMailButton').click(function () {
      let formInputs = [];

      formInputs.push({
        type: 'name',
        inputVal: document.querySelector('#nameInput').value
      });
      formInputs.push({
        type: 'email',
        inputVal: document.querySelector('#emailInput').value
      });
      formInputs.push({
        type: 'phone',
        inputVal: document.querySelector('#phoneInput').value
      });
      formInputs.push({
        type: 'country',
        inputVal: document.querySelector('#countryInput').value
      });
      formInputs.push({
        type: 'subject',
        inputVal: document.querySelector('#subjectInput').value
      });
      formInputs.push({
        type: 'body',
        inputVal: document.querySelector('#bodyInput').value
      });

      console.log(formInputs);

      Email.send({
        To: "contact@bigfellaguns.com",
        From: "hassanbakhtiar@bigfellaguns.com",
        Subject: "Inquiry: " + formInputs[4].inputVal,
        Body: "Name: " + formInputs[0].inputVal +
          "\n" + "\n" + "\n Email: " + formInputs[1].inputVal +
          "\n" + "\n" + "\n Phone: " + formInputs[2].inputVal +
          "\n" + "\n" + "\n Country of origin: " + formInputs[3].inputVal +
          "\n" + "\n" + "\n Subject: " + formInputs[4].inputVal +
          "\n" + "\n" + "\n Body: " + formInputs[5].inputVal
      }).then(
        // message => alert(message),
        console.log("EMAIL SENT! Check mailbox.")
      );
      // prevent multiple emails from being sent in the same browser session
      emailButtonClicked = true; 
    });
  // }


});
