document.querySelectorAll('.mnav a').forEach((link) => {
  link.addEventListener('click', () => link.closest('details').removeAttribute('open'));
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const menu = document.querySelector('.mnav[open]');
    if (menu) {
      menu.removeAttribute('open');
      menu.querySelector('summary').focus();
    }
  }
});
