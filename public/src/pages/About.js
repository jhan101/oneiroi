// About page component
export class About {
  async render() {
    const app = document.getElementById("app");
    app.innerHTML = this.getTemplate();
    this.attachEventListeners();

    // Check if we need to scroll to contact section
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }

  getTemplate() {
    return `
            <!-- Page Header -->
            <section class="hero-gradient text-white">
                <div class="section">
                    <div class="container text-center">
                        <h1 class="text-5xl md:text-6xl font-bold font-serif mb-6 slide-up">About Oneiroi</h1>
                        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto slide-up" style="animation-delay: 0.2s;">
                            We are a group of film artists passionate about storytelling through the power of visual imagery
                        </p>
                    </div>
                </div>
            </section>

            <!-- Company Story -->
            <section class="section bg-white">
                <div class="container">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12">
                            <h2 class="text-4xl font-bold font-serif mb-6">Our Story</h2>
                        </div>
                        
                        <div class="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                            <p class="text-xl mb-8">
                                Oneiroi, named after the Greek gods of dreams, symbolizes our pursuit of creating dreamlike cinematic works.
                                Since our founding, we have firmly believed that every story deserves to be told with care, and every frame holds infinite possibilities.
                            </p>
                            
                            <p class="mb-6">
                                Our team consists of passionate filmmakers, including directors, cinematographers, editors, and colorists.
                                Each member brings extensive professional experience and a deep understanding of visual artistry. We not only pursue technical excellence
                                but also focus on the artistic value and emotional expression of our work.
                            </p>
                            
                            <p class="mb-6">
                                In this fast-paced era, we choose to slow down and focus on the perfect presentation of every detail.
                                From creative conception in pre-production, precise execution during filming, to meticulous color grading and editing in post-production,
                                we maintain the highest standards and purest intentions.
                            </p>
                            
                            <p>
                                While we don't yet have publicly released works, we are dedicating all our efforts to creating a deeply meaningful piece.
                                We believe that great works require time to mature and craftsmanship to refine. Please stay tuned for our upcoming debut.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Core Values -->
            <section class="section bg-gray-50">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-6">Core Values</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            These values guide every project we undertake and form the foundation of our client relationships.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-eye text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Visual Aesthetics</h3>
                            <p class="text-gray-600">
                                We pursue beauty in every frame, believing that visuals are the most direct language for conveying emotion.
                                From composition to color, from lighting to movement, every element is carefully designed.
                            </p>
                        </div>
                        
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-book-open text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Storytelling</h3>
                            <p class="text-gray-600">
                                Great stories are the soul of films. We focus on exploring the depth of narratives,
                                using visual language to convey complex emotions and thoughts to audiences.
                            </p>
                        </div>
                        
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-cogs text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Technical Innovation</h3>
                            <p class="text-gray-600">
                                We utilize the latest filming equipment and post-production techniques while continuously exploring new creative methods,
                                finding the most suitable technical solutions for each project.
                            </p>
                        </div>
                        
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-handshake text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Collaboration</h3>
                            <p class="text-gray-600">
                                We value deep collaboration with our clients, listening to every idea
                                and transforming client visions into compelling visual works.
                            </p>
                        </div>
                        
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-clock text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Quality Commitment</h3>
                            <p class="text-gray-600">
                                We would rather spend more time perfecting our craft than rush to deliver mediocre work.
                                Quality is our unwavering commitment.
                            </p>
                        </div>
                        
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-globe text-2xl text-accent-600"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Global Perspective</h3>
                            <p class="text-gray-600">
                                We stay attuned to international film trends, learning from excellent creative experiences worldwide
                                while maintaining deep expression of local culture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services -->
            <section class="section bg-white">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-6">Our Services</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            We provide comprehensive visual production services from creative conception to final delivery.
                        </p>
                    </div>
                    
                    <div class="max-w-4xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-video text-accent-600"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold mb-2">Film Production</h3>
                                    <p class="text-gray-600">
                                        From short films to features, from commercial advertisements to artistic creations, we provide comprehensive film production services.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-camera text-accent-600"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold mb-2">Photography Services</h3>
                                    <p class="text-gray-600">
                                        Professional photography services including portrait photography, product photography, and event documentation.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-cut text-accent-600"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold mb-2">Post-Production</h3>
                                    <p class="text-gray-600">
                                        Professional editing, color grading, and sound design to bring your films to cinema-quality standards.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-lightbulb text-accent-600"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold mb-2">Creative Consulting</h3>
                                    <p class="text-gray-600">
                                        Creative development, script development, and visual concept design for pre-production consulting services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="contact" class="section bg-gray-50">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-6">Contact Us</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            We'd love to discuss your creative ideas or collaboration opportunities. We look forward to hearing your story.
                        </p>
                    </div>
                    
                    <div class="max-w-6xl mx-auto">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <!-- Contact Info -->
                            <div>
                                <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
                                <div class="space-y-6">
                                    <div class="flex items-start space-x-4">
                                        <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <i class="fas fa-envelope text-accent-600"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold mb-1">Email</h4>
                                            <p class="text-gray-600">hello@oneiroi.film</p>
                                            <p class="text-gray-600">business@oneiroi.film</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start space-x-4">
                                        <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <i class="fas fa-phone text-accent-600"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold mb-1">Phone</h4>
                                            <p class="text-gray-600">+1 (555) 123-4567</p>
                                            <p class="text-gray-600">Monday - Friday 9:00 AM - 6:00 PM PST</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start space-x-4">
                                        <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <i class="fas fa-map-marker-alt text-accent-600"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold mb-1">Studio Address</h4>
                                            <p class="text-gray-600">123 Film District</p>
                                            <p class="text-gray-600">Los Angeles, CA 90028</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Social Media -->
                                <div class="mt-8">
                                    <h4 class="font-bold mb-4">Follow Us</h4>
                                    <div class="flex space-x-4">
                                        <a href="#" class="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 hover:bg-accent-500 hover:text-white transition-colors">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" class="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 hover:bg-accent-500 hover:text-white transition-colors">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                        <a href="#" class="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 hover:bg-accent-500 hover:text-white transition-colors">
                                            <i class="fab fa-vimeo-v"></i>
                                        </a>
                                        <a href="#" class="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 hover:bg-accent-500 hover:text-white transition-colors">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Contact Form -->
                            <div class="card p-8">
                                <h3 class="text-2xl font-bold mb-6">Send a Message</h3>
                                <form id="contact-form" class="space-y-6">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                            <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                            <input type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors">
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors">
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                                        <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors">
                                            <option value="">Please select project type</option>
                                            <option value="commercial">Commercial Advertisement</option>
                                            <option value="documentary">Documentary</option>
                                            <option value="short-film">Short Film</option>
                                            <option value="music-video">Music Video</option>
                                            <option value="event">Event Documentation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                        <textarea required rows="5" placeholder="Tell us about your ideas or project requirements..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors resize-vertical"></textarea>
                                    </div>
                                    
                                    <button type="submit" class="btn-primary w-full justify-center">
                                        <i class="fas fa-paper-plane mr-2"></i>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  attachEventListeners() {
    // Contact form submission handling
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    // Social media link handling
    const socialLinks = document.querySelectorAll('a[href="#"]');
    socialLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Please replace with actual social media links");
      });
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    // Here you can integrate actual form submission logic
    // For example: send to backend API or third-party service

    // Simple form validation and submission confirmation
    const formData = new FormData(e.target);
    const name =
      formData.get("name") ||
      e.target.querySelector('input[type="text"]').value;
    const email =
      formData.get("email") ||
      e.target.querySelector('input[type="email"]').value;
    const message =
      formData.get("message") || e.target.querySelector("textarea").value;

    if (name && email && message) {
      // Show success message
      alert("Thank you for your message! We will get back to you soon.");
      e.target.reset();
    } else {
      alert("Please fill in all required fields.");
    }
  }
}
