# Simple Blog 仕様書

**プロジェクト名**: Simple Blog
**作成日**: 2025-11-13
**技術スタック**: HTML, CSS, Vanilla JavaScript, JSON
**対象ユーザー**: ブログ記事を読む一般ユーザー

---

## Part 1: 要件定義

### 📋 プロジェクト概要

シンプルな静的ブログサイト。記事データはJSONファイルで管理し、JavaScriptで動的に表示する。

### 目的
- 記事を一覧・詳細表示できる
- JSONで記事を簡単に管理
- レスポンシブでシンプルなデザイン

### 機能要件

#### 必須機能
1. **記事一覧表示**
   - 全記事をカード形式で表示
   - タイトル、日付、カテゴリー、概要を表示
   - 記事クリックで詳細ページへ遷移

2. **記事詳細表示**
   - 記事の全内容を表示
   - タイトル、日付、カテゴリー、本文
   - 「一覧に戻る」リンク

3. **JSONデータ管理**
   - `posts.json` に記事データを格納
   - 記事追加は JSONファイルを編集するだけ

4. **レスポンシブデザイン**
   - モバイル・デスクトップ対応

#### 任意機能（将来追加可能）
- 検索機能
- カテゴリーフィルター
- ページネーション

---

## Part 2: 設計

### アーキテクチャ

**パターン**: データ駆動UI（JSON → JavaScript → DOM）

**データフロー**:
```
posts.json → fetch() → JavaScript処理 → DOM生成
```

### 技術詳細

#### データ構造（posts.json）
```json
[
  {
    "id": 1,
    "title": "記事タイトル",
    "date": "2025-11-13",
    "category": "技術",
    "summary": "記事の概要...",
    "content": "記事の本文..."
  }
]
```

#### ページ構成

**記事一覧（index.html）**:
```
ヘッダー
  ↓
記事一覧（グリッド）
  ↓
フッター
```

**記事詳細（index.html?id=1）**:
```
ヘッダー
  ↓
記事詳細
  ↓
「一覧に戻る」ボタン
  ↓
フッター
```

#### CSS設計
- **レイアウト**: Grid（記事一覧）
- **カラー**: シンプルな白ベース
- **タイポグラフィ**: 読みやすいフォント

#### JavaScript設計

**主要関数**:
- `fetchPosts()`: posts.json を fetch
- `renderPostList(posts)`: 記事一覧を描画
- `renderPostDetail(post)`: 記事詳細を描画
- `getPostById(id)`: IDで記事取得
- `formatDate(dateString)`: 日付フォーマット

---

## Part 3: 実装タスク

### Phase 1: データ準備（10分）

**タスク 1-1**: posts.json作成
```json
[
  {
    "id": 1,
    "title": "はじめての記事",
    "date": "2025-11-13",
    "category": "日記",
    "summary": "ブログを始めました。これからよろしくお願いします。",
    "content": "今日からブログを始めることにしました。\n\n日々の学びや気づきを書いていきたいと思います。\n\nよろしくお願いします！"
  },
  {
    "id": 2,
    "title": "Claude Codeの使い方",
    "date": "2025-11-12",
    "category": "技術",
    "summary": "Claude Codeを使ってWeb開発をする方法を紹介します。",
    "content": "Claude Codeは強力なAIアシスタントです。\n\nSpec駆動開発で効率的にWebアプリを作れます。"
  },
  {
    "id": 3,
    "title": "Vercelデプロイ手順",
    "date": "2025-11-11",
    "category": "技術",
    "summary": "VercelでWebサイトを公開する手順を解説します。",
    "content": "Vercelを使えば、GitHubと連携して簡単にデプロイできます。\n\n手順：\n1. GitHubにプッシュ\n2. Vercelで Import\n3. Deploy"
  }
]
```

**確認方法**: ファイルが作成されていることを確認

---

### Phase 2: HTML/CSS作成（20分）

**タスク 2-1**: index.html 作成
- ヘッダー
- 記事一覧コンテナ（`<div id="posts"></div>`）
- 記事詳細コンテナ（`<div id="post-detail"></div>`）
- フッター

**タスク 2-2**: style.css 作成
- 基本スタイル（フォント、色）
- 記事カードスタイル
- 記事詳細スタイル
- レスポンシブ対応

**確認方法**: ブラウザで開いて骨組みが表示されることを確認

---

### Phase 3: JavaScript実装（30分）

**タスク 3-1**: posts.json読み込み
```javascript
async function fetchPosts() {
  const response = await fetch('posts.json');
  const posts = await response.json();
  return posts;
}
```

**タスク 3-2**: URL Parametersチェック
```javascript
const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

if (postId) {
  // 記事詳細表示
} else {
  // 記事一覧表示
}
```

**タスク 3-3**: 記事一覧描画
```javascript
function renderPostList(posts) {
  const container = document.getElementById('posts');
  container.innerHTML = '';

  posts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.innerHTML = `
      <h2>${post.title}</h2>
      <div class="meta">
        <span class="date">${formatDate(post.date)}</span>
        <span class="category">${post.category}</span>
      </div>
      <p>${post.summary}</p>
      <a href="?id=${post.id}">続きを読む →</a>
    `;
    container.appendChild(card);
  });
}
```

**タスク 3-4**: 記事詳細描画
```javascript
function renderPostDetail(post) {
  const container = document.getElementById('post-detail');
  container.innerHTML = `
    <article class="post-detail">
      <h1>${post.title}</h1>
      <div class="meta">
        <span class="date">${formatDate(post.date)}</span>
        <span class="category">${post.category}</span>
      </div>
      <div class="content">
        ${post.content.replace(/\n/g, '<br>')}
      </div>
      <a href="index.html" class="back-link">← 一覧に戻る</a>
    </article>
  `;
}
```

**タスク 3-5**: 日付フォーマット
```javascript
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
```

**確認方法**: 記事一覧・詳細が表示されることを確認

---

### Phase 4: テスト＆デプロイ（10分）

**タスク 4-1**: 動作確認
- [ ] 記事一覧が表示される
- [ ] 記事クリックで詳細ページに遷移
- [ ] 「一覧に戻る」で戻れる
- [ ] レスポンシブ動作

**タスク 4-2**: Git管理
```bash
git init
git add .
git commit -m "feat: Simple Blog完成"
```

**タスク 4-3**: Vercelにデプロイ

---

## 成功条件

- ✅ 記事一覧・詳細が表示される
- ✅ JSONから記事を読み込める
- ✅ レスポンシブデザイン
- ✅ Vercelで公開されている

---

**作成日**: 2025-11-13
**所要時間**: 約70分
