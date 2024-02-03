import { makeAutoObservable, toJS } from 'mobx';
import { CategoryModel } from '../model';
import { API } from '../api';

class CategoryStore {
  private _categories: CategoryModel[] = [];
  private _selectedCategories: CategoryModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getCatetories() {
    try {
      const response = await API.getCategories();
      this._categories = response;
    } catch (e) {
      console.log(e);
    }
  }

  get categories() {
    return toJS(this._categories);
  }

  get selectedCategories() {
    return toJS(this._selectedCategories);
  }
}

export const categoryStore = new CategoryStore();
