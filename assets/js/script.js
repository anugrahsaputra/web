document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fitur toggle menu untuk versi mobile (jika diperlukan)
    // Anda bisa menambahkan tombol hamburger di HTML dan logika di sini
    // untuk menampilkan/menyembunyikan menu.
    // Contoh sederhana:
    const navMenu = document.querySelector('.main-nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    toggleButton.classList.add('nav-toggle');

    // Jika Anda ingin menambahkan tombol toggle, letakkan di HTML
    // dan gunakan selector yang tepat di sini.
});