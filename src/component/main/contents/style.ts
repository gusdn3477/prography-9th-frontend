import styled from '@emotion/styled';

export const StyledContents = styled('div')`
  margin-top: 40px;
`;

export const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

export const StyledSelect = styled.select`
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  &:focus {
    border-color: #007bff;
  }
`;

export const StyledOption = styled.option`
  background-color: #999999;
  color: white;
`;

export const StyledCardList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
`;

export const StyledCard = styled('li')`
  width: 215px;
  height: 215px;
  margin: 20px 10px 40px 10px;
`;

export const StyledImageWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dee2e6;
  border-radius: 24px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export const StyledMealName = styled.strong`
  font-size: 12px;
`;

export const StyledSpan = styled.span`
  text-decoration: underline;
`;
