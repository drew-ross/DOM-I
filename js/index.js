const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const logoImg = document.querySelector('#logo-img');
const ctaImg = document.querySelector('#cta-img');
const middleImg = document.querySelector('#middle-img');
//
const nav = Array.from(document.querySelector('nav').children);
const cta = Array.from(document.querySelector('.cta-text').children);
const textContentDivs = Array.from(document.querySelectorAll('.text-content'));
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');

logoImg.setAttribute('src', '../img/logo.png');
ctaImg.setAttribute('src', '../img/header-img.png');
middleImg.setAttribute('src', '../img/mid-page-accent.jpg');
//
nav.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`];
});
cta.forEach((item) => {
  item.textContent = siteContent.cta[item.tagName.toLowerCase()];
});

function addTextContent(divIndex, contentKey) {
  textContentDivs[divIndex].firstElementChild.textContent = siteContent['main-content'][`${contentKey}-h4`];
  textContentDivs[divIndex].lastElementChild.textContent = siteContent['main-content'][`${contentKey}-content`];
}

addTextContent(0, 'features');
addTextContent(1, 'about');
addTextContent(2, 'services');
addTextContent(3, 'product');
addTextContent(4, 'vision');

contact.children[0].textContent = siteContent.contact['contact-h4'];
contact.children[1].textContent = siteContent.contact['address'];
contact.children[2].textContent = siteContent.contact['phone'];
contact.children[3].textContent = siteContent.contact['email'];

footer.firstElementChild.textContent = siteContent.footer.copyright;