// nav area
const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}

// hero section
function img(anything) {
    document.querySelector('.slide').src = anything;
  }

  function change(change) {
    const line = document.querySelector('.image');
    line.style.background = change;
  }
// collapsing text 

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("tBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

//   for accordion
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionIHeading');

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (var i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}

// carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })

//   scroll arroew
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  // whatsapp
  function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "Please fill out all fields.";
        event.preventDefault(); // Prevent form submission or link navigation
        return false;
    }

    updateWhatsAppLink();
    return true;
}

function updateWhatsAppLink() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. I have the following question: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappLink = `https://wa.me/+2348068518634?text=${encodedMessage}`;
    document.getElementById('whatsappLink').href = whatsappLink;
}


// mushroom
function MupdateWhatsAppLink(productNumber, productName) {
  const quantityInput = document.getElementById('quantity' + productNumber);
  const quantity = quantityInput.value;
  const priceElement = quantityInput.closest('.product-details');
  const price = parseFloat(priceElement.getAttribute('data-price')); 
  const totalPrice = price * quantity;
  const message = `I'm interested in buying ${quantity} ${productName}${quantity > 1 ? 's' : ''} for ${totalPrice.toLocaleString()}NGN`;
  const whatsappLink = `https://wa.me/+2348068518634?text=${encodeURIComponent(message)}`;
  document.getElementById('buyNowLink' + productNumber).href = whatsappLink;
}

// poultytr
function PupdateWhatsAppLink(productNumber, productName) {
  const quantityInput = document.getElementById('quantity' + productNumber);
  const quantity = quantityInput.value;
  const priceElement = quantityInput.closest('.product-details');
  const price = parseFloat(priceElement.getAttribute('data-price'));
  const totalPrice = price * quantity;
  const message = `I'm interested in buying ${quantity} ${productName}${quantity > 1 ? 's' : ''} for ${totalPrice.toLocaleString()}NGN`;
  const whatsappLink = `https://wa.me/+2348068518634?text=${encodeURIComponent(message)}`;
  document.getElementById('buyNowLink' + productNumber).href = whatsappLink;
}

// albino
function AupdateWhatsAppLink() {
  const quantity = document.getElementById('quantity').value;
  const price = parseFloat(document.querySelector('.product-details').getAttribute('data-price'));
  const totalPrice = price * quantity;
  const message = `I'm interested in buying ${quantity} Albino Rat${quantity > 1 ? 's' : ''} for ${totalPrice.toLocaleString()}NGN`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/+2348068518634?text=${encodedMessage.replace(/%20/g, ' ')}`;
  document.getElementById('buyNowLink').href = whatsappLink;
}
