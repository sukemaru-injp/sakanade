import React from 'react';
import { LinkText } from '../atoms/LinkText';
import styled from 'styled-components';
import { TbPlaneDeparture} from 'react-icons/tb'
import { ethers } from 'ethers'

const App: React.FC = () => {
  console.log(ethers)
  return (
    <>
      <h1>TopPage</h1>
      <LinkText to='/sauna'>
        Goto Sauna
        <TbPlaneDeparture />
      </LinkText>
    </>
  );
};

const Test = styled.main`
height: 200vh;
background-color: #ccc;
`;

export default App;
