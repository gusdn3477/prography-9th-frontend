import axios from 'axios';

const BaseURL = 'https://www.themealdb.com';

export const get = async () => {
  const response = await axios.get(`${BaseURL}/api/json/v1/1/categories.php`);
  const { status, data } = response;
  return { status, data };
};

export const getWithCategory = async (strCategory: string) => {
  const response = await axios.get(`
  ${BaseURL}/api/json/v1/1/filter.php?c=${strCategory}`);

  const { status, data } = response;
  return { status, data };
};
