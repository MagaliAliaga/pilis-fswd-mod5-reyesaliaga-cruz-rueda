const API_URL = 'https://614d02f7e3cf1f001712d7a0.mockapi.io';

export const getItems = async () => {
  const response = await fetch(`${API_URL}/items`);
  const data = await response.json();
  return data;
};
