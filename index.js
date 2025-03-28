document.addEventListener("DOMContentLoaded", function () {
    const scrollItems = document.querySelectorAll(".scroll-item");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi pertama
            }
        });
    }, { threshold: 0.1 });

    scrollItems.forEach(item => {
        observer.observe(item);
    });
});

document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
        menu.classList.add('hide');
    }
});
