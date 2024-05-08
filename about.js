function applyColorOnScroll() {
    const navbar = document.querySelector('nav');
    const scrollY = window.scrollY; 
    
    const threshold = 100; 
  
    if (scrollY >= threshold) {
      navbar.style.backgroundColor = '#2f2f2f'; 
    } else {
      
      navbar.style.backgroundColor = 'transparent'; 
    }
  }
  
  window.addEventListener('scroll', applyColorOnScroll);

  const scrollDownArrow = document.querySelector('.scroll-down-arrow');

scrollDownArrow.addEventListener('click', function() {
  
  window.scrollBy({ 
    top: 350, 
    behavior: 'smooth'
  });
});
