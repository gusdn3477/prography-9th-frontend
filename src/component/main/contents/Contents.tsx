import { observer } from 'mobx-react-lite';
import {
  StyledCardList,
  StyledContents,
  StyledDropdown,
  StyledOption,
  StyledSelect
} from './style';
import { useEffect, useState } from 'react';
import { mealStore } from '../../../store/MealStore';
import { MealCard } from '.';

export const Contents = observer(() => {
  const [selectedValue, setSelectedValue] = useState('');

  // 사용자가 select에서 선택할 때 호출될 함수
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const getMeals = async () => {
    await mealStore.getMeals();
  };
  useEffect(() => {
    getMeals();
  }, []);

  const mealCard = mealStore.meals.map((meal) => (
    <MealCard meal={meal} key={meal.idMeal} />
  ));

  return (
    <StyledContents>
      <StyledDropdown>
        <div>
          <span>
            {20} / {100}개 조회
          </span>
        </div>
        <div>
          <StyledSelect value={selectedValue} onChange={handleChange}>
            <StyledOption value="">선택해주세요</StyledOption>
            <StyledOption value="option1">옵션 1</StyledOption>
            <StyledOption value="option2">옵션 2</StyledOption>
            <StyledOption value="option3">옵션 3</StyledOption>
          </StyledSelect>

          <StyledSelect value={selectedValue} onChange={handleChange}>
            <StyledOption value="">선택해주세요</StyledOption>
            <StyledOption value="option1">옵션 1</StyledOption>
            <StyledOption value="option2">옵션 2</StyledOption>
            <StyledOption value="option3">옵션 3</StyledOption>
          </StyledSelect>
        </div>
      </StyledDropdown>
      <StyledCardList>{mealCard}</StyledCardList>
    </StyledContents>
  );
});
