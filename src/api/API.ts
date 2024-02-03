import axios from 'axios';

const BaseURL = 'https://www.themealdb.com';

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BaseURL}/api/json/v1/1/categories.php`);
    return response.data.categories;
  } catch (e) {
    console.log(e);
  }
};

export const getItems = async (strCategory?: string) => {
  try {
    let response = undefined;
    if (strCategory)
      response = await axios.get(
        `${BaseURL}/api/json/v1/1/filter.php?c=${strCategory}`
      );
    else {
      response = await axios.get(`${BaseURL}/api/json/v1/1/filter.php`);
    }
    return response.data.meals;
  } catch (e) {
    console.log(e);
  }
};
