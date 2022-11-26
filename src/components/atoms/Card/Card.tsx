import React from "react";
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Card = React.forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
  return (
    <CardStyle ref={ref}>
      {props.children}
    </CardStyle>
  )
})

Card.displayName = 'Card'
export default Card

const CardStyle = styled.div`
  background-color: #fff;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);
  padding: 20px;
`
