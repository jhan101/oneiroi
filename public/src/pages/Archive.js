// Portfolio page component
export class Archive {
  constructor() {
    this.currentFilter = "all";
    this.currentSort = "newest";
  }

  async render() {
    const app = document.getElementById("app");
    app.innerHTML = this.getTemplate();
    this.attachEventListeners();
    this.initializeFilters();
  }

  getTemplate() {
    return `
            <!-- Page Header -->
            <section class="hero-gradient text-white">
                <div class="section">
                    <div class="container text-center">
                        <h1 class="text-5xl md:text-6xl font-bold font-serif mb-6 slide-up">Portfolio</h1>
                        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto slide-up" style="animation-delay: 0.2s;">
                            Explore our creative journey, including current productions and upcoming projects
                        </p>
                    </div>
                </div>
            </section>

            <!-- Filter and Sort Controls -->
            <section class="section bg-white border-b border-gray-200">
                <div class="container">
                    <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <!-- Filters -->
                        <div class="flex flex-wrap items-center gap-4">
                            <span class="text-gray-600 font-medium">Filter by Type:</span>
                            <div class="flex flex-wrap gap-2">
                                <button class="filter-btn active" data-filter="all">All</button>
                                <button class="filter-btn" data-filter="in-progress">In Production</button>
                                <button class="filter-btn" data-filter="completed">Completed</button>
                                <button class="filter-btn" data-filter="planned">Planned</button>
                                <button class="filter-btn" data-filter="commercial">Commercial</button>
                                <button class="filter-btn" data-filter="artistic">Artistic</button>
                            </div>
                        </div>
                        
                        <!-- Sort Controls -->
                        <div class="flex items-center gap-4">
                            <span class="text-gray-600 font-medium">Sort by:</span>
                            <select id="sort-select" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500">
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="name">Name</option>
                                <option value="duration">Duration</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Works Grid -->
            <section class="section bg-gray-50">
                <div class="container">
                    <!-- Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-primary-800 mb-1">1</div>
                            <div class="text-sm text-gray-600">In Production</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-accent-600 mb-1">0</div>
                            <div class="text-sm text-gray-600">Completed</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-600 mb-1">3</div>
                            <div class="text-sm text-gray-600">Planned</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-600 mb-1">15+</div>
                            <div class="text-sm text-gray-600">Concepts</div>
                        </div>
                    </div>
                    
                    <!-- Works Grid -->
                    <div id="works-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${this.generateWorksGrid()}
                    </div>
                    
                    <!-- Empty State -->
                    <div id="empty-state" class="text-center py-16 hidden">
                        <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
                        <h3 class="text-xl font-bold text-gray-600 mb-2">找不到符合條件的作品</h3>
                        <p class="text-gray-500">請嘗試調整篩選條件或排序方式</p>
                    </div>
                </div>
            </section>

            <!-- Upcoming Projects -->
            <section class="section bg-white">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-6">即將推出</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            我們正在開發的新項目，期待與您分享更多創意構想
                        </p>
                    </div>
                    
                    <div class="max-w-4xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="card p-6">
                                <div class="flex items-start space-x-4">
                                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-lightbulb text-blue-600"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold mb-2">實驗性短片系列</h3>
                                        <p class="text-gray-600 text-sm mb-3">
                                            探索不同拍攝技法和視覺風格的系列作品，每部約5-10分鐘。
                                        </p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <i class="fas fa-calendar mr-2"></i>
                                            <span>預計開始：2024年夏季</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card p-6">
                                <div class="flex items-start space-x-4">
                                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-globe text-green-600"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold mb-2">國際合作項目</h3>
                                        <p class="text-gray-600 text-sm mb-3">
                                            與海外製作團隊合作的跨文化題材長片，融合東西方美學。
                                        </p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <i class="fas fa-calendar mr-2"></i>
                                            <span>預計開始：2024年秋季</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card p-6">
                                <div class="flex items-start space-x-4">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-vr-cardboard text-purple-600"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold mb-2">VR 沉浸式體驗</h3>
                                        <p class="text-gray-600 text-sm mb-3">
                                            結合虛擬實境技術的互動式影片體驗，讓觀眾成為故事的一部分。
                                        </p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <i class="fas fa-calendar mr-2"></i>
                                            <span>概念開發中</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card p-6">
                                <div class="flex items-start space-x-4">
                                    <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-music text-red-600"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold mb-2">音樂錄影帶系列</h3>
                                        <p class="text-gray-600 text-sm mb-3">
                                            與獨立音樂人合作，創作具有電影質感的音樂錄影帶作品。
                                        </p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <i class="fas fa-calendar mr-2"></i>
                                            <span>洽談中</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="section hero-gradient text-white">
                <div class="container text-center">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-4xl font-bold font-serif mb-6">加入我們的創作之旅</h2>
                        <p class="text-xl mb-8 text-gray-200">
                            如果您有創意構想想要實現，或希望了解我們的創作過程，歡迎與我們聯絡。
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/about#contact" class="btn-primary bg-white text-primary-800 hover:bg-gray-100">
                                <i class="fas fa-envelope mr-2"></i>
                                討論合作
                            </a>
                            <a href="/feature" class="btn-secondary text-white border-white hover:bg-white hover:text-primary-800">
                                <i class="fas fa-star mr-2"></i>
                                查看特色作品
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                .filter-btn {
                    @apply px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200;
                }
                
                .filter-btn.active {
                    @apply bg-accent-500 text-white hover:bg-accent-600;
                }
                
                .work-card {
                    @apply card hover-scale cursor-pointer;
                    transition: all 0.3s ease;
                }
                
                .work-card.hidden {
                    display: none;
                }
                
                .status-badge {
                    @apply px-2 py-1 text-xs font-medium rounded-full;
                }
                
                .status-in-progress {
                    @apply bg-blue-100 text-blue-800;
                }
                
                .status-completed {
                    @apply bg-green-100 text-green-800;
                }
                
                .status-planned {
                    @apply bg-yellow-100 text-yellow-800;
                }
            </style>
        `;
  }

