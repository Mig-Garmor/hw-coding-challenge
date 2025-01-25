import apiClient from '@/services/apiClient.js';

/**
 * Fetch latest articles from the API.
 * Query parameters (e.g., category, country, language, page).
 * @param {Object} params
 * Response data containing articles and pagination info.
 * @returns {Promise<Object>} 
 */
export async function getLatestArticles(params = {}) {
  return apiClient.get('/latest', { params });
}
