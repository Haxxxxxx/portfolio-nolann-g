
//#region Compétences
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the sections and navigation buttons
  const MediaSection = document.getElementById("tab_media");
  const AdobeSection = document.getElementById("tab_adobe");
  const PhotoSection = document.getElementById("tab_photo");
  const OutilSection = document.getElementById("tab_outils_media");

  const Tabs1 = document.getElementById("tabs1");
  const Tabs2 = document.getElementById("tabs2");
  const Tabs3 = document.getElementById("tabs3");
  const Tabs4 = document.getElementById("tabs4");

  // Function to hide all sections
  function hideAllSections() {
      MediaSection.style.display = "none";
      AdobeSection.style.display = "none";
      PhotoSection.style.display = "none";
      OutilSection.style.display = "none";
  }

  // Function to show a specific section
  function showSection(section) {
      hideAllSections();
      // Remove the 'competence__tab-active' class from all tabs
      Tabs1.classList.remove("competence__tab-active");
      Tabs2.classList.remove("competence__tab-active");
      Tabs3.classList.remove("competence__tab-active");
      Tabs4.classList.remove("competence__tab-active");

      section.style.display = "block";
      // Add the 'competence__tab-active' class to the corresponding tab
      if (section === MediaSection) {
          Tabs1.classList.add("competence__tab-active");
      } else if (section === AdobeSection) {
          Tabs2.classList.add("competence__tab-active");
      } else if (section === PhotoSection) {
          Tabs3.classList.add("competence__tab-active");
      } else if (section === OutilSection) {
          Tabs4.classList.add("competence__tab-active");
      }
  }

  // Initially, hide all sections
  hideAllSections();

  // Add click event listeners to navigation buttons
  Tabs1.addEventListener("click", function () {
      showSection(MediaSection);
  });

  Tabs2.addEventListener("click", function () {
      showSection(AdobeSection);
  });

  Tabs3.addEventListener("click", function () {
      showSection(PhotoSection);
  });

  Tabs4.addEventListener("click", function () {
      showSection(OutilSection);
  });

  // Show the initial section (e.g., MediaSection)
  showSection(MediaSection);
});
//#endregion

//#region Profil
//Function PopUp Decouvrir

const buttonDecouvrir = document.getElementById("btndecouvrir");
const PopUptext = document.getElementById("profil_popup");
const closeButton = document.getElementById("image_close_popup");
const imageprofile = document.getElementById("profil__banner-pp");
const mobileWindow = document.querySelector(".mobile__window");
const ProfilDisplay = document.querySelector('.profil__display'); // Selector for the 'profil' element

// Function to show the popup
function showPopup() {
  PopUptext.style.display = "block";
  mobileWindow.classList.add("darken");
}

// Function to close the popup
function closePopup() {
  PopUptext.style.display = "none";
  mobileWindow.classList.remove("darken");
}

imageprofile.addEventListener('click', (e) => {
  showPopup();
  e.stopPropagation(); // Prevents propagation to the document
});

buttonDecouvrir.addEventListener('click', (e) => {
  showPopup();
  e.stopPropagation(); // Prevents propagation to the document
});

closeButton.addEventListener('click', (e) => {
  closePopup();
  e.stopPropagation(); // Prevents propagation to the document
});

function openPopupAndScroll(id) {
  showPopup(); // Open the popup first
  document.getElementById(id).scrollIntoView(); // Then scroll to the element with the given id
}

// Updated event listener for the document
document.addEventListener('click', function (e) {
  const isClickInsidePopup = PopUptext.contains(e.target);
  const isProfilDisplayBlock = ProfilDisplay.style.display === 'block';

  // Close the popup if clicked outside and if profil display is 'block'
  if (!isClickInsidePopup && isProfilDisplayBlock) {
    closePopup();
  }
});


//#endregion

//#region Entreprises

// Function to handle the click event
function togglePopup(bateauId, popupId) {
  const bateau = document.getElementById(bateauId);
  const popup = document.getElementById(popupId);
  const mobileWindow = document.querySelector('.mobile__window');
  const entreprisesDisplay = document.querySelector('.entreprises__display');

  // Show popup function
  function showPopup() {
    popup.style.display = "block";
    mobileWindow.classList.add("darken");
  }

  // Close popup function
  function closePopup() {
    popup.style.display = "none";
    mobileWindow.classList.remove("darken");
  }

  // Event listener for the bateau element
  bateau.addEventListener('click', (e) => {
    showPopup();
    e.stopPropagation();
  });

  // Event listener for the close button in the popup
  const closeBtn = document.getElementById(bateauId + "__Popup");
  closeBtn.addEventListener('click', (e) => {
    closePopup();
    e.stopPropagation();
  });

  // Add event listener to document to handle clicks outside the popup
  document.addEventListener('click', (e) => {
    const isClickInsidePopup = popup.contains(e.target);
    const isEntreprisesDisplayBlock = entreprisesDisplay.style.display === 'block';
  
    // Close the popup if clicked outside and if entreprises display is 'block'
    if (!isClickInsidePopup && isEntreprisesDisplayBlock) {
      closePopup();
    }
  }, true); // The third parameter 'true' sets the listener to capture phase
}// Updated event listener for the document




// Call the function for each element
togglePopup("bateauOserv", "company__popup_oserv");
togglePopup("bateauTorc", "company__popup_torc");
togglePopup("bateauGreenSuits", "company__popup_grensuits");
togglePopup("bateauSNCF", "company__popup_sncf");
togglePopup("bateauWooka", "company__popup_wooka");
togglePopup("bateauDexxon", "company__popup_dexxon");
togglePopup("bateauWavy", "company__popup_wavy");
togglePopup("bateauViv", "company__popup_viv");