  generateWorksGrid() {
    const works = [
      {
        id: 1,
        title: "夢境邊界",
        type: "artistic",
        status: "in-progress",
        duration: "45分鐘",
        year: "2024",
        description:
          "探討現實與夢境界限的深度作品，運用獨特的視覺語言和象徵性鏡頭。",
        tags: ["劇情片", "藝術片", "實驗性"],
      },
      {
        id: 2,
        title: "城市印象",
        type: "artistic",
        status: "planned",
        duration: "20分鐘",
        year: "2024",
        description: "以詩意的鏡頭語言捕捉現代都市生活的多重面貌。",
        tags: ["紀錄片", "城市", "生活"],
      },
      {
        id: 3,
        title: "品牌形象廣告",
        type: "commercial",
        status: "planned",
        duration: "90秒",
        year: "2024",
        description: "為高端品牌製作的概念性廣告，融合商業需求與藝術表達。",
        tags: ["廣告", "商業", "品牌"],
      },
      {
        id: 4,
        title: "音樂實驗",
        type: "artistic",
        status: "planned",
        duration: "8分鐘",
        year: "2024",
        description: "結合音樂與視覺的實驗性作品，探索聲音與影像的關係。",
        tags: ["音樂", "實驗", "視覺"],
      },
    ];

    return works
      .map(
        (work) => `
            <div class="work-card" data-type="${work.type}" data-status="${
          work.status
        }" data-year="${work.year}" data-duration="${
          work.duration
        }" onclick="openWorkDetail(${work.id})">
                <div class="video-placeholder aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div class="text-center text-gray-600">
                        <i class="fas fa-play-circle text-4xl mb-2"></i>
                        <p class="text-sm">點擊查看詳情</p>
                    </div>
                </div>
                
                <div class="p-6">
                    <div class="flex items-start justify-between mb-3">
                        <h3 class="text-xl font-bold font-serif">${
                          work.title
                        }</h3>
                        <span class="status-badge status-${work.status}">
                            ${this.getStatusText(work.status)}
                        </span>
                    </div>
                    
                    <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                        ${work.description}
                    </p>
                    
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span class="flex items-center">
                            <i class="fas fa-clock mr-2"></i>
                            ${work.duration}
                        </span>
                        <span class="flex items-center">
                            <i class="fas fa-calendar mr-2"></i>
                            ${work.year}
                        </span>
                    </div>
                    
                    <div class="flex flex-wrap gap-2">
                        ${work.tags
                          .map(
                            (tag) => `
                            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                ${tag}
                            </span>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  getStatusText(status) {
    const statusMap = {
      "in-progress": "製作中",
      completed: "已完成",
      planned: "計劃中",
    };
    return statusMap[status] || status;
  }

  attachEventListeners() {
    // 篩選按鈕
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // 更新活動狀態
        filterBtns.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");

        // 設定篩選條件
        this.currentFilter = e.target.dataset.filter;
        this.applyFiltersAndSort();
      });
    });

    // 排序選擇器
    const sortSelect = document.getElementById("sort-select");
    sortSelect.addEventListener("change", (e) => {
      this.currentSort = e.target.value;
      this.applyFiltersAndSort();
    });

    // 全域函數：開啟作品詳情
    window.openWorkDetail = (workId) => {
      if (workId === 1) {
        // 如果是主要作品，導向特色頁面
        window.location.href = "/feature";
      } else {
        // 其他作品顯示詳情模態框或頁面
        alert(
          `作品 ${workId} 的詳細資訊將在此處顯示。您可以：\n- 創建詳細頁面\n- 顯示模態框\n- 展示更多媒體內容`
        );
      }
    };
  }

  initializeFilters() {
    // 初始應用篩選和排序
    this.applyFiltersAndSort();
  }

  applyFiltersAndSort() {
    const worksGrid = document.getElementById("works-grid");
    const workCards = worksGrid.querySelectorAll(".work-card");
    const emptyState = document.getElementById("empty-state");

    let visibleCount = 0;

    // 篩選邏輯
    workCards.forEach((card) => {
      let shouldShow = true;

      // 應用篩選條件
      if (this.currentFilter !== "all") {
        const cardType = card.dataset.type;
        const cardStatus = card.dataset.status;

        if (
          this.currentFilter === "commercial" ||
          this.currentFilter === "artistic"
        ) {
          shouldShow = cardType === this.currentFilter;
        } else {
          shouldShow = cardStatus === this.currentFilter;
        }
      }

      // 顯示或隱藏卡片
      if (shouldShow) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    // 應用排序
    this.sortCards(workCards);

    // 顯示空狀態
    if (visibleCount === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }

  sortCards(cards) {
    const cardsArray = Array.from(cards).filter(
      (card) => !card.classList.contains("hidden")
    );

    cardsArray.sort((a, b) => {
      switch (this.currentSort) {
        case "newest":
          return parseInt(b.dataset.year) - parseInt(a.dataset.year);
        case "oldest":
          return parseInt(a.dataset.year) - parseInt(b.dataset.year);
        case "name":
          return a
            .querySelector("h3")
            .textContent.localeCompare(b.querySelector("h3").textContent);
        case "duration":
          // 簡單的持續時間排序（假設格式為 "XX分鐘"）
          const durationA = parseInt(a.dataset.duration);
          const durationB = parseInt(b.dataset.duration);
          return durationB - durationA;
        default:
          return 0;
      }
    });

    // 重新排列 DOM 元素
    const parent = cards[0].parentNode;
    cardsArray.forEach((card, index) => {
      parent.appendChild(card);
    });
  }

  cleanup() {
    // 清理全域函數
    if (window.openWorkDetail) {
      delete window.openWorkDetail;
    }
  }
}
