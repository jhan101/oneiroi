# Assets Directory Structure

This directory is used to store media resources for the website. Please organize your files according to the following structure:

## 📁 Directory Overview

### `/images/` - Image Files

Store all image resources with recommended file formats and purposes:

#### Recommended Image Files:

- `logo.png` - Company logo (transparent background, recommended 200x60px)
- `hero-bg.jpg` - Homepage hero section background (recommended 1920x1080px)
- `about-team.jpg` - Team photo
- `feature-poster.jpg` - Main project poster

#### Stills Collection (recommended 1920x1080px):

- `still-01.jpg`
- `still-02.jpg`
- `still-03.jpg`
- ...(additional stills)

#### Behind-the-Scenes Photos (recommended 1200x800px):

- `bts-director.jpg` - Director working photo
- `bts-set.jpg` - On-set photography
- `bts-lighting.jpg` - Lighting setup
- `bts-team.jpg` - Team group photo

### `/videos/` - Video Files

Store video resources with recommended formats:

#### Main Videos:

- `main-trailer.mp4` - Main trailer (recommended 1080p, H.264 encoding)
- `bts-making.mp4` - Behind-the-scenes video (recommended 3-5 minutes)

#### Video Posters:

- `main-trailer-poster.jpg` - Trailer thumbnail
- `bts-making-poster.jpg` - Making-of video thumbnail

### `/documents/` - Document Files

Store related documents:

- `press-kit.pdf` - Media press kit
- `technical-specs.pdf` - Technical specifications document
- `company-profile.pdf` - Company profile

## 🎯 Usage Recommendations

### Image Optimization

- Use WebP format for better compression efficiency
- Provide 2x versions for high-resolution displays
- Compress images to improve loading speed

### Video Optimization

- Use H.264 encoding to ensure broad compatibility
- Provide multiple resolutions (720p, 1080p)
- Consider using HLS or DASH for adaptive streaming

### File Naming Convention

- Use English letters and numbers
- Separate words with hyphens (e.g., `main-trailer.mp4`)
- Avoid spaces and special characters

## 📝 Replacing Placeholders

In your components, find the following placeholders and replace with actual files:

```javascript
// In src/pages/Home.js
<div class="video-placeholder">
  <!-- Replace with: -->
  <img src="../assets/images/still-01.jpg" alt="Still 1" />
</div>

// In src/pages/Feature.js
<div class="video-placeholder">
  <!-- Replace with: -->
  <video controls poster="../assets/images/main-trailer-poster.jpg">
    <source src="../assets/videos/main-trailer.mp4" type="video/mp4">
    Your browser does not support video playback.
  </video>
</div>
```

## 🚀 Automation Tools

Consider using the following tools to automatically optimize your assets:

- **Image Compression**: TinyPNG, ImageOptim
- **Video Transcoding**: FFmpeg, HandBrake
- **Automated Workflows**: Gulp, Webpack

## 📱 Responsive Images

For optimal performance across devices, consider providing multiple image sizes:

```html
<!-- Responsive image example -->
<img
  src="../assets/images/hero-bg.jpg"
  srcset="
    ../assets/images/hero-bg-small.jpg   768w,
    ../assets/images/hero-bg-medium.jpg 1024w,
    ../assets/images/hero-bg-large.jpg  1920w
  "
  sizes="100vw"
  alt="Hero background"
/>
```

## 🎬 Video Guidelines

### Recommended Video Specifications:

- **Resolution**: 1920x1080 (1080p) minimum
- **Frame Rate**: 24fps or 30fps
- **Bitrate**: 5-8 Mbps for 1080p
- **Audio**: 48kHz, stereo
- **Container**: MP4 (H.264 + AAC)

### Video Poster Images:

- Same aspect ratio as video
- High-quality still frame from video
- Compressed for web (JPEG, 80-90% quality)

## 🔄 File Synchronization

This project uses an automatic file synchronization system. When you add files to the `assets/` directory:

1. Files are automatically copied to `public/assets/` during development
2. Use `npm run sync` to manually synchronize files
3. The `npm run dev` command includes automatic synchronization

## 📏 Size Guidelines

### Images:

- **Hero images**: 1920x1080px (16:9 ratio)
- **Thumbnails**: 400x300px (4:3 ratio)
- **Portraits**: 800x1200px (2:3 ratio)
- **Logos**: SVG preferred, or PNG with transparent background

### Videos:

- **Trailers**: Up to 100MB for web delivery
- **Behind-the-scenes**: Up to 200MB
- **Short clips**: 10-50MB

---

**Note**: Avoid committing large media files to version control. Consider using Git LFS or CDN services to manage large assets efficiently.

## 🌐 CDN Integration

For production environments, consider using a Content Delivery Network (CDN):

1. Upload assets to your CDN provider
2. Update file paths in components to use CDN URLs
3. Configure cache headers for optimal performance

Example CDN usage:

```javascript
// Instead of local path
src = "../assets/images/still-01.jpg";

// Use CDN URL
src = "https://cdn.yoursite.com/images/still-01.jpg";
```
