// 簡單的前端路由系統
import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";
import { Feature } from "./pages/Feature.js";
import { Archive } from "./pages/Archive.js";

class Router {
  constructor() {
    this.routes = {
      "/": Home,
      "/home": Home,
      "/about": About,
      "/feature": Feature,
      "/archive": Archive,
    };
    this.currentPage = null;
  }

  init() {
    // 載入當前路由
    this.handleRoute();
  }

  navigate(path) {
    // 更新瀏覽器歷史記錄
    window.history.pushState({}, "", path);
    this.handleRoute();
  }

  async handleRoute() {
    try {
      const path = window.location.pathname;
      const PageClass = this.routes[path] || this.routes["/"];

      // 如果是同一個頁面，不需要重新載入
      if (this.currentPage && this.currentPage.constructor === PageClass) {
        return;
      }

      // 清理當前頁面
      if (this.currentPage && this.currentPage.cleanup) {
        this.currentPage.cleanup();
      }

      // 顯示載入動畫
      this.showPageTransition();

      // 建立新頁面實例
      this.currentPage = new PageClass();

      // 渲染頁面
      await this.currentPage.render();

      // 更新頁面標題
      this.updatePageTitle(path);

      // 隱藏載入動畫
      this.hidePageTransition();

      // 滾動到頂部
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("路由處理錯誤:", error);
      this.show404();
    }
  }

  updatePageTitle(path) {
    const titles = {
      "/": "Oneiroi - Film Production Studio",
      "/home": "Oneiroi - Film Production Studio",
      "/about": "About - Oneiroi Film Production",
      "/feature": "Featured Work - Oneiroi Film Production",
      "/archive": "Portfolio - Oneiroi Film Production",
    };

    document.title = titles[path] || "Oneiroi - Film Production Studio";
  }

  showPageTransition() {
    const app = document.getElementById("app");
    app.style.opacity = "0.7";
    app.style.transition = "opacity 0.2s ease";
  }

  hidePageTransition() {
    const app = document.getElementById("app");
    app.style.opacity = "1";

    // 添加頁面載入動畫
    setTimeout(() => {
      app.classList.add("fade-in");
      setTimeout(() => {
        app.classList.remove("fade-in");
      }, 500);
    }, 100);
  }

  show404() {
    const app = document.getElementById("app");
    app.innerHTML = `
            <div class="section">
                <div class="container text-center">
                    <div class="max-w-md mx-auto">
                        <i class="fas fa-film text-6xl text-primary-400 mb-6"></i>
                        <h1 class="text-4xl font-bold mb-4">404</h1>
                        <h2 class="text-xl text-gray-600 mb-6">Page Not Found</h2>
                        <p class="text-gray-500 mb-8">
                            Sorry, the page you're looking for doesn't seem to exist.<br>
                            Let's get you back to exploring our work.
                        </p>
                        <a href="/" class="btn-primary">
                            <i class="fas fa-home mr-2"></i>
                            Back to Home
                        </a>
                    </div>
                </div>
            </div>
        `;
    this.hidePageTransition();
  }
}

// 匯出路由實例
export const router = new Router();
