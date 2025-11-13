// グローバル変数
let todos = [];

// DOM要素取得
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const countSpan = document.getElementById('count');

// Todo追加
function addTodo(text) {
  if (text.trim() === '') return;

  const todo = {
    id: Date.now(),
    text: text.trim(),
    completed: false
  };

  todos.push(todo);
  saveTodos();
  renderTodos();
  todoInput.value = '';
  todoInput.focus();
}

// Todo完了/未完了切り替え
function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
  renderTodos();
}

// Todo削除
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}

// Todo一覧描画
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

  // 未完了Todo数を更新
  updateCount();
}

// 未完了Todo数を更新
function updateCount() {
  const remainingCount = todos.filter(todo => !todo.completed).length;
  countSpan.textContent = remainingCount;
}

// localStorageに保存
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// localStorageから読み込み
function loadTodos() {
  const saved = localStorage.getItem('todos');
  if (saved) {
    todos = JSON.parse(saved);
    renderTodos();
  }
}

// イベントリスナー
addBtn.addEventListener('click', () => {
  addTodo(todoInput.value);
});

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(todoInput.value);
  }
});

// 初期化
loadTodos();
