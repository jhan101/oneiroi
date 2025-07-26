# Oneiroi Film Production Website

A minimal, modern, and scalable website for a film production company, built with Vite and Tailwind CSS.

## Features

- **Vite:** Fast development server and build tool.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Vanilla JS:** No heavy frameworks, keeping the site lightweight and fast.
- **Client-side Routing:** A simple and effective routing solution using the browser's History API.
- **Dynamic Image Loading:** Images from the `assets/feature` and `assets/archive` directories are automatically loaded onto their respective pages.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/oneiroi.git
   cd oneiroi
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Development Server

To start the Vite development server, run:

```bash
npm run dev
```

This will start the server on `http://localhost:5173`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

The production-ready files will be located in the `dist` directory.

## Adding New Content

### Adding New Films to the Archive

1.  Add your film stills (in `.jpg` format) to the `assets/archive` directory.
2.  The images will be automatically displayed on the Archive page.

### Updating the Featured Film

1.  Replace the placeholder video `assets/feature-video.mp4` with your new featured film.
2.  Add your film stills (in `.jpg` format) to the `assets/feature` directory. The old stills can be removed.
3.  The new video and stills will be automatically displayed on the Feature page.

## Project Structure

```
. C:\Users\J\Desktop\Oneiroi
├───assets
│   ├───archive-placeholder1.jpg
│   ├───archive-placeholder2.jpg
│   ├───feature-placeholder.jpg
│   └───hero-placeholder.jpg
├───index.html
├───node_modules
├───package-lock.json
├───package.json
├───postcss.config.js
├───README.md
├───src
│   ├───assets
│   ├───components
│   │   ├───Footer.js
│   │   └───Navbar.js
│   ├───pages
│   │   ├───About.js
│   │   ├───Archive.js
│   │   ├───Feature.js
│   │   └───Home.js
│   ├───router.js
│   └───styles
│       └───main.css
└───tailwind.config.js
```