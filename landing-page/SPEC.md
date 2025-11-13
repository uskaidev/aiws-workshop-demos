# Product Landing Page 仕様書

**プロジェクト名**: Product Landing Page
**作成日**: 2025-11-13
**技術スタック**: HTML, Tailwind CSS (CDN)
**対象ユーザー**: プロダクトに興味を持つ潜在顧客

---

## Part 1: 要件定義

### 📋 プロジェクト概要

架空のSaaSプロダクト「TaskFlow」のランディングページ。シンプルで魅力的なデザインで、ユーザーに価値を伝え、サインアップを促す。

### 目的
- プロダクトの価値を明確に伝える
- ユーザーにアクションを促す（CTA）
- レスポンシブで美しいデザイン

### 機能要件

#### 必須機能
1. **ヒーローセクション**
   - キャッチコピー
   - サブキャッチ
   - CTAボタン（「無料で始める」）
   - 背景グラデーション

2. **機能紹介セクション**
   - 3つの主要機能を紹介
   - アイコン＋見出し＋説明文
   - グリッドレイアウト

3. **CTAセクション**
   - アクションを促すメッセージ
   - CTAボタン

4. **フッター**
   - コピーライト表示

#### 任意機能（将来追加可能）
- お問い合わせフォーム
- お客様の声
- FAQ

---

## Part 2: 設計

### アーキテクチャ

**パターン**: 静的HTML + Tailwind CSS

**ページ構成**:
```
Hero Section
    ↓
Features Section
    ↓
CTA Section
    ↓
Footer
```

### 技術詳細

#### HTML構造
```html
<body>
  <header> <!-- ヒーローセクション -->
  <main>
    <section id="features"> <!-- 機能紹介 -->
    <section id="cta"> <!-- CTA -->
  </main>
  <footer> <!-- フッター -->
</body>
```

#### Tailwind CSS設計

**カラースキーム**:
- プライマリ: `blue-600` (#2563eb)
- グラデーション: `from-blue-50 to-indigo-100`
- テキスト: `gray-900`, `gray-600`

**レスポンシブ**:
- モバイル: 1カラム
- タブレット（md:）: 2カラム
- デスクトップ（lg:）: 3カラム

---

## Part 3: 実装タスク

### Phase 1: HTMLベース作成（15分）

**タスク 1-1**: 基本HTMLファイル作成
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TaskFlow - タスク管理をシンプルに</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- コンテンツ -->
</body>
</html>
```

**タスク 1-2**: ヒーローセクション実装
- グラデーション背景
- 中央揃えのコンテンツ
- キャッチコピー＋CTAボタン

**タスク 1-3**: 機能紹介セクション実装
- 3つの特徴をグリッドレイアウト
- 各アイテム: 絵文字 + 見出し + 説明

**タスク 1-4**: CTAセクション実装
- 背景色（青系）
- CTAボタン

**タスク 1-5**: フッター実装
- コピーライト表示

**確認方法**: ブラウザで開いて全セクションが表示されることを確認

---

### Phase 2: スタイル調整（15分）

**タスク 2-1**: レスポンシブ調整
- モバイル: パディング調整
- タブレット: 2カラムグリッド
- デスクトップ: 3カラムグリッド

**タスク 2-2**: ホバーエフェクト追加
- ボタンホバー: `hover:bg-blue-700`
- カードホバー: `hover:shadow-lg`

**タスク 2-3**: スペーシング調整
- セクション間のマージン
- パディング統一

**確認方法**: デスクトップ・モバイルで表示確認

---

### Phase 3: インタラクション追加（オプション・10分）

**タスク 3-1**: スムーズスクロール実装（JavaScript）
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
```

**確認方法**: CTAボタンクリックでスクロールすることを確認

---

### Phase 4: テスト＆デプロイ（10分）

**タスク 4-1**: 動作確認
- [ ] 全セクションが表示される
- [ ] レスポンシブ動作（モバイル/タブレット/デスクトップ）
- [ ] CTAボタンが機能する

**タスク 4-2**: Git管理
```bash
git init
git add .
git commit -m "feat: Product Landing Page完成"
```

**タスク 4-3**: Vercelにデプロイ

---

## 成功条件

- ✅ ヒーロー、機能、CTA、フッターが揃っている
- ✅ レスポンシブデザイン（スマホ・PCで美しく表示）
- ✅ CTAボタンが目立つ
- ✅ Vercelで公開されている

---

**作成日**: 2025-11-13
**所要時間**: 約50分
