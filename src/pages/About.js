import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

export const About = () => {
  return `
    ${Navbar()}
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold">About Oneiroi</h1>
      <p class="mt-4">Oneiroi is a film production company dedicated to creating visually stunning and emotionally resonant films.</p>
      <h2 class="text-2xl font-bold mt-8">Contact Us</h2>
      <p class="mt-4">For inquiries, please contact us at <a href="mailto:info@oneiroi.com" class="text-blue-500">info@oneiroi.com</a></p>
    </div>
    ${Footer()}
  `;
};
