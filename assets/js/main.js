console.log('Hello ')

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.header__hamburger-button');
    const hamburgerMenu = document.querySelector('.header__hamburger-menu');

    hamburgerButton.addEventListener('click', function() {
        // Переключаем видимость меню и иконку
        const isActive = hamburgerMenu.style.display === 'block';
        hamburgerMenu.style.display = isActive ? 'none' : 'block';
        hamburgerButton.classList.toggle('active', !isActive);
    });

    // Закрываем меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!hamburgerButton.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            hamburgerMenu.style.display = 'none';
            hamburgerButton.classList.remove('active');
        }
    });
});
