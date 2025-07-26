# 🚀 快速設置指南

本指南將幫助您快速設置並運行 Oneiroi 電影製作工作室網站。

## ⚡ 一鍵啟動

如果您想立即查看網站效果：

```bash
# 1. 安裝依賴
npm install

# 2. 編譯樣式
npm run build-css

# 3. 啟動伺服器
npm start
```

網站將在 `http://localhost:3000` 開啟。

## 📋 完整設置檢查清單

### ✅ 基本設置（已完成）

- [x] 專案結構已建立
- [x] 依賴已安裝
- [x] Tailwind CSS 已配置
- [x] 響應式設計已實現
- [x] 路由系統已設置
- [x] 所有頁面組件已創建

### 🎯 接下來要做的事情

#### 1. 內容客製化（必需）

```bash
# 更新以下檔案中的內容：
- src/pages/Home.js        # 首頁內容
- src/pages/About.js       # 公司資訊
- src/pages/Feature.js     # 作品介紹
- src/components/Navbar.js # 公司 Logo
- src/components/Footer.js # 聯絡資訊
```

#### 2. 媒體資源（建議）

```bash
# 將您的媒體檔案放入以下目錄：
assets/images/             # 圖片檔案
assets/videos/             # 影片檔案
assets/documents/          # PDF 等文件
```

#### 3. 品牌客製化（可選）

```bash
# 編輯顏色主題：
tailwind.config.js         # 修改 primary 和 accent 顏色

# 更新字體：
public/index.html          # 添加 Google Fonts 連結
tailwind.config.js         # 更新字體設定
```

## 🔧 開發工作流

### 日常開發

```bash
# 啟動開發環境（自動重新編譯 CSS）
npm run dev

# 或分別執行：
npm run build-css-watch   # 在一個終端監視 CSS 變更
npm start                 # 在另一個終端啟動伺服器
```

### 內容更新

```bash
# 只需編譯一次 CSS
npm run build-css

# 啟動伺服器查看變更
npm start
```

### 生產建置

```bash
# 建立優化的生產版本
npm run build
```

## 🎨 自定義示例

### 替換 Logo

在 `src/components/Navbar.js` 中：

```javascript
// 將這行：
<i class="fas fa-film text-accent-500"></i>
<span class="font-serif">Oneiroi</span>

// 替換為：
<img src="../assets/images/logo.png" alt="您的公司名稱" class="h-8">
```

### 添加實際圖片

在任何頁面組件中：

```javascript
// 將預留位置：
<div class="video-placeholder aspect-video bg-gradient-to-br from-gray-200 to-gray-300">
  <div class="text-center text-gray-500">
    <i class="fas fa-camera text-4xl mb-2"></i>
    <p class="text-sm">劇照</p>
  </div>
</div>

// 替換為實際圖片：
<img
  src="../assets/images/your-image.jpg"
  alt="圖片描述"
  class="w-full h-full object-cover rounded-lg"
>
```

### 嵌入 YouTube 影片

```javascript
// 替換影片預留位置為：
<iframe
  class="w-full aspect-video rounded-lg"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameborder="0"
  allowfullscreen
></iframe>
```

## 📱 測試清單

在發布前請確認：

### 桌面瀏覽器

- [ ] Chrome 最新版本
- [ ] Firefox 最新版本
- [ ] Safari 最新版本

### 行動裝置

- [ ] iPhone（Safari）
- [ ] Android（Chrome）
- [ ] 平板電腦

### 功能測試

- [ ] 所有頁面連結正常工作
- [ ] 聯絡表單提交功能
- [ ] 響應式設計在各種螢幕尺寸下正常
- [ ] 圖片和影片正確載入
- [ ] 頁面載入速度合理（< 3 秒）

## 🚀 部署選項

### 1. Netlify（推薦 - 最簡單）

1. 將程式碼推送到 GitHub
2. 連接 Netlify 到您的儲存庫
3. 設定建置命令：`npm run build`
4. 設定發布目錄：`public`

### 2. Vercel

1. 安裝 Vercel CLI：`npm i -g vercel`
2. 在專案目錄執行：`vercel`
3. 按照提示完成部署

### 3. 傳統主機

1. 執行 `npm run build`
2. 將 `public/` 和 `src/` 目錄上傳到您的主機
3. 確保伺服器支援 HTML5 History API

## 🆘 常見問題

### Q: CSS 樣式沒有載入？

A: 確保執行了 `npm run build-css` 並且 `public/css/style.css` 檔案存在。

### Q: 頁面顯示 404 錯誤？

A: 檢查 `src/router.js` 中的路由設定，確保路徑正確。

### Q: 行動版本顯示異常？

A: 檢查瀏覽器開發者工具的響應式模式，確認 CSS 載入正確。

### Q: 如何添加新頁面？

A:

1. 在 `src/pages/` 創建新組件
2. 在 `src/router.js` 添加路由
3. 在導航選單添加連結

---

**需要幫助？** 請查看 `README.md` 中的詳細文檔或檢查瀏覽器開發者工具中的錯誤訊息。
