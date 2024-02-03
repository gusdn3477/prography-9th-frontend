import { makeAutoObservable, toJS } from 'mobx';
import { MealModel } from '../model';
import { API } from '../api';

class MealStore {
  private _meals: MealModel[] = [];
  private _currentCount = 0;
  private _totalCount = 0;
  private _sortOrder: 'recent' | 'ascending' | 'decending' = 'recent';
  private _numberOfVisible: 2 | 4 = 2;

  constructor() {
    makeAutoObservable(this);
  }

  async getMeals() {
    try {
      const response = await API.getMeals();
      this._meals = response;
    } catch (e) {
      console.log(e);
    }
  }

  get meals() {
    return toJS(this._meals);
  }
}

export const mealStore = new MealStore();
