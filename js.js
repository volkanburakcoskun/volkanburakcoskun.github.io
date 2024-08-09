document.addEventListener('DOMContentLoaded', function() {
  const postsList = document.getElementById('posts-list');
  
  // Basit blog yazılarını burada tanımlayabiliriz
  const posts = [
      { title: "First Blog Post", url: "posts/post1.html" },
      { title: "Second Blog Post", url: "posts/post2.html" }
  ];
  
  posts.forEach(post => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = post.url;
      a.textContent = post.title;
      li.appendChild(a);
      postsList.appendChild(li);
  });
});