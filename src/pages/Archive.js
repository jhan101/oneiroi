import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

const images = import.meta.glob('/assets/archive/*.jpg', { eager: true });

export const Archive = () => {
  let archiveHTML = '';
  for (const path in images) {
    archiveHTML += `<img src="${images[path].default}" alt="Archive Image" class="w-full h-auto">`;
  }

  return `
    ${Navbar()}
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold">Archive</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="archive-grid">
        ${archiveHTML}
      </div>
    </div>
    ${Footer()}
  `;
};