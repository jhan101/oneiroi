import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

export const Home = () => {
  return `
    ${Navbar()}
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold">Upcoming Film</h1>
      <img src="/assets/hero-placeholder.jpg" alt="Upcoming Film" class="w-full h-auto my-4">
      <h2 class="text-2xl font-bold mt-8">Latest Stills</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/assets/archive-placeholder1.jpg" alt="Still 1" class="w-full h-auto">
        <img src="/assets/archive-placeholder2.jpg" alt="Still 2" class="w-full h-auto">
        <img src="/assets/feature-placeholder.jpg" alt="Still 3" class="w-full h-auto">
      </div>
    </div>
    ${Footer()}
  `;
};
