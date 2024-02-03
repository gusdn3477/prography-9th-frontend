import { Contents } from './contents';
import { Category } from './category';
import * as S from './style';

export const Main = () => {
  return (
    <S.StyledMain>
      <div>
        <Category />
        <Contents />
      </div>
    </S.StyledMain>
  );
};
