// グローバル変数
let posts = [];

// DOM要素
const postsContainer = document.getElementById('posts');
const postDetailContainer = document.getElementById('post-detail');

// posts.jsonを読み込み
async function fetchPosts() {
  try {
    const response = await fetch('posts.json');
    posts = await response.json();
    return posts;
  } catch (error) {
    console.error('記事の読み込みに失敗しました:', error);
    return [];
  }
}

// 日付フォーマット
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 記事一覧描画
function renderPostList(posts) {
  postsContainer.innerHTML = '';
  postDetailContainer.style.display = 'none';
  postsContainer.style.display = 'grid';

  if (posts.length === 0) {
    postsContainer.innerHTML = '<p>記事がありません。</p>';
    return;
  }

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
    postsContainer.appendChild(card);
  });
}

// 記事詳細描画
function renderPostDetail(post) {
  postsContainer.style.display = 'none';
  postDetailContainer.style.display = 'block';

  if (!post) {
    postDetailContainer.innerHTML = '<p>記事が見つかりません。</p>';
    return;
  }

  postDetailContainer.innerHTML = `
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

// IDで記事取得
function getPostById(id) {
  return posts.find(post => post.id === parseInt(id));
}

// 初期化
async function init() {
  await fetchPosts();

  // URL Parametersをチェック
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');

  if (postId) {
    // 記事詳細表示
    const post = getPostById(postId);
    renderPostDetail(post);
  } else {
    // 記事一覧表示
    renderPostList(posts);
  }
}

// ページロード時に実行
init();