// Event listener to close the popup when clicking outside the popup



//#endregion
// https://platform.openai.com/docs/overview 
//#region Ouverture Gmail 
// Function to check if the user is on a mobile device
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}


const gmailLink1 = document.getElementById('gmail-link-1');
    const gmailLink2 = document.getElementById('gmail-link-2');
    const gmailLink3 = document.getElementById('gmail-link-3');

    gmailLink1.addEventListener('click', createMailHandler());
    gmailLink2.addEventListener('click', createMailHandler());
    gmailLink3.addEventListener('click', createMailHandler());

    function createMailHandler() {
      return function (event) {
          event.preventDefault();
          const to = 'contact.thenono@gmail.com';
          const subject = 'Subject here';
          const body = 'Body of the email here';
  
          if (isMobile()) {
              if (isIOS()) {
                  // Try opening the Gmail app on iOS
                  const iosMailLink = `googlegmail:///co?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = iosMailLink;
  
                  // After a delay, offer to open the default mail app
                  setTimeout(function() {
                      if(confirm("If the Gmail app didn't open, would you like to use the default mail app?")) {
                          window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      }
                  }, 2000);
              } else {
                  // Android and other devices
                  const mailLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailLink;
              }
          } else {
              // Non-mobile devices
              const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.open(gmailWebUrl, '_blank');
          }
      }
  }
  //#endregion

//#region Nav Bottom
// JavaScript code to handle section switching
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the sections and navigation buttons
  const competencesSection = document.getElementById("competences");
  const profilSection = document.getElementById("profil");
  const entreprisesSection = document.getElementById("entreprises");

  const competencesButton = document.getElementById("competences-button");
  const profilButton = document.getElementById("profil-button");
  const entreprisesButton = document.getElementById("entreprises-button");

  // Function to hide all sections
  function hideAllSections() {
    competencesSection.style.display = "none";
    profilSection.style.display = "none";
    entreprisesSection.style.display = "none";
  }

  // Function to show a specific section
  function showSection(section) {
    hideAllSections();
    section.style.display = "block";
  }

  // Initially, display the "Profil" section
  showSection(profilSection);

  // Add click event listeners to navigation buttons
  competencesButton.addEventListener("click", function () {
    showSection(competencesSection);
  });

  profilButton.addEventListener("click", function () {
    showSection(profilSection);
  });

  entreprisesButton.addEventListener("click", function () {
    showSection(entreprisesSection);
  });
});

// Part Bateau
const buttons = document.querySelectorAll('.nav-button');

function moveTrianglesToActiveButton(activeButton) {
  // First, ensure all triangles are removed from all buttons
  document.querySelectorAll('.triangle-before, .triangle-after').forEach(triangle => {
    triangle.remove();
  });

  // Create new triangle elements (assuming you have the same source for these images)
  let newTriangleBefore = document.createElement('img');
  newTriangleBefore.src = 'img/menu__triangle_left.png';
  newTriangleBefore.className = 'triangle-image triangle-before';

  let newTriangleAfter = document.createElement('img');
  newTriangleAfter.src = 'img/menu__triangle.png';
  newTriangleAfter.className = 'triangle-image triangle-after';

  // Identify the image and text elements within the active button
  const imgElement = activeButton.querySelector('img:not(.triangle-image)');
  const textElement = activeButton.querySelector('.buttontext');

  // Reconstruct the button content
  activeButton.innerHTML = '';
  activeButton.appendChild(newTriangleBefore);
  if (imgElement) activeButton.appendChild(imgElement);
  activeButton.appendChild(newTriangleAfter);
  if (textElement) activeButton.appendChild(textElement);
}
//Function Globale 
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the 'active' class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    button.classList.add('active');

    // Move the triangle images to the active button
    moveTrianglesToActiveButton(button);
  });
});



//#endregion

//#region Incrementeur Coins + Gems
// Get a reference to the add button element
function updateDisplay(elementId) {
            var coinsElement = document.getElementById(elementId);
            var currentNumber = parseInt(coinsElement.textContent);
            var newNumber = currentNumber + 1;
            coinsElement.textContent = newNumber;
        }

        // Add click event listeners for the first set of buttons
        var addButton1 = document.getElementById("addcoins1");
        var addButton3 = document.getElementById("addcoins3");

        addButton1.addEventListener("click", function() {
            updateDisplay("Coins1");
            updateDisplay("Coins3");

        });

        addButton3.addEventListener("click", function() {
            updateDisplay("Coins1");
            updateDisplay("Coins3");
        });

        // Add click event listeners for the second set of buttons
        var addButton2 = document.getElementById("addcoins2");
        var addButton4 = document.getElementById("addcoins4");

        addButton2.addEventListener("click", function() {
            updateDisplay("Coins2");
            updateDisplay("Coins4");
        });

        addButton4.addEventListener("click", function() {
            updateDisplay("Coins2");
            updateDisplay("Coins4");
        });

        
//#endregion

//#region loader
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("wrapper").classList.add("fade-in");
  }, 2500); // Adjust time as needed
});



document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      var loader = document.getElementById('loader');
      loader.classList.add('fade-out');
  }, 1900); // Modifiez la durée (5000 ms = 5 secondes) selon vos besoins
});

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      var container = document.getElementById('wrapper');
      container.classList.add('fade-in');
  }, 2300); // Modifiez la durée (5000 ms = 5 secondes) selon vos besoins
});
//#endregion