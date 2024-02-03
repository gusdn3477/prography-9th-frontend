import { observer } from 'mobx-react-lite';
import {
  StyledCardList,
  StyledContents,
  StyledDropdown,
  StyledOption,
  StyledSelect
} from './style';
import { ChangeEvent, useEffect, useState } from 'react';
import { mealStore } from '../../../store/MealStore';
import { MealCard } from '.';
import { categoryStore } from '../../../store/CategoryStore';
import qs from 'qs';
import { CategoryModel } from '../../../model';

export const Contents = observer(() => {
  const [visibleCount, setVisibleCount] = useState<1 | 2 | 4>(4);
  const [filter, setFilter] = useState<'now' | 'ascending' | 'decending'>(
    'now'
  );

  // 사용자가 select에서 선택할 때 호출될 함수
  const handleVisibleCountChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const count = Number(event.target.value);
    if (count === 1 || count === 2 || count === 4) setVisibleCount(count);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value;
    if (filter === 'now' || filter === 'ascending' || filter === 'decending')
      setFilter(filter);
  };

  const getMeals = async (category: CategoryModel[]) => {
    const categoryNames = category.map((item) => item.strCategory);
    await mealStore.getMeals(
      qs.stringify(
        {
          c: categoryNames
        },
        { arrayFormat: 'repeat' }
      )
    );
  };

  const mealCard = mealStore.meals.map((meal) => (
    <MealCard meal={meal} key={meal.idMeal} />
  ));

  useEffect(() => {
    getMeals(categoryStore.selectedCategories);
  }, [categoryStore.selectedCategories]);

  return (
    <StyledContents>
      <StyledDropdown>
        <div>
          <span>
            {mealStore.currentCount} / {mealStore.totalCount}개 조회
          </span>
        </div>
        <div>
          <StyledSelect value={filter} onChange={handleFilterChange}>
            <StyledOption value="now">최신순</StyledOption>
            <StyledOption value="ascending">이름 오름차순</StyledOption>
            <StyledOption value="decending">이름 내림차순</StyledOption>
          </StyledSelect>

          <StyledSelect
            value={visibleCount}
            onChange={handleVisibleCountChange}
          >
            <StyledOption value="2">2개씩 보기</StyledOption>
            <StyledOption value="4">4개씩 보기</StyledOption>
          </StyledSelect>
        </div>
      </StyledDropdown>
      <StyledCardList>{mealCard}</StyledCardList>
    </StyledContents>
  );
});
