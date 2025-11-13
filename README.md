# AIWS Workshop Demos

Claude Code Spec駆動開発ワークショップのデモサイト集です。

🌐 **デモサイト**: https://aiws-workshop-demos.vercel.app/

---

## 📚 収録デモ

### 1. [Hello World](./hello-world/)
**Phase1で作成するシンプルなデモページ**

- 技術: HTML, CSS
- 特徴: グラスモーフィズム、アニメーション、レスポンシブ
- [デモ](https://aiws-workshop-demos.vercel.app/hello-world/) | [SPEC](./hello-world/SPEC.md)

### 2. [Todo App](./todo-app/)
**タスク管理ができるシンプルなTodoアプリ**

- 技術: HTML, CSS, JavaScript, localStorage
- 特徴: CRUD操作、データ永続化
- [デモ](https://aiws-workshop-demos.vercel.app/todo-app/) | [SPEC](./todo-app/SPEC.md)

### 3. [Landing Page](./landing-page/)
**プロダクト紹介用のランディングページ**

- 技術: HTML, Tailwind CSS
- 特徴: レスポンシブデザイン、モダンUI
- [デモ](https://aiws-workshop-demos.vercel.app/landing-page/) | [SPEC](./landing-page/SPEC.md)

### 4. [Simple Blog](./simple-blog/)
**記事一覧と詳細を表示する静的ブログ**

- 技術: HTML, CSS, JavaScript, JSON
- 特徴: データ駆動UI、動的レンダリング
- [デモ](https://aiws-workshop-demos.vercel.app/simple-blog/) | [SPEC](./simple-blog/SPEC.md)

---

## 🎯 このリポジトリの目的

このリポジトリは**学習教材**として作成されています。

### ワークショップ参加者向け

- **Phase1**: `hello-world` を参考に、自分でHello Worldページを作成
- **個人開発**: 他の3つのサンプルを参考に、自分のアイデアでWebアプリを作成

### 参考になるポイント

1. **SPEC.md** - Kiro式仕様書の書き方
2. **README.md** - プロジェクト説明の書き方
3. **コード構成** - ファイル構造・命名規則
4. **Git管理** - コミットメッセージ・ブランチ運用

---

## 🛠️ ローカルで確認する方法

### クローン
```bash
git clone https://github.com/uskaidev/aiws-workshop-demos.git
cd aiws-workshop-demos
```

### 各デモを開く
```bash
# Hello Worldを開く
open hello-world/index.html

# またはLive Serverを使用
# VS Codeで右クリック → "Open with Live Server"
```

---

## 📖 ワークショップ資料

メインのワークショップ資料はこちら:
- [AIWS1022 リポジトリ](https://github.com/uskaidev/AIWS1022)
- [Phase1: 最速デプロイ体験](https://github.com/uskaidev/AIWS1022/tree/main/AIWS_2512/phase1-deploy)
- [Phase2: 仕組み理解＋Tips](https://github.com/uskaidev/AIWS1022/tree/main/AIWS_2512/phase2-tips)
- [個人開発用テンプレート](https://github.com/uskaidev/AIWS1022/tree/main/AIWS_2512/templates/project-starter)

---

## 🚀 デプロイ方法

このリポジトリと同じように、自分のプロジェクトもVercelにデプロイできます。

### 手順
1. GitHubにpush
2. [Vercel](https://vercel.com/)にログイン
3. "New Project" → GitHubリポジトリを選択
4. "Deploy"

詳細は[Vercelデプロイガイド](https://github.com/uskaidev/AIWS1022/blob/main/AIWS_2512/templates/handout/Vercelデプロイガイド.md)参照

---

## 📝 ライセンス

MIT License - 学習目的での利用・改変を歓迎します

---

**作成日**: 2025-11-13
