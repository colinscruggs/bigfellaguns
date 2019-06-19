function aboutSWAL() {
  swal({
    title: 'About',
    html: `<p class="is-size-5"><strong>Big Fella Guns</strong> is a federally licensed arms provider that strives to put the customer first.
    All arms are acquired with U.S. federal arms licenses from Lipseys and Zanders distribution companies.</p>
    <br>
    <p class="is-size-5">If you'd like to contact Big Fella Guns, please write an email using the form in the Contact page.</p>
    <br>
    <p class="is-size-5"> Thank you!</p>
    `,
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: 'Continue',
    animation: false
  })
}

function exportSWAL() {
  swal({
    title: 'ITAR Banned/Embargoed Countries',
    type: 'error',
    html: `'<p class="is-size-4 title">Under
    <a href="https://www.pmddtc.state.gov/?id=ddtc_public_portal_itar_landing#sideNav"
    style="text-decoration: underline"
    class="landing-icon">U.S. law</a>,
    the following countries are banned/embargoed: </p>
    <p class"=is-size-5 is-subtitle"></p>Afghanistan, Belarus, Central African Republic, Cuba, Cyprus, Eritrea, Fiji, Iran, Iraq, Cote d\'Ivoire, Lebanon, Libya, North Korea, Syria, Vietnam, Myanmar, China, Haiti, Liberia, Rwanda, Somalia, Sri Lanka, Republic of the Sudan (Northern Sudan), Yemen, Zimbabwe, Venezuela, Democratic Republic of the Congo</p>`,
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: 'Continue',
    animation: false
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

  $('#sendMailButton').click(function () {
    if(!emailButtonClicked) {
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
        Host: "smtp.elasticemail.com",
        Username: "hassanbakhtiar@bigfellaguns.com",
        Password: "f3701df1-a6b3-4430-8b9d-ea11847f5385",
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
    }
  });
});
