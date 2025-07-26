// 主要應用程式入口點
import { router } from "./router.js";
import { Navbar } from "./components/Navbar.js";
import { Footer } from "./components/Footer.js";

class App {
  constructor() {
    this.init();
  }

  async init() {
    try {
      // 顯示載入中畫面
      this.showLoading();

      // 初始化組件
      await this.initializeComponents();

      // 初始化路由
      this.initializeRouter();

      // 設定事件監聽器
      this.setupEventListeners();

      // 隱藏載入中畫面
      this.hideLoading();

      console.log("Oneiroi 電影製作網站已成功載入");
    } catch (error) {
      console.error("應用程式初始化失敗:", error);
      this.showError("應用程式載入失敗，請重新整理頁面。");
    }
  }

  async initializeComponents() {
    // 初始化導航欄
    const navbar = new Navbar();
    await navbar.render();

    // 初始化頁尾
    const footer = new Footer();
    await footer.render();
  }

  initializeRouter() {
    // 設定路由並載入當前頁面
    router.init();

    // 監聽瀏覽器前進/後退按鈕
    window.addEventListener("popstate", () => {
      router.handleRoute();
    });
  }

  setupEventListeners() {
    // 處理所有內部連結的點擊事件
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="/"], a[href^="#/"]');
      if (link && !link.hasAttribute("target")) {
        e.preventDefault();
        const path = link.getAttribute("href").replace("#", "");
        router.navigate(path);
      }
    });

    // 滾動事件處理（用於導航欄樣式）
    window.addEventListener("scroll", this.handleScroll.bind(this));

    // 響應式處理
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleScroll() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  }

  handleResize() {
    // 處理響應式布局調整
    const isMobile = window.innerWidth < 768;
    document.body.classList.toggle("is-mobile", isMobile);
  }

  showLoading() {
    const loading = document.getElementById("loading");
    loading.classList.remove("hidden");
  }

  hideLoading() {
    const loading = document.getElementById("loading");
    loading.classList.add("hidden");
  }

  showError(message) {
    this.hideLoading();
    const app = document.getElementById("app");
    app.innerHTML = `
            <div class="section">
                <div class="container text-center">
                    <div class="max-w-md mx-auto">
                        <i class="fas fa-exclamation-triangle text-6xl text-red-500 mb-4"></i>
                        <h2 class="text-2xl font-bold mb-4">出現錯誤</h2>
                        <p class="text-gray-600 mb-6">${message}</p>
                        <button onclick="location.reload()" class="btn-primary">
                            <i class="fas fa-refresh mr-2"></i>
                            重新載入
                        </button>
                    </div>
                </div>
            </div>
        `;
  }
}

// 工具函數
export const utils = {
  // 格式化日期
  formatDate(date) {
    return new Intl.DateTimeFormat("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  },

  // 防抖函數
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // 載入圖片
  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  },

  // 動畫工具
  animate(element, animation, duration = 500) {
    return new Promise((resolve) => {
      element.style.animationDuration = `${duration}ms`;
      element.classList.add(animation);

      const handleAnimationEnd = () => {
        element.classList.remove(animation);
        element.removeEventListener("animationend", handleAnimationEnd);
        resolve();
      };

      element.addEventListener("animationend", handleAnimationEnd);
    });
  },
};

// 啟動應用程式
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
