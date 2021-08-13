const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    // removing active job description content 
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    // removing active job tab status
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    // setting new active status for both button and description
    tab.classList.add('active');
    target.classList.add('active');
  });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// nav div
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-div');
  const navLinks = document.querySelectorAll('.nav-div .nav-link li');

  // toggle nav
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');

    // burger animation
    burger.classList.toggle('toggle');
  });
}
navSlide();

const navClick = () => {
  const navLinks = document.querySelectorAll('.left-respo-nav .nav-div .nav-link li');
  const nav = document.querySelector('.nav-div');
  const burger = document.querySelector('.burger');

  // toggle nav
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  });
}

navClick();