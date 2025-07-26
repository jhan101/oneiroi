# Oneiroi Film Production Studio Website

A modern, responsive website designed for an emerging professional film production company. The site features clean design, intuitive navigation, and a scalable architecture optimized for future content expansion.

## ✨ Key Features

- 🎬 **Modern Design** - Clean, professional appearance using Tailwind CSS
- 📱 **Responsive Design** - Perfect display across desktop, tablet, and mobile devices
- 🚀 **Single Page Application** - Fast page transitions using JavaScript routing
- 🎯 **Easy to Update** - Modular component architecture for convenient content management
- 🖼️ **Media Support** - Complete infrastructure ready for video and image content
- ♿ **Accessible Design** - Follows modern web accessibility standards
- 🎨 **Smooth Animations** - Seamless page transitions and scroll animations

## 📁 Project Structure

```
oneiroi/
├── public/
│   ├── index.html          # Main HTML file
│   └── css/               # Compiled CSS files
├── src/
│   ├── main.js            # Main application entry point
│   ├── router.js          # Frontend routing system
│   ├── components/        # Reusable components
│   │   ├── Navbar.js      # Navigation component
│   │   └── Footer.js      # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.js        # Homepage
│   │   ├── About.js       # About page
│   │   ├── Feature.js     # Featured work page
│   │   └── Archive.js     # Portfolio page
│   └── styles/
│       └── main.css       # Main stylesheet
├── assets/                # Media assets (create as needed)
│   ├── images/            # Image files
│   ├── videos/            # Video files
│   └── documents/         # Document files
├── sync-files.js          # File synchronization script
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

Use the following command to start the development server:

```bash
# Compile CSS, sync files, and start server concurrently
npm run dev

# Or run individually:
npm run build-css  # Compile Tailwind CSS
npm run sync       # Sync source files to public directory
npm start         # Start live-server
```

### 3. Open Browser

The server will start at `http://localhost:3000` and automatically open in your browser.

## 📄 Page Overview

### Home (/)

- Welcome message and company introduction
- Current project teaser
- Latest stills gallery
- Company philosophy showcase

### About (/about)

- Company story and background
- Core values presentation
- Services overview
- Contact information and form

### Featured Work (/feature)

- Detailed showcase of main project "Boundaries of Dreams"
- Behind-the-scenes content
- Stills gallery
- Technical specifications

### Portfolio (/archive)

- Grid display of all works
- Filter and sort functionality
- Upcoming project previews

## 🎨 Customization Guide

### Update Brand Information

1. **Company Name and Logo**: Edit `src/components/Navbar.js` and `src/components/Footer.js`
2. **Contact Information**: Update contact details in `src/pages/About.js`
3. **Project Information**: Modify project descriptions in `src/pages/Home.js` and `src/pages/Feature.js`

### Adding Media Content

#### Images

1. Place images in the `assets/images/` directory
2. Replace placeholders in corresponding components:
   ```javascript
   // Replace placeholder
   <div class="video-placeholder">
   // With actual image
   <img src="../assets/images/your-image.jpg" alt="Description">
   ```

#### Videos

Multiple video formats are supported:

**YouTube Embed:**

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen
>
</iframe>
```

**Vimeo Embed:**

```html
<iframe
  src="https://player.vimeo.com/video/VIDEO_ID"
  frameborder="0"
  allowfullscreen
>
</iframe>
```

**Self-hosted Video:**

```html
<video controls poster="poster.jpg">
  <source src="../assets/videos/your-video.mp4" type="video/mp4" />
  Your browser does not support video playback.
</video>
```

### Style Customization

#### Color Theme

Edit color settings in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Modify primary colors
    500: '#your-color',
    // ...
  },
  accent: {
    // Modify accent colors
    500: '#your-accent-color',
    // ...
  }
}
```

#### Fonts

1. Add Google Fonts links in `public/index.html`
2. Update font settings in `tailwind.config.js`

### Feature Extensions

#### Adding New Pages

1. Create new page component in `src/pages/`
2. Register new route in `src/router.js`
3. Add links in navigation components

#### Backend API Integration

Use `fetch` API in components:

```javascript
// Example: Submit contact form
async handleFormSubmit(formData) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        // Handle response
    } catch (error) {
        console.error('Submission failed:', error);
    }
}
```

## 🛠️ Build and Deployment

### Build for Production

```bash
npm run build
```

This generates optimized CSS files in the `public/css/` directory.

### Deployment Options

#### Static Hosting (Recommended)

- **Netlify**: Direct Git repository connection
- **Vercel**: Supports automatic deployment
- **GitHub Pages**: Free static hosting

#### Traditional Hosting

Upload the `public/` and `src/` directories to your web host.

## 📝 Content Update Checklist

Before adding actual content, check the following items:

### Text Content

- [ ] Update company introduction and story
- [ ] Modify contact information (phone, email, address)
- [ ] Update project descriptions and timelines
- [ ] Replace example text with actual content

### Media Files

- [ ] Add company logo
- [ ] Upload project stills (recommended 1920x1080)
- [ ] Prepare video content or trailers
- [ ] Add behind-the-scenes photos

### SEO and Social Media

- [ ] Update meta tags in `public/index.html`
- [ ] Add Open Graph tags
- [ ] Set up actual social media links
- [ ] Create favicon icons

### Forms and Interactions

- [ ] Set up contact form backend processing
- [ ] Test all links and navigation
- [ ] Check responsive design on various devices

## 🔧 Troubleshooting

### Common Issues

**CSS Styles Not Loading**

- Ensure `npm run build-css` has been executed
- Check if `public/css/style.css` file exists

**JavaScript Errors**

- Open browser developer tools to view error messages
- Confirm all file paths are correct

**Pages Not Loading**

- Check route configuration in `src/router.js`
- Ensure page components are properly exported

**File Synchronization Issues**

- Run `node sync-files.js` manually
- Check if `src/` and `assets/` directories exist in `public/`

## 📞 Technical Support

If you need assistance or have any questions:

1. Check error messages in browser developer tools
2. Review the troubleshooting section in this README
3. Confirm all file paths and configurations are correct

## 🚀 Development Workflow

### File Synchronization

The project uses a custom synchronization script (`sync-files.js`) to copy source files to the public directory:

- **Manual sync**: `npm run sync`
- **Watch mode**: `npm run sync-watch`
- **Development mode**: `npm run dev` (includes auto-sync)

### CSS Compilation

Tailwind CSS is compiled using:

- **One-time build**: `npm run build-css`
- **Watch mode**: `npm run build-css-watch`

## 📄 License

This project is specifically designed for Oneiroi Film Production Studio. Feel free to modify and use according to your needs.

---

**Recommended Next Steps:**

1. Install dependencies and start the development server
2. Replace example content with your actual content
3. Upload media files to the `assets/` directory
4. Customize colors and styles to match your brand identity
5. Set up backend processing for contact forms
6. Test all functionality and prepare for deployment

## 🌟 Additional Features

- **Automatic file synchronization** between `src/` and `public/` directories
- **Watch mode** for both CSS compilation and file synchronization
- **Modular component architecture** for easy maintenance
- **Mobile-first responsive design**
- **Optimized for performance** with minimal JavaScript
- **SEO-ready** with proper meta tags and semantic HTML
