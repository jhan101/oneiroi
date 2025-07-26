import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Feature } from './pages/Feature.js';
import { Archive } from './pages/Archive.js';

const routes = {
  '/': Home,
  '/about': About,
  '/feature': Feature,
  '/archive': Archive,
};

const rootDiv = document.getElementById('app');

export const router = (pathname) => {
  if (routes[pathname]) {
    rootDiv.innerHTML = routes[pathname]();
  } else {
    rootDiv.innerHTML = `<h1>404 Not Found</h1>`;
  }
};

window.addEventListener('popstate', () => {
  router(window.location.pathname);
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      history.pushState('', '', e.target.href);
      router(window.location.pathname);
    }
  });
  router(window.location.pathname);
});
