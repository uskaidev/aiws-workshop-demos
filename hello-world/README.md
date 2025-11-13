# Hello World Template

Phase1「最速デプロイ体験」で使用する **Spec駆動開発** テンプレートです。

## 📁 構成

```
hello-world-template/
├── SPEC.md          # 仕様書（これを見てClaude Codeで実装）
├── .gitignore       # Git管理外ファイル設定
└── README.md        # このファイル
```

**重要**: `index.html` と `style.css` は含まれていません。
**SPEC.md を見てClaude Codeで作成**してください。

---

## ✨ Spec駆動開発とは

仕様書（Spec）を先に作成し、それを元にClaude Codeに実装してもらう開発手法です。

### メリット
- 何を作るか明確になる
- 手戻りが少ない
- チームで共有しやすい
- Claude Codeが高精度で実装できる

---

## 🚀 使い方

### ステップ1: 仕様書を確認

[SPEC.md](SPEC.md) を開いて、何を作るか理解します。

### ステップ2: Claude Codeで実装

VS CodeでClaude Codeを開き、以下のように指示:

```
@SPEC.md に基づいて、index.html と style.css を作成してください
```

Claude Codeが仕様書を読み取り、自動的にファイルを作成します。

### ステップ3: ローカルで確認

作成されたファイルをブラウザで確認:
- `index.html` を右クリック → "Open with Live Server"
- または直接ブラウザで開く

### ステップ4: 必要に応じて調整

Claude Codeに追加の指示を出して調整:

```
もっとカラフルにして
```

```
フォントを大きくして
```

---

## 🎓 学べること

このテンプレートを通じて、以下を体験できます:

1. **Spec駆動開発**: 仕様書を見てClaude Codeが実装
2. **Claude Codeの使い方**: @参照、自然言語指示
3. **HTML/CSS基礎**: シンプルなWebページの構造
4. **レスポンシブデザイン**: PC・スマホ対応
5. **Git/GitHub/Vercel**: デプロイまでの全体フロー

---

## 🔄 Git管理開始

ファイルができたら、Gitで管理を開始:

```bash
# Gitリポジトリを初期化
git init

# ファイルをステージング
git add .

# コミット
git commit -m "Initial commit: Spec駆動開発で実装"
```

---

## 📤 GitHubにプッシュ

```bash
# GitHubでリポジトリを作成後、以下を実行
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

---

## 🚢 Vercelにデプロイ

1. [Vercel](https://vercel.com/) にログイン
2. "New Project" をクリック
3. GitHubリポジトリを選択
4. "Deploy" をクリック

数秒で公開URLが発行されます！

---

## 💡 カスタマイズのヒント

### SPEC.mdを編集してから実装

仕様書を変更してから、Claude Codeに再実装を依頼:

```markdown
# SPEC.mdで背景色を変更
背景：青系のグラデーション（例：`#4facfe` → `#00f2fe`）
```

```
@SPEC.md が更新されました。
これに基づいて style.css を更新してください
```

### 段階的に機能追加

SPEC.mdに新しい機能を追記:

```markdown
## 新機能
- ダークモード切り替えボタン
- フェードインアニメーション
```

---

## 📝 注意事項

- このテンプレートはPhase1の学習用です
- Spec駆動開発の体験が目的です
- 本格的な開発にはNext.js等のフレームワークを推奨します

---

## 🎯 次のステップ

Phase1完了後は:
- **Phase2**: Spec書き方のベストプラクティスを学ぶ
- **個人開発**: Next.js + TypeScriptでSpec駆動開発
- **カスタムコマンド**: `/spec` コマンドで効率化

---

**作成日**: 2025-11-13
