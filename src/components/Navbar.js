export const Navbar = () => {
  return `
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between">
        <a href="/" data-link class="text-white text-lg">Oneiroi</a>
        <div>
          <a href="/about" data-link class="text-gray-300 hover:text-white px-3">About</a>
          <a href="/feature" data-link class="text-gray-300 hover:text-white px-3">Feature</a>
          <a href="/archive" data-link class="text-gray-300 hover:text-white px-3">Archive</a>
        </div>
      </div>
    </nav>
  `;
};