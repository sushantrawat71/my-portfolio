document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('siteHeader');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = [...document.querySelectorAll('.nav-link')];
    const sections = [...document.querySelectorAll('main section[id]')];
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    const closeMenu = () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
        document.body.classList.remove('menu-open');
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.classList.toggle('active', !isOpen);
        navMenu.classList.toggle('active', !isOpen);
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
        document.body.classList.toggle('menu-open', !isOpen);
    });
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
            menuToggle.focus();
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 860) closeMenu();
    });

    const updateNavigation = () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        const marker = window.scrollY + 160;
        let current = sections[0]?.id;
        sections.forEach((section) => {
            if (section.offsetTop <= marker) current = section.id;
        });
        navLinks.forEach((link) => {
            const active = link.getAttribute('href') === `#${current}`;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
    };
    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver((entries, instance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    instance.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add('visible'));
    }

    const rules = {
        name: (value) => value.length >= 2 ? '' : 'Please enter at least 2 characters.',
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address.',
        subject: (value) => value.length >= 3 ? '' : 'Please enter a subject.',
        message: (value) => value.length >= 10 ? '' : 'Please enter at least 10 characters.'
    };
    const validateField = (field) => {
        const message = rules[field.id](field.value.trim());
        const error = document.getElementById(`${field.id}Error`);
        error.textContent = message;
        field.classList.toggle('invalid', Boolean(message));
        field.setAttribute('aria-invalid', String(Boolean(message)));
        if (message) field.setAttribute('aria-describedby', error.id);
        else field.removeAttribute('aria-describedby');
        return !message;
    };
    Object.keys(rules).forEach((id) => {
        const field = document.getElementById(id);
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.getAttribute('aria-invalid') === 'true') validateField(field);
        });
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const fields = Object.keys(rules).map((id) => document.getElementById(id));
        const isValid = fields.map(validateField).every(Boolean);
        if (!isValid) {
            fields.find((field) => field.getAttribute('aria-invalid') === 'true')?.focus();
            formStatus.textContent = 'Please correct the highlighted fields.';
            formStatus.classList.remove('valid');
            return;
        }
        formStatus.textContent = 'Your message is valid, but this form is in demo mode and was not sent. Please use the email link beside the form.';
        formStatus.classList.add('valid');
    });
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
