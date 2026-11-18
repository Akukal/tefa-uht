
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
function closeNavigation() {
  if (!menuToggle || !mainNav) return;
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', closeNavigation));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeNavigation();
  });
}

document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', event => {
    if (window.matchMedia('(max-width: 720px)').matches) {
      const dropdown = trigger.closest('.nav-dropdown');
      if (dropdown && !dropdown.classList.contains('open')) {
        event.preventDefault();
        dropdown.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    }
  });
});

document.querySelectorAll('.product-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.product-tab').forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      card.classList.toggle('hide', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});
document.querySelectorAll('.demo-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const success = form.querySelector('.form-success');
    if (success) {
      success.classList.add('show');
      success.scrollIntoView({behavior:'smooth', block:'nearest'});
    }
    form.reset();
  });
});

if (window.lucide) window.lucide.createIcons();
