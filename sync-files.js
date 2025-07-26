const fs = require("fs");
const path = require("path");

// 同步源文件到 public 目錄
function syncFiles() {
  try {
    // 複製 src 目錄
    if (fs.existsSync("src")) {
      fs.rmSync("public/src", { recursive: true, force: true });
      fs.cpSync("src", "public/src", { recursive: true });
      console.log("✅ 已同步 src/ 到 public/src/");
    }

    // 複製 assets 目錄
    if (fs.existsSync("assets")) {
      fs.rmSync("public/assets", { recursive: true, force: true });
      fs.cpSync("assets", "public/assets", { recursive: true });
      console.log("✅ 已同步 assets/ 到 public/assets/");
    }

    console.log("🚀 文件同步完成！");
  } catch (error) {
    console.error("❌ 同步失敗:", error.message);
  }
}

// 監聽文件變更
function watchFiles() {
  console.log("👀 開始監聽文件變更...");

  // 監聽 src 目錄
  if (fs.existsSync("src")) {
    fs.watch("src", { recursive: true }, (eventType, filename) => {
      if (filename) {
        console.log(`🔄 檢測到變更: ${filename}`);
        setTimeout(syncFiles, 100); // 延遲同步避免重複觸發
      }
    });
  }

  // 監聽 assets 目錄
  if (fs.existsSync("assets")) {
    fs.watch("assets", { recursive: true }, (eventType, filename) => {
      if (filename) {
        console.log(`🔄 檢測到資產變更: ${filename}`);
        setTimeout(syncFiles, 100);
      }
    });
  }
}

// 主函數
function main() {
  console.log("🎬 Oneiroi 電影工作室 - 文件同步工具");
  console.log("=====================================");

  // 初始同步
  syncFiles();

  // 如果有 --watch 參數，開始監聽
  if (process.argv.includes("--watch")) {
    watchFiles();
    console.log("✨ 監聽模式已啟動，按 Ctrl+C 退出");
  }
}

// 處理退出信號
process.on("SIGINT", () => {
  console.log("\n👋 停止文件同步，再見！");
  process.exit(0);
});

// 執行主函數
main();
