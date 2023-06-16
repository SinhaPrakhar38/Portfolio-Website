document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed-text');
  
    const typed = new Typed(typedElement, {
      strings: ['React Developer', 'Learner', 'Photographer', 'Film Enthusiast', 'Web Developer'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: false, // Set showCursor to false
      startDelay: 1000,
      smartBackspace: true
    });
  });
  