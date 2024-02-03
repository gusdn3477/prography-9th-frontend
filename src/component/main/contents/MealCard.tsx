import { MealModel } from '../../../model';
import { StyledCard, StyledImageWrapper, StyledMealName } from './style';

interface MealCardProps {
  meal: MealModel;
}
export const MealCard = ({ meal }: MealCardProps) => {
  return (
    <StyledCard>
      <StyledImageWrapper>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </StyledImageWrapper>
      <StyledMealName>{meal.strMeal}</StyledMealName>
    </StyledCard>
  );
};
