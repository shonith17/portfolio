// Sticky navbar that stays on the top when the user scrolls down.
window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    
    if (window.pageYOffset > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };


  
  document.addEventListener("DOMContentLoaded", function() {

    //rotate through the array of images.
    let digitalIndex = 0;
    let filmIndex = 0;
    const digitalImage = document.querySelector('#rotating-digital');
    const filmImage = document.querySelector('#rotating-film');
    
    digitalImage.style.transition = "background-image 0.5s ease-in-out";
    filmImage.style.transition = "background-image 0.5s ease-in-out";
    
    function changeDigital() {
      digitalIndex >= frontPageDigitalImages.length - 1 ? digitalIndex = 0 : digitalIndex++;
      digitalImage.style.backgroundImage = "url(" + frontPageDigitalImages[digitalIndex] + ")";
    }
    
    function changeFilm() {
      filmIndex >= frontPageFilmImages.length - 1 ? filmIndex = 0 : filmIndex++;
      filmImage.style.backgroundImage = "url(" + frontPageFilmImages[filmIndex] + ")";
    }


// Add a scroll animation once the user has scrolled over 1/2 of the element
// The animation is in CSS.
  const scrollElements = document.querySelectorAll('.scroll-animation');

  function animateOnScroll() {
    scrollElements.forEach(function(element) {
      if (isElementInViewport(element, 1 / 2)) {
        element.classList.add('visible');
      }
    });
  }
    
  function isElementInViewport(element, threshold) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var elementHeight = element.offsetHeight;
    var triggerPoint = windowHeight - (elementHeight * threshold);
    return rect.top <= triggerPoint;
  }

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // changes the pictures every 7 seconds
  setInterval(changeDigital, 7000);

  setTimeout(function() {
    setInterval(changeFilm, 7000);
    }, 3500);

  
// Add a delay to the animation on the home screen. 
// Each element (my picture, text, down arrows) will transition in on a delay
  const element1 = document.getElementById('fade-element-1');
  const element2 = document.getElementById('fade-element-2');
  const element3 = document.getElementById('scroll-icon');

  setTimeout(function() {
    element1.style.animationDelay = "0.5s";
    element1.classList.add('fade-in-element');
  });

  setTimeout(function() {
    element2.style.animationDelay = "1.5s";
    element2.classList.add('fade-in-element');
  });

  setTimeout(function() {
    element3.style.animationDelay = "4s";
    element3.classList.add('fade-in-icon');
  });


  // This removes the icon from the window if you scroll more than 500 px
  const scrollIcon = document.getElementById('scroll-icon');
  const scrollText = document.getElementById('icon');

  function handleScroll() {
    if (window.scrollY >= 500) {
      scrollIcon.style.animation = 'none';
      scrollText.style.animation = 'none';
    } else {
      scrollIcon.style.animation = 'fadeInUp 1s ease-in-out 3s infinite alternate';
      scrollText.style.animation = 'fadeInUp 1s ease-in-out 3s infinite alternate';
    }
  }
  
  window.addEventListener('scroll', handleScroll);

  // Add a click event listener to the scroll icon
  scrollIcon.addEventListener("click", () => {
    // Get the target element to scroll to
    const target = document.getElementById("scroll-target");

    // Calculate the offset from the top of the page to the target element
    const targetOffset = target.offsetTop;

    // Define the scroll offset (adjust this value to scroll less)
    const scrollOffset = 250; // Change this value as needed

    // Calculate the final scroll position
    const scrollPosition = targetOffset - scrollOffset;

    // Perform smooth scrolling animation
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
    });
  });

  // This is the javascript for the svg
  let paths = document.querySelectorAll("svg path");
  let i = 0;

  paths.forEach(function(item, index) {
  i++;

    let pathlength = item.getTotalLength();
    let speed = 1000; // speed of animation
    
    item.setAttribute("stroke-dasharray", pathlength);
    item.setAttribute("stroke-dashoffset", pathlength);

    //add animation delay for different indecies based on how they are positioned in the graphic
    if (index == 0) {
      item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='0s' dur='" + pathlength/speed + "'s to='0' fill='freeze' />"
    } else if (index == 1 || index == 2 || index == 3 || index == 4) {
      item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='0.8s' dur='" + pathlength/50 + "'s to='0' fill='freeze' />"
    } else if (index == 5 || index == 6 ){
      item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='1.4s' dur='" + pathlength/130 + "'s to='0' fill='freeze' />"
    } else if (index == 7) {
      item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='2s' dur='" + pathlength/200 + "'s to='0' fill='freeze' />"
    } else if (index ==8) {
      item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='2.6s' dur='" + pathlength/230 + "'s to='0' fill='freeze' />"
    } else if (index == 9 || index == 10 || index == 11) {
      item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='3.4s' dur='" + pathlength/230 + "'s to='0' fill='freeze' />"
    } else {
      item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='3.6s' dur='" + pathlength/230 + "'s to='0' fill='freeze' />"
    }

  });

});


const frontPageDigitalImages = [
  "./images/digital5.jpg",
  "./images/digital1.jpg",
  "./images/digital9.jpg",
  "./images/digital4.jpg",
  "./images/digital6.jpg",
  "./images/digital3.jpg",
  "./images/digital11.jpg",
  "./images/digital13.jpg",
  "./images/digital14.jpg",
  "./images/digital17.jpg",
  "./images/digital19.jpg",
  "./images/digital24.jpg"
]

const frontPageFilmImages = [
  "./images/film19.jpg",
  "./images/film4.jpg",
  "./images/film8.jpg",
  "./images/film11.jpg",
  "./images/film18.jpg",
  "./images/film6.jpg",
]