import React from 'react';
import styled from 'styled-components';

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyle>
      <h1>ViteReactDeno</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
position: sticky;
top: 0;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ccc;
`;
export default Header;
