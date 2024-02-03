import { Card } from './card/Card';
import { Category } from './category';
import * as S from './styled';

export const Main = () => {
  return (
    <S.StyledBody>
      <Category />
      <Card />
    </S.StyledBody>
  );
};
