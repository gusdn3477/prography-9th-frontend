import styled from '@emotion/styled';
import { StyledCategoryItemProps } from './Category';

export const StyledCategoryItem = styled.li<StyledCategoryItemProps>`
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

export const StyledCategories = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
`;
