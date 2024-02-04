import { forwardRef } from 'react';
import { MealModel } from '../../../model';
import { StyledCard, StyledImageWrapper, StyledMealName } from './style';

export interface MealCardProps {
  meal: MealModel;
  visibleCount: number;
}
export const MealCard = forwardRef(({ meal, visibleCount }: MealCardProps) => {
  return (
    <StyledCard meal={meal} visibleCount={visibleCount}>
      <StyledImageWrapper>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </StyledImageWrapper>
      <StyledMealName>{meal.strMeal}</StyledMealName>
    </StyledCard>
  );
});
