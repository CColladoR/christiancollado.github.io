  fetch('https://admin.difoosion.net/feed?author=Christian%20Collado')
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    let index = 0;
    items.forEach(item => {
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const image = item.querySelector("enclosure").getAttribute("url");
      const cardTitle = document.querySelector(`#card-${index} .card-title`);
      const cardLink = document.querySelector(`#card-${index}`);
      const cardImage = document.querySelector(`#card-${index} .card-image`);
      cardTitle.innerHTML = title;
      cardLink.setAttribute('href', link);
      cardImage.setAttribute('src', image);
      index++;
      if (index >= 4) {
        return;
      }
    });
  });