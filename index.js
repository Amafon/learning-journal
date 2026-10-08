import { articles } from "/data.js";

const blogsInner = document.querySelector(".blogs-inner");

const getArticlesHTML = function (array) {
  let articlesHTML = "";
  articlesHTML = array
    .map((article) => {
      return `
        <a class="article" href="#">
            <div class="article-img">
              <img src="${article.image}" alt="${article.alt}" />
            </div>
            <div class="article-body">
              <span class="article-date">${article.date}</span>
              <h2 class="article-title">
                ${article.title}
              </h2>
              <p class="article-description">
                ${article.description}
              </p>
            </div>
          </a>
    `;
    })
    .join("");
  return articlesHTML;
};

blogsInner.innerHTML = getArticlesHTML(articles);
