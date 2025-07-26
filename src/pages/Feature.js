import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

const images = import.meta.glob('/assets/feature/*.jpg', { eager: true });

export const Feature = () => {
  let stillsHTML = '';
  for (const path in images) {
    stillsHTML += `<img src="${images[path].default}" alt="Still" class="w-full h-auto">`;
  }

  return `
    ${Navbar()}
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold">Featured Film</h1>
      <video controls class="w-full h-auto my-4">
        <source src="/assets/feature-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h2 class="text-2xl font-bold mt-8">Stills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="feature-stills">
        ${stillsHTML}
      </div>
    </div>
    ${Footer()}
  `;
};