(function() {
  // Get the current filename (last part of the path). Default to index.html for '/'
  const path = window.location.pathname;
  const current = path.split('/').pop() || 'index.html';

  const links = document.querySelectorAll('.header a');
  links.forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (!href) return;

    // If filenames match, mark active. Treat root ('') as index.html.
    if (href === current || (href === 'index.html' && (current === '' || current === 'index.html'))) {
      a.classList.add('active');
    }
  });
})();
