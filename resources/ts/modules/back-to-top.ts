
(() => {
    const btt = document.getElementById('btt');
    if (!btt) return;

    document.addEventListener('scroll', e => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            btt.classList.add('active');
        } else {
            btt.classList.remove('active');
        }
    });

    btt.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0
        });
    });
})();