# Oneiroi 電影製作工作室網站

一個為初學專業電影製作公司設計的現代化、響應式網站。該網站具有乾淨的設計、易於導航的介面，以及為未來內容擴展而優化的架構。

## ✨ 特色功能

- 🎬 **現代設計** - 採用 Tailwind CSS 的乾淨、專業外觀
- 📱 **響應式設計** - 在桌面、平板和手機上都有完美的顯示效果
- 🚀 **單頁應用** - 使用 JavaScript 路由實現快速頁面切換
- 🎯 **易於更新** - 模組化的組件架構，便於內容管理
- 🖼️ **媒體支援** - 為影片和圖片內容預留完整的架構
- ♿ **無障礙設計** - 遵循現代網頁無障礙標準
- 🎨 **動畫效果** - 流暢的頁面切換和滾動動畫

## 📁 專案結構

```
oneiroi/
├── public/
│   ├── index.html          # 主要 HTML 檔案
│   └── css/               # 編譯後的 CSS 檔案
├── src/
│   ├── main.js            # 主要應用程式入口
│   ├── router.js          # 前端路由系統
│   ├── components/        # 可重用組件
│   │   ├── Navbar.js      # 導航欄組件
│   │   └── Footer.js      # 頁尾組件
│   ├── pages/             # 頁面組件
│   │   ├── Home.js        # 首頁
│   │   ├── About.js       # 關於我們
│   │   ├── Feature.js     # 特色作品
│   │   └── Archive.js     # 作品檔案
│   └── styles/
│       └── main.css       # 主要樣式檔案
├── assets/                # 媒體資源（請自行創建）
│   ├── images/            # 圖片檔案
│   ├── videos/            # 影片檔案
│   └── documents/         # 文件檔案
├── package.json           # 專案依賴和腳本
├── tailwind.config.js     # Tailwind CSS 配置
└── README.md             # 專案說明
```

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

使用以下命令啟動開發伺服器：

```bash
# 同時編譯 CSS 和啟動伺服器
npm run dev

# 或者分別執行：
npm run build-css  # 編譯 Tailwind CSS
npm start         # 啟動 live-server
```

### 3. 打開瀏覽器

伺服器將在 `http://localhost:3000` 啟動，瀏覽器會自動開啟。

## 📄 頁面說明

### 首頁 (/)

- 歡迎訊息和公司介紹
- 當前項目的預告
- 最新劇照畫廊
- 公司理念介紹

### 關於我們 (/about)

- 公司故事和背景
- 核心價值觀
- 服務項目介紹
- 聯絡資訊和表單

### 特色作品 (/feature)

- 主要作品「夢境邊界」的詳細介紹
- 幕後花絮內容
- 劇照畫廊
- 技術規格說明

### 作品檔案 (/archive)

- 所有作品的網格展示
- 篩選和排序功能
- 即將推出的項目預告

## 🎨 客製化指南

### 更新品牌資訊

1. **公司名稱和 Logo**：編輯 `src/components/Navbar.js` 和 `src/components/Footer.js`
2. **聯絡資訊**：更新 `src/pages/About.js` 中的聯絡詳情
3. **專案資訊**：修改 `src/pages/Home.js` 和 `src/pages/Feature.js` 中的項目描述

### 添加媒體內容

#### 圖片

1. 將圖片放置在 `assets/images/` 目錄中
2. 在相應的組件中替換預留位置：
   ```javascript
   // 替換預留位置
   <div class="video-placeholder">
   // 為實際圖片
   <img src="../assets/images/your-image.jpg" alt="描述">
   ```

#### 影片

支援多種影片格式：

**YouTube 嵌入：**

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen
>
</iframe>
```

**Vimeo 嵌入：**

```html
<iframe
  src="https://player.vimeo.com/video/VIDEO_ID"
  frameborder="0"
  allowfullscreen
>
</iframe>
```

**自託管影片：**

```html
<video controls poster="poster.jpg">
  <source src="../assets/videos/your-video.mp4" type="video/mp4" />
  您的瀏覽器不支援影片播放。
</video>
```

### 樣式客製化

#### 顏色主題

編輯 `tailwind.config.js` 中的顏色設定：

```javascript
colors: {
  primary: {
    // 修改主要顏色
    500: '#your-color',
    // ...
  },
  accent: {
    // 修改強調色
    500: '#your-accent-color',
    // ...
  }
}
```

#### 字體

1. 在 `public/index.html` 中添加 Google Fonts 連結
2. 在 `tailwind.config.js` 中更新字體設定

### 功能擴展

#### 添加新頁面

1. 在 `src/pages/` 中創建新的頁面組件
2. 在 `src/router.js` 中註冊新路由
3. 在導航組件中添加連結

#### 整合後端 API

在組件中使用 `fetch` API：

```javascript
// 範例：提交聯絡表單
async handleFormSubmit(formData) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        // 處理響應
    } catch (error) {
        console.error('提交失敗:', error);
    }
}
```

## 🛠️ 建置和部署

### 建置用於生產環境

```bash
npm run build
```

這會生成優化的 CSS 檔案在 `public/css/` 目錄中。

### 部署選項

#### 靜態託管（推薦）

- **Netlify**: 直接連接 Git 儲存庫
- **Vercel**: 支援自動部署
- **GitHub Pages**: 免費靜態託管

#### 傳統主機

將 `public/` 和 `src/` 目錄上傳到您的網站主機。

## 📝 內容更新檢查清單

在添加實際內容之前，請檢查以下項目：

### 文字內容

- [ ] 更新公司介紹和故事
- [ ] 修改聯絡資訊（電話、電子郵件、地址）
- [ ] 更新專案描述和時程
- [ ] 替換範例文字為實際內容

### 媒體檔案

- [ ] 添加公司 Logo
- [ ] 上傳專案劇照（建議 1920x1080）
- [ ] 準備影片內容或預告片
- [ ] 添加幕後花絮照片

### SEO 和社交媒體

- [ ] 更新 `public/index.html` 中的 meta 標籤
- [ ] 添加 Open Graph 標籤
- [ ] 設定實際的社交媒體連結
- [ ] 建立 favicon 圖示

### 表單和互動

- [ ] 設定聯絡表單後端處理
- [ ] 測試所有連結和導航
- [ ] 檢查響應式設計在各種設備上的表現

## 🔧 故障排除

### 常見問題

**CSS 樣式未載入**

- 確認已執行 `npm run build-css`
- 檢查 `public/css/style.css` 檔案是否存在

**JavaScript 錯誤**

- 開啟瀏覽器開發者工具查看錯誤訊息
- 確認所有檔案路徑正確

**頁面無法載入**

- 檢查 `src/router.js` 中的路由設定
- 確認頁面組件已正確匯出

## 📞 技術支援

如果您需要協助或有任何問題，請：

1. 查看瀏覽器開發者工具中的錯誤訊息
2. 檢查本 README 的故障排除部分
3. 確認所有檔案路徑和設定正確

## 📄 授權

此專案是為 Oneiroi 電影製作工作室特別設計的。請根據您的需求自由修改和使用。

---

**建議的下一步：**

1. 安裝依賴並啟動開發伺服器
2. 將範例內容替換為您的實際內容
3. 上傳媒體檔案到 `assets/` 目錄
4. 自定義顏色和樣式以符合品牌形象
5. 設定聯絡表單的後端處理
6. 測試所有功能並準備部署
