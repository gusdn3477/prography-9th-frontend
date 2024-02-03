import { useEffect } from 'react';
import styled from '@emotion/styled';
import { categoryStore } from '../../../store/CategoryStore';
import { observer } from 'mobx-react-lite';
import { CategoryModel } from '../../../model';

interface CategoryItemProps {
  category: CategoryModel;
}

interface StyledCategoryItemProps {
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
    <StyledCategoryItem
      onClick={() => categoryStore.setCategories(category)}
      clicked={isClicked()}
    >
      <b>{category.strCategory}</b>
    </StyledCategoryItem>
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
  return <StyledCategories>{categories}</StyledCategories>;
});

const StyledCategoryItem = styled.li<StyledCategoryItemProps>`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 0 10px 0 10px;
  justify-content: center;
  border: 1px solid #dee2e6;
  height: 50px;
  border-radius: 24px;
  transition: box-shadow 0.3s ease;
  background-color: ${(props) => (props.clicked ? '#9999cc' : 'none')};
  cursor: pointer;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #9999cc;
  }
`;

const StyledCategories = styled('ul')`
  display: flex;
  width: 840px;
  flex-wrap: wrap;
  list-style-type: none;
`;
