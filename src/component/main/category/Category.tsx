import { useEffect } from 'react';
import { categoryStore } from '../../../store/CategoryStore';
import { observer } from 'mobx-react-lite';
import { CategoryModel } from '../../../model';
import * as S from './style';
import { mealStore } from '../../../store/MealStore';
import qs from 'qs';

interface CategoryItemProps {
  category: CategoryModel;
}

export interface StyledCategoryItemProps {
  clicked?: boolean;
}

export const CategoryItem = observer(({ category }: CategoryItemProps) => {
  const handleClick = async () => {
    categoryStore.setCategories(category);

    if (
      categoryStore.clickedCategories.find(
        (item) => item.idCategory === category.idCategory
      )
    )
      return;
    await getMeals(category);
  };
  const isClicked = () => {
    const res = categoryStore.selectedCategories.find(
      (item) => item.idCategory === category.idCategory
    );
    if (res) return true;
    return false;
  };

  const getMeals = async (selectedCategory: CategoryModel) => {
    if (
      categoryStore.clickedCategories.find(
        (item) => item.idCategory === selectedCategory.idCategory
      )
    )
      return;

    const res = await mealStore.getMeals(
      qs.stringify({
        c: selectedCategory.strCategory
      })
    );
    categoryStore.setClickedCategories(selectedCategory);
    if (!mealStore.mealsPerCategory.has(selectedCategory.idCategory))
      mealStore.setMealsPerCategory(selectedCategory.idCategory, res);
  };

  return (
    <S.StyledCategoryItem onClick={handleClick} clicked={isClicked()}>
      <b>{category.strCategory}</b>
    </S.StyledCategoryItem>
  );
});

export const Category = observer(() => {
  const getCategories = async () => {
    await categoryStore.getCatetories();
  };

  useEffect(() => {
    getCategories();
  }, []);

  const categories = categoryStore.categories.map((item) => (
    <CategoryItem key={item.idCategory} category={item} />
  ));
  return <S.StyledCategories>{categories}</S.StyledCategories>;
});
