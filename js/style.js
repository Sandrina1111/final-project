
    // Menambahkan class active pada navbar sesuai scroll/klik
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Optional: auto highlight link saat scroll (scroll spy)
    window.addEventListener('scroll', () => {
      let fromTop = window.scrollY;
      navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop - 100 <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          navLinks.forEach(nav => nav.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });