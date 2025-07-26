// 導航欄組件
export class Navbar {
  constructor() {
    this.isMenuOpen = false;
  }

  async render() {
    const navbar = document.getElementById("navbar");
    navbar.innerHTML = this.getTemplate();
    this.attachEventListeners();
  }

  getTemplate() {
    return `
            <div class="container">
                <div class="flex items-center justify-between py-4">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <a href="/" class="flex items-center space-x-3 text-2xl font-bold text-primary-800">
                            <i class="fas fa-film text-accent-500"></i>
                            <span class="font-serif">Oneiroi</span>
                        </a>
                    </div>

                    <!-- Desktop Navigation -->
                    <nav class="hidden md:flex items-center space-x-8">
                        <a href="/" class="nav-link ${this.isActiveLink(
                          "/"
                        )}">Home</a>
                        <a href="/about" class="nav-link ${this.isActiveLink(
                          "/about"
                        )}">About</a>
                        <a href="/feature" class="nav-link ${this.isActiveLink(
                          "/feature"
                        )}">Featured Work</a>
                        <a href="/archive" class="nav-link ${this.isActiveLink(
                          "/archive"
                        )}">Portfolio</a>
                    </nav>

                    <!-- Contact Button (Desktop) -->
                    <div class="hidden md:flex items-center">
                        <a href="/about#contact" class="btn-primary">
                            <i class="fas fa-envelope mr-2"></i>
                            Contact Us
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-toggle" class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors">
                        <i class="fas fa-bars text-xl text-primary-800"></i>
                    </button>
                </div>

                <!-- Mobile Navigation Menu -->
                <div id="mobile-menu" class="md:hidden transition-all duration-300 overflow-hidden ${
                  this.isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }">
                    <nav class="py-4 border-t border-gray-200">
                        <div class="flex flex-col space-y-4">
                            <a href="/" class="mobile-nav-link ${this.isActiveLink(
                              "/"
                            )}">
                                <i class="fas fa-home mr-3"></i>
                                Home
                            </a>
                            <a href="/about" class="mobile-nav-link ${this.isActiveLink(
                              "/about"
                            )}">
                                <i class="fas fa-info-circle mr-3"></i>
                                About
                            </a>
                            <a href="/feature" class="mobile-nav-link ${this.isActiveLink(
                              "/feature"
                            )}">
                                <i class="fas fa-star mr-3"></i>
                                Featured Work
                            </a>
                            <a href="/archive" class="mobile-nav-link ${this.isActiveLink(
                              "/archive"
                            )}">
                                <i class="fas fa-archive mr-3"></i>
                                Portfolio
                            </a>
                            <div class="pt-4 border-t border-gray-200">
                                <a href="/about#contact" class="btn-primary w-full justify-center">
                                    <i class="fas fa-envelope mr-2"></i>
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <style>
                .nav-link {
                    @apply text-gray-700 hover:text-primary-800 font-medium transition-colors duration-200 relative;
                }
                
                .nav-link.active {
                    @apply text-primary-800;
                }
                
                .nav-link.active::after {
                    content: '';
                    @apply absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500 rounded-full;
                }
                
                .mobile-nav-link {
                    @apply flex items-center px-4 py-3 text-gray-700 hover:text-primary-800 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200;
                }
                
                .mobile-nav-link.active {
                    @apply text-primary-800 bg-primary-50;
                }
            </style>
        `;
  }

  attachEventListeners() {
    // 手機選單切換
    const toggleButton = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = toggleButton.querySelector("i");

    toggleButton.addEventListener("click", () => {
      this.isMenuOpen = !this.isMenuOpen;

      if (this.isMenuOpen) {
        mobileMenu.classList.remove("max-h-0", "opacity-0");
        mobileMenu.classList.add("max-h-96", "opacity-100");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
      } else {
        mobileMenu.classList.remove("max-h-96", "opacity-100");
        mobileMenu.classList.add("max-h-0", "opacity-0");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    });

    // 點擊連結時關閉手機選單
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.isMenuOpen = false;
        mobileMenu.classList.remove("max-h-96", "opacity-100");
        mobileMenu.classList.add("max-h-0", "opacity-0");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      });
    });

    // 點擊外部區域關閉選單
    document.addEventListener("click", (e) => {
      if (
        this.isMenuOpen &&
        !document.getElementById("navbar").contains(e.target)
      ) {
        this.isMenuOpen = false;
        mobileMenu.classList.remove("max-h-96", "opacity-100");
        mobileMenu.classList.add("max-h-0", "opacity-0");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    });
  }

  isActiveLink(path) {
    const currentPath = window.location.pathname;
    if (path === "/" && (currentPath === "/" || currentPath === "/home")) {
      return "active";
    }
    return currentPath === path ? "active" : "";
  }

  // 更新活動連結狀態（在路由變更時調用）
  updateActiveLink() {
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.remove("active");

      if (this.isActiveLink(href) === "active") {
        link.classList.add("active");
      }
    });
  }
}
