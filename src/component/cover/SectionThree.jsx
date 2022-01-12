import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
function SectionThree() {
    return (
      
      <div>
        <SectionThreeContainer>
  <div className='parentContainer'>

    <div style={{marginTop:"20px", color:"#85B36B"}}>
    <span>
    About Do Growth Nations Club
    </span>
    </div>  

    <div>
    <div className='eclips'>
        <div className='polygon'>
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        </div>
        <div className='polygon'>
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        </div>

        <div className='polygon'>
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        </div>
        <div className='polygon'>
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        <img src="Images/Ellipse.png" alt="" />
        </div>
        
    </div>
    </div>
  
  </div>


</SectionThreeContainer>

<SecondThreeTextContainer className='container'>
<div className='parentText'>
    <div>
      <p>The Daniel Oratokhai (#DoGrowth) Nation is a club <br></br>  for entrepreneurs who will love to
grow with a daily <br></br>step-by-step hands on guide. It’s a system built <br></br> for repeat  success
and collaboration.</p>
    </div>
    <div>
      <p>
      The system is a day-to-day guide across 25 marketing <br></br>channels and
over 250 types of marketing activities.<br></br> Each marketing channel has guides, checklist
and <br></br>templates to get your team up and running and fill the <br></br> gaps where your team is
less experienced.
      </p>
    </div>
  </div>

  <div style={{marginTop:"20px"}}>
  <Button style={{backgroundColor:"#124C65", border:"none", color:"white", marginLeft:"30%",width:"400px", }}>Get Event Ticket</Button>
  </div>

</SecondThreeTextContainer>
      </div>
      

    )
}

export default SectionThree


const SectionThreeContainer=styled.div`
 .parentContainer{
   top:1170px;
  position:absolute;

     display:flex;
     justify-content:space-between;



    span{
      font-size:30px;
      padding-left:400px;   
      margin-top:20px;
    }

    .polygon{
      margin-bottom:20px;
      margin-top:20px;
      margin-left:200px;
      font-size:1px;
      img{
        padding-right:15px;
        width:40px;
        height:auto;
        padding-left:15px;
      }
    }
 }


`

const SecondThreeTextContainer = styled.div`

display:flex;
flex-direction:column;
justify-content:center;

.parentText{
  display:flex;
  justify-contents:space-between;
  margin-top:180px;
  div{
    margin-left:130px;
  }
}

`