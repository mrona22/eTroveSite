//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Original navbar shrink function with modification
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) return;
      
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
        navbarCollapsible.style.backgroundColor = 'white'; // Changed from transparent to white
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
        // This is the key line - keep background white when scrolled
        navbarCollapsible.style.backgroundColor = 'white'; // Changed from transparent to white
      }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
