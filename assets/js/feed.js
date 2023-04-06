// Selecciona el elemento donde se agregarán las tarjetas de noticias
const newsFeedCards = document.querySelector('.news-feed-cards');

// URL del feed RSS
const feedUrl = 'https://admin.difoosion.net/feed?author=Christian%20Collado';

// Obtiene el feed RSS y crea las tarjetas de noticias
fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(item => {
      const newsFeedCard = document.createElement('div');
      newsFeedCard.classList.add('news-feed-card');

      const newsFeedCardImage = document.createElement('div');
      newsFeedCardImage.classList.add('news-feed-card-image');
      newsFeedCardImage.style.backgroundImage = `url(${item.enclosure.link})`;

      const newsFeedCardTitle = document.createElement('div');
      newsFeedCardTitle.classList.add('news-feed-card-title');
      newsFeedCardTitle.textContent = item.title;

      newsFeedCard.appendChild(newsFeedCardImage);
      newsFeedCard.appendChild(newsFeedCardTitle);

      newsFeedCards.appendChild(newsFeedCard);
    });
  });