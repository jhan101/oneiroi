# 資產文件夾結構

此目錄用於存放網站的媒體資源。請根據以下結構組織您的檔案：

## 📁 目錄說明

### `/images/` - 圖片檔案

存放所有圖片資源，建議的檔案格式和用途：

#### 建議的圖片檔案：

- `logo.png` - 公司 Logo（透明背景，建議 200x60px）
- `hero-bg.jpg` - 首頁英雄區塊背景圖（建議 1920x1080px）
- `about-team.jpg` - 團隊照片
- `feature-poster.jpg` - 主要作品海報

#### 劇照系列（建議 1920x1080px）：

- `still-01.jpg`
- `still-02.jpg`
- `still-03.jpg`
- ...（更多劇照）

#### 幕後花絮照片（建議 1200x800px）：

- `bts-director.jpg` - 導演工作照
- `bts-set.jpg` - 拍攝現場
- `bts-lighting.jpg` - 燈光設置
- `bts-team.jpg` - 團隊合照

### `/videos/` - 影片檔案

存放影片資源，建議格式：

#### 主要影片：

- `main-trailer.mp4` - 主要預告片（建議 1080p, H.264 編碼）
- `bts-making.mp4` - 製作花絮影片（建議 3-5 分鐘）

#### 影片海報：

- `main-trailer-poster.jpg` - 預告片縮圖
- `bts-making-poster.jpg` - 花絮影片縮圖

### `/documents/` - 文件檔案

存放相關文件：

- `press-kit.pdf` - 媒體包
- `technical-specs.pdf` - 技術規格文件
- `company-profile.pdf` - 公司簡介

## 🎯 使用建議

### 圖片優化

- 使用 WebP 格式以獲得更好的壓縮效果
- 為高解析度螢幕提供 2x 版本
- 壓縮圖片以提高載入速度

### 影片優化

- 使用 H.264 編碼確保廣泛相容性
- 提供多種解析度（720p, 1080p）
- 考慮使用 HLS 或 DASH 進行自適應串流

### 檔案命名規範

- 使用英文字母和數字
- 用連字符分隔單詞（例如：`main-trailer.mp4`）
- 避免使用空格和特殊字符

## 📝 替換預留位置

在您的組件中，找到以下預留位置並替換為實際檔案：

```javascript
// 在 src/pages/Home.js 中
<div class="video-placeholder">
  <!-- 替換為：-->
  <img src="../assets/images/still-01.jpg" alt="劇照 1" />
</div>

// 在 src/pages/Feature.js 中
<div class="video-placeholder">
  <!-- 替換為：-->
  <video controls poster="../assets/images/main-trailer-poster.jpg">
    <source src="../assets/videos/main-trailer.mp4" type="video/mp4">
    您的瀏覽器不支援影片播放。
  </video>
</div>
```

## 🚀 自動化工具

考慮使用以下工具自動優化您的資產：

- **圖片壓縮**: TinyPNG, ImageOptim
- **影片轉碼**: FFmpeg, HandBrake
- **自動化工作流**: Gulp, Webpack

---

**注意**: 請勿將大型媒體檔案提交到版本控制系統。考慮使用 Git LFS 或 CDN 服務來管理大型資產。
