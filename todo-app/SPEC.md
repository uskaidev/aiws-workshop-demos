# Simple Todo App 仕様書

**プロジェクト名**: Simple Todo App
**作成日**: 2025-11-13
**技術スタック**: HTML, CSS, Vanilla JavaScript
**対象ユーザー**: 自分用のタスク管理ツール

---

## Part 1: 要件定義

### 📋 プロジェクト概要

シンプルで使いやすいTodoリスト管理アプリ。タスクの追加・削除・完了管理ができ、データはローカルストレージに保存される。

### 目的
- タスクを簡単に管理できる
- ブラウザを閉じてもデータが保持される
- モバイルでも使いやすいUI

### 機能要件

#### 必須機能
1. **Todoの追加**
   - 入力フォームにテキストを入力
   - Enterキーまたは「追加」ボタンでTodo追加
   - 空の入力は追加できない

2. **Todoの表示**
   - Todo一覧を表示
   - 各Todoに「完了」ボタンと「削除」ボタン
   - 完了したTodoは打ち消し線表示

3. **Todoの完了/未完了切り替え**
   - チェックボックスまたはクリックで切り替え
   - 完了したTodoは視覚的に区別

4. **Todoの削除**
   - 削除ボタンクリックでTodoを削除
   - 確認ダイアログなし（即削除）

5. **データ永続化**
   - ローカルストレージに自動保存
   - ページリロード後もデータ保持

#### 任意機能（将来追加可能）
- フィルター機能（全て/完了/未完了）
- Todo編集機能
- 優先度設定

---

## Part 2: 設計

### アーキテクチャ

**パターン**: Vanilla JavaScript（シンプルなイベント駆動）

**データフロー**:
```
ユーザー入力 → JavaScript処理 → DOM更新 → localStorage保存
                      ↑                            ↓
                      └──── ページロード時に読み込み ──┘
```

### 技術詳細

#### HTML構造
```html
<body>
  <div class="container">
    <h1>My Todo List</h1>
    <div class="input-section">
      <input type="text" id="todo-input" placeholder="新しいタスクを入力">
      <button id="add-btn">追加</button>
    </div>
    <ul id="todo-list">
      <!-- Todoアイテムが動的に追加される -->
    </ul>
  </div>
</body>
```

#### CSS設計
- **レイアウト**: Flexbox（中央揃え、縦並び）
- **カラースキーム**:
  - 背景: グラデーション（#667eea → #764ba2）
  - カード: 白背景、シャドウあり
  - ボタン: プライマリ（#667eea）、削除（#ef4444）
- **レスポンシブ**: モバイルファースト
  - 最大幅: 600px
  - パディング: モバイル 1rem / デスクトップ 2rem

#### JavaScript設計

**データ構造**:
```javascript
todos = [
  { id: 1, text: "買い物に行く", completed: false },
  { id: 2, text: "メールを送る", completed: true }
]
```

**主要関数**:
- `addTodo(text)`: Todo追加
- `toggleTodo(id)`: 完了/未完了切り替え
- `deleteTodo(id)`: Todo削除
- `renderTodos()`: Todo一覧を再描画
- `saveTodos()`: localStorageに保存
- `loadTodos()`: localStorageから読み込み

#### ローカルストレージ
- **キー**: `todos`
- **形式**: JSON文字列
- **保存タイミング**: 追加/削除/完了切り替え時

---

## Part 3: 実装タスク

### Phase 1: 基本構造作成（10分）

**タスク 1-1**: HTMLファイル作成
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Todo App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>📝 My Todo List</h1>
    <div class="input-section">
      <input type="text" id="todo-input" placeholder="新しいタスクを入力...">
      <button id="add-btn">追加</button>
    </div>
    <ul id="todo-list"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

**タスク 1-2**: CSSファイル作成（基本スタイル）
- body: グラデーション背景
- container: 中央揃え、白背景カード
- input/button: スタイリング

**タスク 1-3**: JavaScriptファイル作成（空ファイル）

**確認方法**: ブラウザで開いてUIが表示されることを確認

---

### Phase 2: JavaScript実装（20分）

**タスク 2-1**: データ構造とグローバル変数定義
```javascript
let todos = [];
```

**タスク 2-2**: DOM要素取得
```javascript
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
```

**タスク 2-3**: Todo追加機能実装
```javascript
function addTodo(text) {
  if (text.trim() === '') return;

  const todo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(todo);
  saveTodos();
  renderTodos();
  todoInput.value = '';
}

addBtn.addEventListener('click', () => {
  addTodo(todoInput.value);
});

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(todoInput.value);
  }
});
```

**タスク 2-4**: Todo描画機能実装
```javascript
function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) li.classList.add('completed');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));

    const text = document.createElement('span');
    text.className = 'todo-text';
    text.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '削除';
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}
```

**タスク 2-5**: 完了切り替え機能実装
```javascript
function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
  renderTodos();
}
```

**タスク 2-6**: 削除機能実装
```javascript
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}
```

**確認方法**: Todo追加・削除・完了切り替えが動作することを確認

---

### Phase 3: データ永続化（10分）

**タスク 3-1**: localStorage保存機能実装
```javascript
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
```

**タスク 3-2**: localStorage読み込み機能実装
```javascript
function loadTodos() {
  const saved = localStorage.getItem('todos');
  if (saved) {
    todos = JSON.parse(saved);
    renderTodos();
  }
}

// ページロード時に実行
loadTodos();
```

**確認方法**: ページをリロードしてもTodoが残っていることを確認

---

### Phase 4: スタイル調整（15分）

**タスク 4-1**: 完成したCSSを実装
- グラデーション背景
- カードデザイン
- ボタンホバーエフェクト
- チェックボックススタイル
- 完了Todoの打ち消し線
- レスポンシブ対応

**タスク 4-2**: トランジション追加
- ボタンホバー時のアニメーション
- Todo追加時のフェードイン

**確認方法**: デザインが整っていることを確認

---

### Phase 5: テスト＆デプロイ（10分）

**タスク 5-1**: 動作確認
- [ ] Todo追加（正常系）
- [ ] Todo追加（空文字はブロック）
- [ ] Todo完了切り替え
- [ ] Todo削除
- [ ] ページリロード後もデータ保持
- [ ] レスポンシブ確認（モバイル/デスクトップ）

**タスク 5-2**: .gitignore 作成
```
.DS_Store
.vercel/
```

**タスク 5-3**: Git管理開始
```bash
git init
git add .
git commit -m "feat: Simple Todo App完成"
```

**タスク 5-4**: Vercelにデプロイ
- GitHubにプッシュ
- Vercelで Import
- Deploy

---

## 成功条件

- ✅ Todoの追加・削除・完了切り替えができる
- ✅ ページリロード後もデータが保持される
- ✅ レスポンシブデザイン（スマホ・PCで動作）
- ✅ Vercelで公開されている

---

**作成日**: 2025-11-13
**所要時間**: 約60分
