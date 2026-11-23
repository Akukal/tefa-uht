(() => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            toggle.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
        });
        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    nav.classList.remove('open');
                    toggle.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    document.querySelectorAll('form.demo-form').forEach(form => {
        const submit = form.querySelector('button[type="submit"]');
        const success = form.querySelector('.form-success');
        const error = document.createElement('div');
        error.className = 'form-error';
        error.setAttribute('role', 'alert');
        error.textContent = 'Check required fields before sending.';
        form.insertBefore(error, success);

        form.addEventListener('submit', e => {
            e.preventDefault();
            error.classList.remove('show');
            success?.classList.remove('show');

            if (!form.checkValidity()) {
                error.classList.add('show');
                form.reportValidity();
                return;
            }

            submit.disabled = true;
            submit.setAttribute('aria-busy', 'true');
            submit.dataset.label = submit.textContent;
            submit.textContent = 'Sending...';

            window.setTimeout(() => {
                submit.disabled = false;
                submit.removeAttribute('aria-busy');
                submit.textContent = submit.dataset.label;
                success?.classList.add('show');
                form.reset();
                success?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 350);
        });
    });
})();