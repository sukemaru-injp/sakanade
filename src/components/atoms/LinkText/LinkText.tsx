import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

export const LinkText = ({ children, ...props }: LinkProps) => {
  return (
    <LinkStyle {...props}>
      {children}
    </LinkStyle>
  );
};

const LinkStyle = styled(RouterLink)`
text-decoration: none;
`;
