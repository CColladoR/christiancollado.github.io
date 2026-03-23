
import { RSSResponse, Article } from '../types';

const RSS_FEED_URL = 'https://rss.app/feeds/Yi3mY5gGVxpTt637.xml';
const PROXY_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

/**
 * Intenta extraer la URL de la imagen principal del contenido HTML del artículo.
 * Busca específicamente el patrón: <img class='type:primaryImage' src="..."
 */
const extractPrimaryImage = (htmlContent: string): string | null => {
  if (!htmlContent) return null;
  
  // Expresión regular para encontrar el src de una imagen con la clase específica
  // Soporta comillas simples o dobles y variaciones de orden en los atributos
  const regex = /<img[^>]+class=['"][^'"]*type:primaryImage[^'"]*['"][^>]+src=['"]([^'"]+)['"]/i;
  const match = htmlContent.match(regex);
  
  if (match && match[1]) {
    return match[1];
  }

  // Fallback: buscar cualquier imagen si la anterior falla
  const fallbackRegex = /<img[^>]+src=['"]([^'"]+)['"]/i;
  const fallbackMatch = htmlContent.match(fallbackRegex);
  return fallbackMatch ? fallbackMatch[1] : null;
};

export const fetchLatestArticles = async (limit: number = 5): Promise<Article[]> => {
  try {
    // Generamos un timestamp para forzar la actualización y saltarnos la caché del proxy
    const timestamp = Date.now();
    // Añadimos el parámetro al feed original para que el proxy no use su propia caché
    const targetUrlWithBuster = `${RSS_FEED_URL}?t=${timestamp}`;
    
    // Realizamos la petición añadiendo también un parámetro nocache a la API del proxy
    const response = await fetch(`${PROXY_URL}${encodeURIComponent(targetUrlWithBuster)}&nocache=${timestamp}`);
    
    if (!response.ok) throw new Error('Failed to fetch articles');
    
    const data: RSSResponse = await response.json();
    
    if (data.status !== 'ok') {
       console.error('RSS Proxy Error:', data);
       return [];
    }

    // Procesar artículos para asegurar que tenemos la imagen correcta y datos actualizados
    const processedArticles = data.items.map(article => {
      // Buscamos la imagen en 'content' o 'description' (rss2json suele mapear CDATA aquí)
      const extractedImg = extractPrimaryImage(article.content) || extractPrimaryImage(article.description);
      
      return {
        ...article,
        thumbnail: extractedImg || article.thumbnail // Preferimos la extraída específicamente
      };
    });

    return processedArticles.slice(0, limit);
  } catch (error) {
    console.error('Error fetching RSS:', error);
    return [];
  }
};
