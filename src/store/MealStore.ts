import { makeAutoObservable, toJS } from 'mobx';
import { MealModel } from '../model';
import { API } from '../api';

class MealStore {
  private _meals: MealModel[] = [];
  private _currentCount = 0;
  private _totalCount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  async getMeals(queryString: string) {
    try {
      if (queryString.includes('c')) {
        const response = await API.getMeals(queryString);
        this._meals = response;
        this._totalCount = response.length;
        this._currentCount = response.length > 20 ? 20 : response.length;
      } else this.setMeals([]);
    } catch (e) {
      console.log(e);
    }
  }

  get meals() {
    return toJS(this._meals);
  }

  get totalCount() {
    return this._totalCount;
  }

  get currentCount() {
    return this._currentCount;
  }

  setMeals(meals: MealModel[]) {
    this._meals = meals;
  }
}

export const mealStore = new MealStore();
