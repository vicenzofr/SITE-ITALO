document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav.links button a[href^="#"]');

    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href");
        const targetElement = document.querySelector(id);

        // Verifique se o elemento existe
        if (targetElement) {
            return targetElement.getBoundingClientRect().top + window.scrollY - 90; // Desloca para cima 90px
        }
        return 0;
    }

    function scrollToSection(event) {
        event.preventDefault();
        const distanceFromTheTop = getDistanceFromTheTop(event.target);
        
        // Usar a rolagem suave nativa
        window.scrollTo({
            top: distanceFromTheTop,
            behavior: "smooth" // Rolagem suave
        });
    }

    menuLinks.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
});
