// Home page component
export class Home {
  async render() {
    const app = document.getElementById("app");
    app.innerHTML = this.getTemplate();
    this.attachEventListeners();
  }

  getTemplate() {
    return `
            <!-- Hero Section -->
            <section class="hero-gradient text-white relative overflow-hidden">
                <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                <div class="relative section">
                    <div class="container text-center">
                        <div class="max-w-4xl mx-auto">
                            <h1 class="text-5xl md:text-7xl font-bold font-serif mb-6 text-shadow slide-up">
                                Welcome to Oneiroi
                            </h1>
                            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed slide-up" style="animation-delay: 0.2s;">
                                A professional film production company dedicated to creating cinematic works of artistic value
                            </p>
                            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 slide-up" style="animation-delay: 0.4s;">
                                <a href="/feature" class="btn-primary text-lg px-8 py-4">
                                    <i class="fas fa-play mr-2"></i>
                                    Explore Our Work
                                </a>
                                <a href="/about" class="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary-800">
                                    <i class="fas fa-info-circle mr-2"></i>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Scroll indicator -->
                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <i class="fas fa-chevron-down text-2xl text-white opacity-70"></i>
                </div>
            </section>

            <!-- Current Project Teaser -->
            <section class="section bg-white">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-4">Current Project</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            We are crafting a visually stunning and creatively ambitious new work. Stay tuned for updates.
                        </p>
                    </div>
                    
                    <div class="max-w-6xl mx-auto">
                        <div class="card overflow-hidden">
                            <div class="md:flex">
                                <!-- Project Image Placeholder -->
                                <div class="md:w-1/2">
                                    <div class="video-placeholder aspect-video md:aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                                        <div class="text-center text-primary-600">
                                            <i class="fas fa-film text-6xl mb-4"></i>
                                            <p class="text-lg font-medium">Project Trailer Coming Soon</p>
                                            <p class="text-sm mt-2">
                                                <!-- Add your trailer or stills here -->
                                                <!-- Supported formats: MP4, YouTube embed, Vimeo embed -->
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Project Info -->
                                <div class="md:w-1/2 p-8">
                                    <h3 class="text-2xl font-bold font-serif mb-4">"Boundaries of Dreams"</h3>
                                    <p class="text-gray-600 mb-6 leading-relaxed">
                                        An exploration of the boundaries between reality and dreams. Through exquisite visual effects and profound storytelling,
                                        we guide audiences into a world full of imagination and possibility.
                                    </p>
                                    
                                    <div class="space-y-4 mb-6">
                                        <div class="flex items-center text-sm text-gray-600">
                                            <i class="fas fa-calendar mr-3 text-accent-500"></i>
                                            <span>Expected completion: Spring 2024</span>
                                        </div>
                                        <div class="flex items-center text-sm text-gray-600">
                                            <i class="fas fa-clock mr-3 text-accent-500"></i>
                                            <span>Expected runtime: 45 minutes</span>
                                        </div>
                                        <div class="flex items-center text-sm text-gray-600">
                                            <i class="fas fa-tag mr-3 text-accent-500"></i>
                                            <span>Genre: Drama / Art Film</span>
                                        </div>
                                    </div>
                                    
                                    <a href="/feature" class="btn-primary">
                                        <i class="fas fa-arrow-right mr-2"></i>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Latest Stills Gallery -->
            <section class="section bg-gray-50">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-4">Latest Stills</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            Selected stills from our current project, showcasing our pursuit of visual artistry.
                        </p>
                    </div>
                    
                    <div class="media-grid max-w-6xl mx-auto">
                        ${this.generateStillsPlaceholders()}
                    </div>
                    
                    <div class="text-center mt-8">
                        <a href="/archive" class="btn-secondary">
                            <i class="fas fa-images mr-2"></i>
                            View Full Portfolio
                        </a>
                    </div>
                </div>
            </section>

            <!-- Company Values -->
            <section class="section bg-white">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-4">Our Philosophy</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            Oneiroi is committed to creating cinematic works that possess both depth and artistic value.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-palette text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Artistic Creation</h3>
                            <p class="text-gray-600">
                                Every frame is an embodiment of art. We pursue the perfect fusion of visual and emotional elements.
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-heart text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Emotional Resonance</h3>
                            <p class="text-gray-600">
                                We convey deep emotions through imagery, establishing genuine connections with our audience.
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-lightbulb text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Innovation</h3>
                            <p class="text-gray-600">
                                We employ innovative filming techniques and post-production technologies to create unique visual experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="section hero-gradient text-white">
                <div class="container text-center">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-4xl font-bold font-serif mb-6">Let's Create Stories Together</h2>
                        <p class="text-xl mb-8 text-gray-200">
                            If you have a creative vision you'd like to bring to life, or want to learn more about our services, we'd love to hear from you.
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/about#contact" class="btn-primary bg-white text-primary-800 hover:bg-gray-100">
                                <i class="fas fa-envelope mr-2"></i>
                                Contact Us
                            </a>
                            <a href="/about" class="btn-secondary text-white border-white hover:bg-white hover:text-primary-800">
                                <i class="fas fa-users mr-2"></i>
                                Meet the Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  generateStillsPlaceholders() {
    const placeholders = [];
    for (let i = 1; i <= 6; i++) {
      placeholders.push(`
                <div class="card hover-scale cursor-pointer" onclick="openImageModal(${i})">
                    <div class="video-placeholder aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div class="text-center text-gray-500">
                            <i class="fas fa-camera text-4xl mb-2"></i>
                            <p class="text-sm">Still ${i}</p>
                            <p class="text-xs mt-1">
                                <!-- Add actual stills here -->
                                <!-- Recommended size: 1920x1080 -->
                            </p>
                        </div>
                    </div>
                </div>
            `);
    }
    return placeholders.join("");
  }

  attachEventListeners() {
    // Smooth scroll to next section
    const scrollIndicator = document.querySelector(".fa-chevron-down");
    if (scrollIndicator) {
      scrollIndicator.addEventListener("click", () => {
        const nextSection = document.querySelector(".section:nth-child(2)");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Global function: Open image modal
    window.openImageModal = (imageId) => {
      // You can implement a lightbox effect here
      alert(
        `Image ${imageId} will be displayed here. You can implement lightbox effects or link to full-size images.`
      );
    };

    // Add scroll animations
    this.setupScrollAnimations();
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
        }
      });
    }, observerOptions);

    // Observe elements that need animation
    const animateElements = document.querySelectorAll(
      ".card, .text-center > h2, .text-center > p"
    );
    animateElements.forEach((el) => observer.observe(el));
  }

  cleanup() {
    // Clean up global functions
    if (window.openImageModal) {
      delete window.openImageModal;
    }
  }
}
