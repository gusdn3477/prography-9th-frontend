import styled from '@emotion/styled';
import prographyLogo from '/prography.png';

export const Header = () => {
  return (
    <StyledHeader>
      <a href="https://prography.org/" target="_blank">
        <img src={prographyLogo} className="logo react" alt="Prography Logo" />
      </a>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 10px;
`;
