const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
        revealElements.forEach((element) => element.classList.add('reveal-visible'));
    } else {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.18,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        revealElements.forEach((element) => revealObserver.observe(element));
    }
}