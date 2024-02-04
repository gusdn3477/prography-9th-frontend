import { observer } from 'mobx-react-lite';
import {
  StyledCardList,
  StyledContents,
  StyledDropdown,
  StyledOption,
  StyledSelect,
  StyledSpan
} from './style';
import { ChangeEvent, useState } from 'react';
import { mealStore } from '../../../store/MealStore';
import { MealCard } from '.';
import { isMobile } from 'react-device-detect';
import { sort } from '../../util/sort';

export const Contents = observer(() => {
  const [visibleCount, setVisibleCount] = useState<1 | 2 | 4>(isMobile ? 1 : 4);
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

  const meals = sort(mealStore.meals, filter);

  const mealList = meals.map((meal) => (
    <MealCard meal={meal} key={meal.idMeal} visibleCount={visibleCount} />
  ));

  return (
    <StyledContents>
      <StyledDropdown>
        <div>
          <strong>
            <StyledSpan>{mealStore.currentCount}</StyledSpan> /
            <StyledSpan>{mealStore.totalCount}</StyledSpan> 개 조회
          </strong>
        </div>
        <div>
          <StyledSelect value={filter} onChange={handleFilterChange}>
            <StyledOption value="now">최신순</StyledOption>
            <StyledOption value="ascending">이름 오름차순</StyledOption>
            <StyledOption value="decending">이름 내림차순</StyledOption>
          </StyledSelect>
          {!isMobile && (
            <StyledSelect
              value={visibleCount}
              onChange={handleVisibleCountChange}
              style={{ marginLeft: '10px' }}
            >
              <StyledOption value="2">2개씩 보기</StyledOption>
              <StyledOption value="4">4개씩 보기</StyledOption>
            </StyledSelect>
          )}
        </div>
      </StyledDropdown>
      <StyledCardList>{mealList}</StyledCardList>
    </StyledContents>
  );
});
