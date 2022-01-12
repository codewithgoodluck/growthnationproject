import React from 'react'
// import { Button } from 'react-bootstrap'
import styled from 'styled-components'
function SectionFour(props) {
    return (

      <SectionFourContainer>
        <div>
          <h3>
          {props.title}
          </h3>
        </div>

      </SectionFourContainer>
      
  
    )
}

export default SectionFour


const SectionFourContainer = styled.div`
h3{
  text-align:center;
  margin-top:30px;
  margin-bottom:40px;
  color:#85B36B;
}

`