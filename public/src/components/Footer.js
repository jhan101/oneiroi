// Footer component
export class Footer {
  async render() {
    const footer = document.getElementById("footer");
    footer.innerHTML = this.getTemplate();
    this.attachEventListeners();
  }

  getTemplate() {
    const currentYear = new Date().getFullYear();

    return `
            <div class="section">
                <div class="container">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        <!-- Company Info -->
                        <div class="lg:col-span-2">
                            <div class="flex items-center space-x-3 mb-4">
                                <i class="fas fa-film text-2xl text-accent-500"></i>
                                <span class="text-2xl font-bold font-serif">Oneiroi</span>
                            </div>
                            <p class="text-gray-300 mb-4 leading-relaxed">
                                Oneiroi is a professional film production company dedicated to creating cinematic works of artistic value.
                                We believe every story deserves to be told with care, and every frame holds infinite possibilities.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#" class="social-link" title="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-link" title="YouTube">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a href="#" class="social-link" title="Vimeo">
                                    <i class="fab fa-vimeo-v"></i>
                                </a>
                                <a href="#" class="social-link" title="Facebook">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="/" class="footer-link">Home</a></li>
                                <li><a href="/about" class="footer-link">About</a></li>
                                <li><a href="/feature" class="footer-link">Featured Work</a></li>
                                <li><a href="/archive" class="footer-link">Portfolio</a></li>
                            </ul>
                        </div>

                        <!-- Contact Info -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Contact Information</h3>
                            <div class="space-y-3">
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-envelope text-accent-500 mt-1"></i>
                                    <div>
                                        <p class="text-gray-300">Email</p>
                                        <a href="mailto:hello@oneiroi.film" class="footer-link">
                                            hello@oneiroi.film
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-phone text-accent-500 mt-1"></i>
                                    <div>
                                        <p class="text-gray-300">Phone</p>
                                        <a href="tel:+1-555-123-4567" class="footer-link">
                                            +1 (555) 123-4567
                                        </a>
                                    </div>
                                </div>
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-map-marker-alt text-accent-500 mt-1"></i>
                                    <div>
                                        <p class="text-gray-300">Address</p>
                                        <p class="text-gray-400 text-sm">
                                            123 Film District<br>
                                            Los Angeles, CA 90028
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="border-t border-gray-700 pt-8">
                        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div class="text-gray-400 text-sm text-center md:text-left">
                                <p>&copy; ${currentYear} Oneiroi Film Production. All rights reserved.</p>
                            </div>
                            <div class="flex items-center space-x-6 text-sm">
                                <a href="#" class="footer-link">Privacy Policy</a>
                                <a href="#" class="footer-link">Terms of Service</a>
                                <a href="#" class="footer-link">Cookie Policy</a>
                            </div>
                        </div>
                        
                        <!-- Back to Top Button -->
                        <div class="flex justify-center mt-8">
                            <button id="back-to-top" class="bg-primary-700 hover:bg-primary-600 text-white p-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                                <i class="fas fa-arrow-up"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .social-link {
                    @apply w-10 h-10 bg-gray-700 hover:bg-accent-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200;
                }
                
                .footer-link {
                    @apply text-gray-400 hover:text-white transition-colors duration-200;
                }
                
                .footer-link:hover {
                    @apply underline;
                }
            </style>
        `;
  }

  attachEventListeners() {
    // Back to top button
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    // Social media link click notifications (since these are example links)
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // Replace with actual social media links
        alert("Please replace with actual social media links");
      });
    });

    // Legal page link click notifications
    const legalLinks = document.querySelectorAll('a[href="#"]');
    legalLinks.forEach((link) => {
      if (
        link.textContent.includes("Privacy Policy") ||
        link.textContent.includes("Terms of Service") ||
        link.textContent.includes("Cookie Policy")
      ) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          alert(
            "These legal document pages have not been created yet. Please add them as needed."
          );
        });
      }
    });
  }
}
