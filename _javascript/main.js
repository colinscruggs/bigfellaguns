$.ajaxSetup ({
  // Disable caching of AJAX responses
  cache: false
});

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

// create variables for all category tabs
let glock = $( '.glock-tabs' );

let colt = $( '.colt-tabs' );
let coltPistols = $( '.colt-pistols');
let coltRifles = $( '.colt-rifles');
let coltRevolvers = $( '.colt-revolvers');

let ruger = $( '.ruger-tabs' );
let rugerPistols = $( '.ruger-pistols');
let rugerRifles = $( '.ruger-rifles');
let rugerRevolvers = $( '.ruger-revolvers');

let sig = $( '.sig-tabs' );
let sigPistols = $( '.sig-pistols');
let sigRifles = $( '.sig-rifles');

let beretta = $( '.beretta-tabs' );
let berettaPistols = $( '.beretta-pistols');
let berettaShotguns = $( '.beretta-shotguns');
let berettaRifles = $( '.beretta-rifles');


// create variables for all category tabs
let glockBtn = $('.glock-btn');
let coltBtn = $( '.colt-btn' );
let rugerBtn = $( '.ruger-btn' );
let sigBtn = $( '.sig-btn' );
let berettaBtn = $( '.beretta-btn' );

let tabButtons = [
  glockBtn, coltBtn, rugerBtn, sigBtn, berettaBtn
]

let innerTabButtons = [
  coltPistols, coltRifles, coltRevolvers,rugerPistols,rugerRifles,rugerRevolvers,
  sigPistols, sigRifles, berettaPistols, berettaShotguns, berettaRifles
]

let invContainer = $( '.inventory-target' );

// eventHandler that will toggle the respective category of tabs on catalog.html
function changeCategory(cat, isCategory) {

  if(isCategory) {
    // remove is-active from all tab buttons
    tabButtons.forEach((button) => {
      if(button.hasClass('is-active')) {
        button.removeClass('is-active');
      }
    })
  } else {
    // remove is-active from all tab buttons
    innerTabButtons.forEach((button) => {
      if(button.hasClass('is-active')) {
        button.removeClass('is-active');
      }
    })
  }

  // toggle tabs based on user's selection
  switch (cat) {
    case 'glock':
      glock.toggle(true);
      glockBtn.addClass('is-active');
      loadInventory('glock', '');
      colt.toggle(false);
      ruger.toggle(false);
      sig.toggle(false);
      beretta.toggle(false);
      break;

    case 'colt':
      colt.toggle(true);
      coltBtn.addClass('is-active');
      coltPistols.addClass('is-active');
      loadInventory('colt', '');
      glock.toggle(false);
      ruger.toggle(false);
      sig.toggle(false);
      beretta.toggle(false);
      break;

      case 'colt-pisols':
        coltPistols.addClass('is-active');
        break;

      case 'colt-rifles':
        coltRifles.addClass('is-active');
        break;

      case 'colt-revolvers':
        coltRevolvers.addClass('is-active');
        break;

    case 'ruger':
      ruger.toggle(true);
      rugerBtn.addClass('is-active');
      rugerPistols.addClass('is-active');
      loadInventory('ruger', '');
      glock.toggle(false);
      colt.toggle(false);
      sig.toggle(false);
      beretta.toggle(false);
      break;


      case 'ruger-pisols':
        rugerPistols.addClass('is-active');
        break;

      case 'ruger-rifles':
        rugerRifles.addClass('is-active');
        break;

      case 'ruger-revolvers':
        rugerRevolvers.addClass('is-active');
        break;

    case 'sig':
      sig.toggle(true);
      sigBtn.addClass('is-active');
      sigPistols.addClass('is-active');
      loadInventory('sig', '');
      glock.toggle(false);
      colt.toggle(false);
      ruger.toggle(false);
      beretta.toggle(false);
      break;

      case 'sig-pisols':
        sigPistols.addClass('is-active');
        break;

      case 'sig-rifles':
        sigRifles.addClass('is-active');
        break;

    case 'beretta':
      beretta.toggle(true);
      berettaBtn.addClass('is-active');
      berettaPistols.addClass('is-active');
      loadInventory('beretta', '');
      glock.toggle(false);
      colt.toggle(false);
      ruger.toggle(false);
      sig.toggle(false);
      break;

      case 'beretta-pisols':
        berettaPistols.addClass('is-active');
        break;

      case 'beretta-shotguns':
        berettaShotguns.addClass('is-active');
        break;

      case 'beretta-rifles':
        berettaRifles.addClass('is-active');
        break;
  }
}

