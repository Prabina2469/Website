
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  const navLinks = document.querySelectorAll('.vertical-nav a');
 const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 50) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

 //heading 
const headings = [
    "WE ARE IN ONE PAGE",
    "WE ARE RESPONSIVE",
    "WE ARE PERFECTION",
    "WE ARE ONEPRESS"
  ];
  
  let currentHeading = 0;
  const heroHeadingElement = document.getElementById("hero-heading");
  function changeHeading() {
    heroHeadingElement.textContent = headings[currentHeading];
    currentHeading = (currentHeading + 1) % headings.length; // Loop through headings
  }

  
  setInterval(changeHeading, 3000);

  
  window.onload = changeHeading;
  