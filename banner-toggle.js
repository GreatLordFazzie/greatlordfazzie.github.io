function toggleNav() {
  const nav = document.querySelector('.banner-nav');
  nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleNav);
  }

  document.querySelectorAll('.banner-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.banner-nav')?.classList.remove('open');
    });
  });
});
