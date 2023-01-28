import * as S from './styles';

export function Header({title}: {title: string}) {
  return (
    <S.Header>
      <S.HeaderTitle>
        {title}
      </S.HeaderTitle>
    </S.Header>
  );
}
