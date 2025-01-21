document.getElementById('startButton').addEventListener('click', () => {
    gsap.to('.book', { opacity: 0, duration: 1, onComplete: () => {
      window.location.href = 'timeline.html'; // Redirect to the timeline
    } });
  });
  
  function openProject(chapter) {
    window.location.href = `project${chapter}.html`;
  }
  
  // Easter Egg Button Functionality
document.getElementById('easterEggButton').addEventListener('click', () => {
    const text = document.getElementById('easterEggText');
    text.style.display = 'block';
    gsap.fromTo(
      '#easterEggText',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 }
    );
  });
  
  // Action Buttons Animations
  document.querySelectorAll('.action-button').forEach((button) => {
    button.addEventListener('mouseover', () => {
      gsap.to(button, { scale: 1.1, duration: 0.2 });
    });
    button.addEventListener('mouseout', () => {
      gsap.to(button, { scale: 1, duration: 0.2 });
    });
  });
  