function loadInventory(cat, subCat) {
  console.log("attempting to load: " + cat + " " + subCat);
  // load inventory based on user's selection
  switch (cat) {
    case 'glock':
      invContainer.load('inventory_pages/glock-inventory.html');
      break;

    /////////////////////
    case 'colt':
      switch (subCat) {
        case 'pistols':
            invContainer.load('inventory_pages/colt-inventory.html #pistols');
            break;
      
          case 'rifles':
            invContainer.load('inventory_pages/colt-inventory.html #rifles');
            break;
      
          case 'revolvers':
            invContainer.load('inventory_pages/colt-inventory.html #revolvers');
            break;

          default:
            invContainer.load('inventory_pages/colt-inventory.html #pistols');
            break;
      }
      break;

    /////////////////////

    case 'ruger':
      switch (subCat) {
        case 'pistols':
            invContainer.load('inventory_pages/ruger-inventory.html #pistols');
            break;
      
          case 'rifles':
            invContainer.load('inventory_pages/ruger-inventory.html #rifles');
            break;
      
          case 'revolvers':
            invContainer.load('inventory_pages/ruger-inventory.html #revolvers');
            break;

          default:
            invContainer.load('inventory_pages/ruger-inventory.html #pistols');
            break;
      }
      break;

    /////////////////////

    case 'sig':
      switch (subCat) {
        case 'pistols':
            invContainer.load('inventory_pages/sig-inventory.html #pistols');
            break;
      
          case 'rifles':
            invContainer.load('inventory_pages/sig-inventory.html #rifles');
            break;

          default:
            invContainer.load('inventory_pages/sig-inventory.html #pistols');
            break;
      }
      break;

    /////////////////////

    case 'beretta':
      switch (subCat) {
        case 'pistols':
            invContainer.load('inventory_pages/beretta-inventory.html #pistols');
            break;
      
          case 'rifles':
            invContainer.load('inventory_pages/beretta-inventory.html #rifles');
            break;
      
          case 'shotguns':
            invContainer.load('inventory_pages/beretta-inventory.html #shotguns');
            break;

          default:
            invContainer.load('inventory_pages/beretta-inventory.html #pistols');
            break;
      }
      break;
  }
}

$( document ).ready( () => {

  ////////////////////////////// CATALOG TABS

  // initially toggle all other category tabs on catalog.html
  colt.toggle();
  ruger.toggle();
  sig.toggle();
  beretta.toggle();

  loadInventory('glock', '');

  // click handlers for category buttons on catalog.html
  glockBtn.click(function() {
      changeCategory('glock', true);
  });

  coltBtn.click(function() {
      changeCategory('colt', true);
  });
        coltPistols.click(function() {
            changeCategory('colt-pistols', false);
            loadInventory('colt', 'pistols');
        });
        coltRifles.click(function() {
            changeCategory('colt-rifles', false);
            loadInventory('colt', 'rifles');
        });
        coltRevolvers.click(function() {
            changeCategory('colt-revolvers', false);
            loadInventory('colt', 'revolvers');
        });


  rugerBtn.click(function() {
    if(ruger) {
      changeCategory('ruger', true);
    }
  });
        rugerPistols.click(function() {
          changeCategory('ruger-pistols', false);
          loadInventory('ruger', 'pistols');
        });
        rugerRifles.click(function() {
            changeCategory('ruger-rifles', false);
            loadInventory('ruger', 'rifles');
        });
        rugerRevolvers.click(function() {
            changeCategory('ruger-revolvers', false);
            loadInventory('ruger', 'revolvers');
        });

  sigBtn.click(function() {
    if(sig) {
      changeCategory('sig', true);
    }
  });
        sigPistols.click(function() {
          changeCategory('sig-pistols', false);
          loadInventory('sig', 'pistols');
        });
        sigRifles.click(function() {
            changeCategory('sig-rifles', false);
            loadInventory('sig', 'rifles');
        });

  berettaBtn.click(function() {
    if(beretta) {
      changeCategory('beretta', true);
    }
  });
        berettaPistols.click(function() {
          changeCategory('beretta-pistols', false);
          loadInventory('beretta', 'pistols');
        });
        berettaRifles.click(function() {
            changeCategory('beretta-rifles', false);
            loadInventory('beretta', 'rifles');
        });
        berettaShotguns.click(function() {
            changeCategory('beretta-shotguns', false);
            loadInventory('beretta', 'shotguns');
        });

  ////////////////////////////// NAVBAR BURGER

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

  ////////////////////////////// OWL CAROUSEL

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

  ////////////////////////////// EMAIL

  // boolean flag to control email sending
  let emailButtonClicked = false;

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
