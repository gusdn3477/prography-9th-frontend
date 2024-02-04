import { observer } from 'mobx-react-lite';
import {
  StyledCardList,
  StyledContents,
  StyledDropdown,
  StyledOption,
  StyledSelect,
  StyledSpan
} from './style';
import { ChangeEvent, useRef, useState } from 'react';
import { mealStore } from '../../../store/MealStore';
import { MealCard } from '.';
import { isMobile } from 'react-device-detect';
import { sort } from '../../../util/sort';
import { categoryStore } from '../../../store/CategoryStore';
import { MealModel } from '../../../model';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export const Contents = observer(() => {
  const [visibleCount, setVisibleCount] = useState<1 | 2 | 4>(isMobile ? 1 : 4);
  const [filter, setFilter] = useState<'now' | 'ascending' | 'decending'>(
    'now'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const target = useRef();

  const [observe, unobserve] = useIntersectionObserver(() => {
    setNextIndex((nextIndex) => nextIndex + 1);
  });

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

  const filteredMeal = () => {
    const _meal: MealModel[] = [];
    for (let i = 0; i < categoryStore.selectedCategories.length; i++) {
      if (
        mealStore.mealsPerCategory.has(
          categoryStore.selectedCategories[i].idCategory
        )
      ) {
        const mealArray = mealStore.mealsPerCategory.get(
          categoryStore.selectedCategories[i].idCategory
        );
        if (mealArray) _meal.push(...mealArray);
      }
    }
    const _sortedMeal = sort(_meal, filter);
    mealStore.setFilteredMeals(_sortedMeal);
    return _sortedMeal;
  };

  const mealList = filteredMeal()
    .slice(currentIndex * 20, nextIndex * 20)
    .map((meal) => (
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
