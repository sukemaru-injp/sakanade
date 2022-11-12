import { ThemeProvider } from 'styled-components'
import React from 'react'

interface ColorType {
  main: string;
  sub: string;
  gray: string;
}

export type Theme = {
    color: ColorType;
};

export const buildTheme = (): Theme => ({
    color: {
      main: "#142343",
      sub: "#FBD349",
      gray: "#F0EEEF",
    },
});

interface Props {
  children: React.ReactNode
}

const ThemeContext: React.FC<Props> = ({ children }) => {

  return (
    <ThemeProvider theme={buildTheme()}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeContext
