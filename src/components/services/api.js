import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  key: '31994022-24f6d7612a194f8b404d57867',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}`);
  return response.data;
};
