import { makeAutoObservable, toJS } from 'mobx';
import { CategoryModel } from '../model';
import { API } from '../api';

class CategoryStore {
  private _categories: CategoryModel[] = [];
  private _selectedCategories: CategoryModel[] = [];
  private _clickedCategories: CategoryModel[] = [];

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

  get clickedCategories() {
    return toJS(this._clickedCategories);
  }

  setCategories(selectedCategory: CategoryModel) {
    const res = this._selectedCategories.find(
      (item) => item.idCategory === selectedCategory.idCategory
    );
    if (res) {
      this._selectedCategories = this._selectedCategories.filter(
        (item) => item.idCategory !== selectedCategory.idCategory
      );
    } else {
      this._selectedCategories = [
        ...this._selectedCategories,
        selectedCategory
      ];
    }
  }

  setClickedCategories(category: CategoryModel) {
    this._clickedCategories = [...this._clickedCategories, category];
  }
}

export const categoryStore = new CategoryStore();
