import React from "react";
import styled, { keyframes, css } from "styled-components";
import type { Theme } from '../../../providers/ThemeContext'

export const Loader: React.FC = () => {
  return (
    <Wrapper>
      <Circle>
        <CircleCore />
      </Circle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
`

const Circle = styled.div<{ theme: Theme }>`
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(251,211,73);
  background: linear-gradient(0deg, rgba(251,211,73,0.1) 33%, rgba(251,211,73, 1) 100%);
  animation: ${spin} .8s linear 0s infinite;
`

const CircleCore = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 100%;
      background-color: ${theme.color.main};
      border-radius: 50%;
    `
  }}
`
