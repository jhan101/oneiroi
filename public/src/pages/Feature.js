// Featured Work page component
export class Feature {
  async render() {
    const app = document.getElementById("app");
    app.innerHTML = this.getTemplate();
    this.attachEventListeners();
  }

  getTemplate() {
    return `
            <!-- Page Header -->
            <section class="hero-gradient text-white">
                <div class="section">
                    <div class="container text-center">
                        <h1 class="text-5xl md:text-6xl font-bold font-serif mb-6 slide-up">Featured Work</h1>
                        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto slide-up" style="animation-delay: 0.2s;">
                            Showcasing our carefully crafted projects and creative vision
                        </p>
                    </div>
                </div>
            </section>

            <!-- Featured Project -->
            <section class="section bg-white">
                <div class="container">
                    <div class="max-w-6xl mx-auto">
                        <!-- Project Hero -->
                        <div class="card overflow-hidden mb-12">
                            <div class="relative">
                                <!-- Main Video/Image Placeholder -->
                                <div class="video-placeholder aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                                    <div class="text-center text-primary-600">
                                        <i class="fas fa-play-circle text-8xl mb-4 cursor-pointer hover:text-primary-800 transition-colors" id="main-video-play"></i>
                                        <h3 class="text-2xl font-bold mb-2">"Boundaries of Dreams" Trailer</h3>
                                        <p class="text-lg">
                                            <!-- Embed YouTube or Vimeo videos here -->
                                            <!-- Example: <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... -->
                                            <!-- Or self-hosted video: <video controls poster="poster.jpg"> -->
                                        </p>
                                    </div>
                                </div>
                                
                                <!-- Play Button Overlay -->
                                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300">
                                    <!-- 實際影片播放按鈕會在這裡 -->
                                </div>
                            </div>
                        </div>

                        <!-- Project Info -->
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                            <div class="lg:col-span-2">
                                <h2 class="text-4xl font-bold font-serif mb-6">"Boundaries of Dreams"</h2>
                                <div class="prose prose-lg text-gray-600 leading-relaxed">
                                    <p class="text-xl mb-6">
                                        This is an in-depth work exploring the boundaries between reality and dreams. Through exquisite visual effects and profound storytelling,
                                        we guide audiences into a world filled with imagination and philosophical contemplation.
                                    </p>
                                    
                                    <p class="mb-6">
                                        The story follows a young artist who gradually becomes lost in his own dreams during the creative process,
                                        as the boundaries between reality and fantasy become increasingly blurred. Through unique visual language and symbolic cinematography,
                                        we explore the inner struggles and pursuits of creators.
                                    </p>
                                    
                                    <p class="mb-6">
                                        The film employs extensive practical effects and innovative filming techniques, including multiple exposures, anti-gravity shooting,
                                        and a distinctive color grading style. Every frame is carefully designed to achieve the perfect fusion of art and technology.
                                    </p>
                                    
                                    <p>
                                        The film is currently in post-production, and we maintain extremely strict standards for every detail,
                                        hoping to provide audiences with an unforgettable visual and spiritual experience.
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Project Details -->
                            <div>
                                <div class="card p-6">
                                    <h3 class="text-xl font-bold mb-4">Production Information</h3>
                                    <div class="space-y-4 text-sm">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Genre</span>
                                            <span class="font-medium">Drama / Art Film</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Runtime</span>
                                            <span class="font-medium">45 minutes</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Production Period</span>
                                            <span class="font-medium">2023-2024</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Format</span>
                                            <span class="font-medium">4K RAW</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Locations</span>
                                            <span class="font-medium">Los Angeles, CA</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Expected Completion</span>
                                            <span class="font-medium">Spring 2024</span>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-6 pt-6 border-t border-gray-200">
                                        <h4 class="font-bold mb-3">Festival Targets</h4>
                                        <ul class="text-sm text-gray-600 space-y-1">
                                            <li>• Sundance Film Festival</li>
                                            <li>• Cannes Short Film Corner</li>
                                            <li>• SXSW Film Festival</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Behind the Scenes -->
            <section class="section bg-gray-50">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-6">幕後花絮</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            深入了解我們的創作過程和製作理念
                        </p>
                    </div>
                    
                    <div class="max-w-6xl mx-auto">
                        <!-- BTS Video -->
                        <div class="card overflow-hidden mb-8">
                            <div class="video-placeholder aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div class="text-center text-gray-600">
                                    <i class="fas fa-video text-6xl mb-4"></i>
                                    <h3 class="text-xl font-bold mb-2">製作花絮影片</h3>
                                    <p class="text-sm">
                                        <!-- 在此處添加幕後花絮影片 -->
                                        <!-- 建議：3-5分鐘的製作過程紀錄 -->
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- BTS Gallery -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            ${this.generateBTSGallery()}
                        </div>
                    </div>
                </div>
            </section>

            <!-- Stills Gallery -->
            <section class="section bg-white">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-6">精選劇照</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            從影片中精選出的視覺畫面，展現我們對美學的追求
                        </p>
                    </div>
                    
                    <div class="max-w-6xl mx-auto">
                        <!-- Featured Still -->
                        <div class="card overflow-hidden mb-8 hover-scale cursor-pointer" onclick="openStillModal(1)">
                            <div class="video-placeholder aspect-video bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                                <div class="text-center text-primary-600">
                                    <i class="fas fa-expand text-4xl mb-4"></i>
                                    <h3 class="text-xl font-bold mb-2">主要劇照</h3>
                                    <p class="text-sm">點擊查看大圖</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Stills Grid -->
                        <div class="media-grid">
                            ${this.generateStillsGallery()}
                        </div>
                    </div>
                </div>
            </section>

            <!-- Technical Specs -->
            <section class="section bg-gray-50">
                <div class="container">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold font-serif mb-6">技術規格</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">
                            我們使用的專業設備和技術標準
                        </p>
                    </div>
                    
                    <div class="max-w-4xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Camera & Equipment -->
                            <div class="card p-6">
                                <h3 class="text-xl font-bold mb-4 flex items-center">
                                    <i class="fas fa-camera text-accent-500 mr-3"></i>
                                    攝影設備
                                </h3>
                                <ul class="space-y-2 text-gray-600">
                                    <li>• 主機：RED Dragon 6K</li>
                                    <li>• 鏡頭：Zeiss CP.3 系列</li>
                                    <li>• 穩定器：DJI Ronin 4D</li>
                                    <li>• 軌道：Dana Dolly Track System</li>
                                    <li>• 空拍：DJI Inspire 2</li>
                                </ul>
                            </div>
                            
                            <!-- Post Production -->
                            <div class="card p-6">
                                <h3 class="text-xl font-bold mb-4 flex items-center">
                                    <i class="fas fa-desktop text-accent-500 mr-3"></i>
                                    後期製作
                                </h3>
                                <ul class="space-y-2 text-gray-600">
                                    <li>• 剪輯：DaVinci Resolve Studio</li>
                                    <li>• 調色：HDR10+ 標準</li>
                                    <li>• 音效：Pro Tools 2023</li>
                                    <li>• 特效：After Effects & Nuke</li>
                                    <li>• 輸出：4K ProRes 422 HQ</li>
                                </ul>
                            </div>
                            
                            <!-- Audio -->
                            <div class="card p-6">
                                <h3 class="text-xl font-bold mb-4 flex items-center">
                                    <i class="fas fa-volume-up text-accent-500 mr-3"></i>
                                    音頻規格
                                </h3>
                                <ul class="space-y-2 text-gray-600">
                                    <li>• 錄音：Sound Devices 833</li>
                                    <li>• 麥克風：Sennheiser MKH416</li>
                                    <li>• 格式：48kHz/24bit WAV</li>
                                    <li>• 混音：5.1 環繞聲</li>
                                    <li>• 母帶：Dolby Atmos</li>
                                </ul>
                            </div>
                            
                            <!-- Workflow -->
                            <div class="card p-6">
                                <h3 class="text-xl font-bold mb-4 flex items-center">
                                    <i class="fas fa-cogs text-accent-500 mr-3"></i>
                                    工作流程
                                </h3>
                                <ul class="space-y-2 text-gray-600">
                                    <li>• 檔案管理：Frame.io</li>
                                    <li>• 版本控制：Git LFS</li>
                                    <li>• 協作平台：Slack + Notion</li>
                                    <li>• 備份：雙重 RAID 系統</li>
                                    <li>• 交付：多格式輸出</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="section hero-gradient text-white">
                <div class="container text-center">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-4xl font-bold font-serif mb-6">期待您的回饋</h2>
                        <p class="text-xl mb-8 text-gray-200">
                            如果您對我們的作品有興趣，或希望了解更多創作細節，歡迎與我們聯絡。
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/about#contact" class="btn-primary bg-white text-primary-800 hover:bg-gray-100">
                                <i class="fas fa-envelope mr-2"></i>
                                聯絡我們
                            </a>
                            <a href="/archive" class="btn-secondary text-white border-white hover:bg-white hover:text-primary-800">
                                <i class="fas fa-archive mr-2"></i>
                                查看更多作品
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  generateBTSGallery() {
    const btsItems = [
      { title: "導演工作照", type: "photo" },
      { title: "拍攝現場", type: "photo" },
      { title: "燈光設置", type: "photo" },
      { title: "演員準備", type: "photo" },
      { title: "設備調試", type: "photo" },
      { title: "團隊合照", type: "photo" },
    ];

    return btsItems
      .map(
        (item, index) => `
            <div class="card hover-scale cursor-pointer" onclick="openBTSModal(${
              index + 1
            })">
                <div class="video-placeholder aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div class="text-center text-gray-500">
                        <i class="fas fa-${
                          item.type === "video" ? "play" : "camera"
                        } text-3xl mb-2"></i>
                        <p class="text-sm font-medium">${item.title}</p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  generateStillsGallery() {
    const stills = [];
    for (let i = 2; i <= 9; i++) {
      stills.push(`
                <div class="card hover-scale cursor-pointer" onclick="openStillModal(${i})">
                    <div class="video-placeholder aspect-video bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                        <div class="text-center text-primary-600">
                            <i class="fas fa-expand text-2xl mb-2"></i>
                            <p class="text-sm">劇照 ${i}</p>
                        </div>
                    </div>
                </div>
            `);
    }
    return stills.join("");
  }

  attachEventListeners() {
    // 主影片播放按鈕
    const mainVideoPlay = document.getElementById("main-video-play");
    if (mainVideoPlay) {
      mainVideoPlay.addEventListener("click", () => {
        // 這裡可以整合實際的影片播放邏輯
        alert("這裡將播放主要影片。您可以嵌入 YouTube, Vimeo 或自託管的影片。");
      });
    }

    // 全域函數：開啟劇照模態框
    window.openStillModal = (imageId) => {
      alert(
        `劇照 ${imageId} 將在此處以燈箱效果顯示。建議實作：\n- 使用 Lightbox 庫\n- 支援鍵盤導航\n- 包含圖片說明`
      );
    };

    // 全域函數：開啟幕後花絮模態框
    window.openBTSModal = (itemId) => {
      alert(`幕後花絮 ${itemId} 將在此處顯示。可以是照片或短影片。`);
    };

    // 設定滾動動畫
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

    // 監聽需要動畫的元素
    const animateElements = document.querySelectorAll(
      ".card, .text-center > h2"
    );
    animateElements.forEach((el) => observer.observe(el));
  }

  cleanup() {
    // 清理全域函數
    if (window.openStillModal) delete window.openStillModal;
    if (window.openBTSModal) delete window.openBTSModal;
  }
}
