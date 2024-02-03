import { useState } from 'react';
import styled from '@emotion/styled';

interface CategoryItemProps {
  name: string;
  thumb: string;
  description: string;
}

export const CategoryItem = ({
  name,
  thumb,
  description
}: CategoryItemProps) => {
  return <StyledCategoryItem>{name}</StyledCategoryItem>;
};

export const Category = () => {
  const [items, setItems] = useState([]);

  return <></>;
};

const StyledCategoryItem = styled('li')`
  width: 100px;
  height: 40px;
  border-radius: 24px;
`;
