import { articles } from "/data.js";

const blogsInner = document.querySelector(".blogs-inner");
const blogInner = document.querySelector(".blog-inner");

const getArticlesHTML = function (array, num) {
  let articlesHTML = "";
  articlesHTML = array
    .map((article) => {
      return `
        <a class="article" href="blog.html">
            <div class="article-img">
              <img src="${article.image}" alt="${article.alt}" />
            </div>
            <div class="article-body">
              <span class="article-date">${article.date}</span>
              <h2 class="article-title">
                ${article.title.slice(0, 20)}...
              </h2>
              <p class="article-description">
                ${article.description}
              </p>
            </div>
          </a>
    `;
    })
    .slice(0, num)
    .join("");
  return articlesHTML;
};

if (blogsInner) {
  blogsInner.innerHTML = getArticlesHTML(articles, 3);
}

if (blogInner) {
  blogInner.innerHTML = getArticlesHTML(articles, 3);
}
