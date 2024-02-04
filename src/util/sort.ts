import { MealModel } from '../model';

export const sort = (
  data: MealModel[],
  filter: 'now' | 'ascending' | 'decending'
) => {
  const _data = [...data];
  if (filter === 'now') {
    _data.sort((a, b) => Number(b.idMeal) - Number(a.idMeal));
  } else if (filter === 'ascending') {
    _data.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
  } else {
    _data.sort((a, b) => b.strMeal.localeCompare(a.strMeal));
  }

  return _data;
};
