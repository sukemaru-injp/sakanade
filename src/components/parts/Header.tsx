import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <h1>ViteReactDeno</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
position: sticky;
top: 0;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.color.main};
color: ${({ theme }) => theme.color.sub};
`;
export default Header;
