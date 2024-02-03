import { useEffect } from 'react';
import styled from '@emotion/styled';
import { categoryStore } from '../../../store/CategoryStore';
import { observer } from 'mobx-react-lite';

interface CategoryItemProps {
  strCategory: string;
}

export const CategoryItem = ({ strCategory }: CategoryItemProps) => {
  return (
    <StyledCategoryItem>
      <b>{strCategory}</b>
    </StyledCategoryItem>
  );
};

export const Category = observer(() => {
  const getCategories = async () => {
    await categoryStore.getCatetories();
  };
  useEffect(() => {
    getCategories();
  }, []);

  const categories = categoryStore.categories.map((item) => (
    <CategoryItem key={item.idCategory} strCategory={item.strCategory} />
  ));
  return <StyledCategories>{categories}</StyledCategories>;
});

const StyledCategoryItem = styled('li')`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 0 10px 0 10px;
  justify-content: center;
  border: 1px solid #dee2e6;
  height: 50px;
  border-radius: 24px;
  transition: box-shadow 0.3s ease;
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
