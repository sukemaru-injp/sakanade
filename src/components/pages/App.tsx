import React from 'react';
import { LinkText } from '../atoms/LinkText';
import styled from 'styled-components';
import { TbPlaneDeparture} from 'react-icons/tb'
import { Loader } from '../atoms/Loader';

const App = () => {
  return (
    <>
      <Loader />
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
