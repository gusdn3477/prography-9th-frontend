import axios from 'axios';

class API {
  private _baseURL = 'https://www.themealdb.com';

  getCategories = async () => {
    try {
      const response = await axios.get(
        `${this._baseURL}/api/json/v1/1/categories.php`
      );
      return response.data.categories;
    } catch (e) {
      console.log(e);
    }
  };

  getMeals = async (strCategory?: string) => {
    try {
      const response = await axios.get(
        `${this._baseURL}/api/json/v1/1/filter.php?c=beef`
      );
      return response.data.meals;
    } catch (e) {
      console.log(e);
    }
  };
}

const _API = new API();
export { _API as API };
