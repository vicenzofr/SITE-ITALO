document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const caixa = document.querySelector('.caixa');
        if (window.scrollY > 50) { // Quando rolar mais de 50px
            caixa.classList.add('scroll-active');
        } else {
            caixa.classList.remove('scroll-active');
        }
    });
});
