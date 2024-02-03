import { useEffect } from 'react';
import { categoryStore } from '../../../store/CategoryStore';
import { observer } from 'mobx-react-lite';
import { CategoryModel } from '../../../model';
import * as S from './style';

interface CategoryItemProps {
  category: CategoryModel;
}

export interface StyledCategoryItemProps {
  clicked?: boolean;
}

export const CategoryItem = observer(({ category }: CategoryItemProps) => {
  const isClicked = () => {
    const res = categoryStore.selectedCategories.find(
      (item) => item.idCategory === category.idCategory
    );
    if (res) return true;
    return false;
  };
  return (
    <S.StyledCategoryItem
      onClick={() => categoryStore.setCategories(category)}
      clicked={isClicked()}
    >
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
