import React, { useState } from 'react'
import { LinkText } from '../atoms/LinkText'

const App = () => {
  return (
    <>
      <h1>TopPage</h1>
      <LinkText to='/'>
        Goto
      </LinkText>
    </>
  )
}

export default App
