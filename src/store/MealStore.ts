import { makeAutoObservable, toJS } from 'mobx';
import { MealModel } from '../model';
import { API } from '../api';

class MealStore {
  private _meals: MealModel[] = [];
  private _mealsPerCategory = new Map<string, MealModel[]>();

  constructor() {
    makeAutoObservable(this);
  }

  async getMeals(queryString: string) {
    try {
      if (queryString.includes('c')) {
        const response = await API.getMeals(queryString);
        this._meals = [...this._meals, ...response];
        return response;
      } else this.setMeals([]);
    } catch (e) {
      console.log(e);
    }
  }

  get mealsPerCategory() {
    return toJS(this._mealsPerCategory);
  }

  get meals() {
    return toJS(this._meals);
  }

  get totalCount() {
    return this._meals.length;
  }

  get currentCount() {
    return this._meals.length > 20 ? 20 : this._meals.length;
  }

  setMeals(meals: MealModel[]) {
    this._meals = meals;
  }

  setMealsPerCategory(id: string, meals: MealModel[]) {
    this._mealsPerCategory.set(id, meals);
  }
}

export const mealStore = new MealStore();
