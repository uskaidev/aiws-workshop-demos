# Simple Blog

静的ブログサイト（JSONデータ駆動）

---

## 🎯 機能

- ✅ 記事一覧表示
- ✅ 記事詳細表示
- ✅ JSONから記事データ読み込み
- ✅ カテゴリー表示
- ✅ 日付フォーマット
- ✅ レスポンシブデザイン

---

## 🛠️ 技術スタック

- **HTML5**: セマンティックHTML
- **CSS3**: カスタムスタイル
- **Vanilla JavaScript**: データフェッチ、テンプレート生成
- **JSON**: 記事データ管理

---

## 📦 ファイル構成

```
simple-blog/
├── README.md          # このファイル
├── SPEC.md            # 仕様書
├── src/
│   ├── index.html     # 記事一覧ページ
│   ├── style.css      # スタイルシート
│   ├── script.js      # JavaScript
│   └── posts.json     # 記事データ（JSON）
└── .claude/           # Claude Code設定
```

---

## 🚀 使い方

### ローカルで実行

**重要**: JSONファイルを読み込むため、ローカルサーバーが必要です。

```bash
# VS Code Live Server を使用
# または
npx http-server src/
```

### Vercelにデプロイ

1. GitHubにプッシュ
2. Vercelで Import
3. Deploy

---

## 📝 学べること

### 1. データ駆動UI
- JSONからデータ読み込み
- 動的にHTMLを生成
- テンプレートパターン

### 2. JavaScript
- `fetch()` API
- `map()`, `filter()`
- 日付フォーマット

### 3. ルーティング（簡易）
- URL Parameters（`?id=1`）
- シングルページアプリ（SPA）の基礎

---

## 🎨 カスタマイズアイデア

- [ ] 検索機能追加
- [ ] カテゴリーフィルター
- [ ] ページネーション
- [ ] Markdownサポート
- [ ] コメント機能
- [ ] RSS フィード

---

## 🔗 参考リンク

- [MDN - Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)
- [MDN - URLSearchParams](https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams)

---

**作成日**: 2025-11-13
**難易度**: ★★☆（中級）
