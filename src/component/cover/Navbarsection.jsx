import React from 'react'
import styled from 'styled-components'
import bg from "./Images/bg.png"
import sectionTwobg from "./Images/countdown.png"
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'


const Navbarsection = () => {
    return (
     <div>
     <Overlay>
  
      <NavbarParent>
      <div className='container'>
      <Navbar>
        <div>
        <img src="Images/Logo2.png" alt="" />
        </div>
        <div>
          <ul>
            <li>De Growth</li>
            <li>Nation</li>
            <li>Club</li>
            <li>Guarrented Succes</li>
          </ul>
        </div>
        <div>
       
       <Container>
      <Navbar.Brand href="#home">
      </Navbar.Brand>
       <Nav className="me-auto">
      <Nav.Link href="#home" className='navmenue'>About</Nav.Link>
      <Nav.Link href="#features"  className='navmenue'>What you learn</Nav.Link>
      <Nav.Link href="#pricing"  className='navmenue'>Tariners</Nav.Link>
      <Nav.Link href="#features"  className='navmenue'>Schedule</Nav.Link>
      <Nav.Link href="#pricing"  className='navmenue'>What you get </Nav.Link>
      <Nav.Link href="#features"  className='navmenue'>Membership</Nav.Link>
      <Nav.Link href="#pricing"  className='navmenue'>Tickets</Nav.Link>
      <Nav.Link href="#pricing" className='navmenue' ><Button style={{backgroundColor:"#124C65", border:"none", color:"white"}}>Contact Us</Button></Nav.Link>
    </Nav>
    </Container>
  
        </div>
        </Navbar>
      </div>

    
      </NavbarParent>
    
    </Overlay>

{/* <SectionOne>
  <div className="sectionParent container">
  <div className="sectionInner">
    <div>
    <img src="Images/date.png" alt="" />
    </div>
    
    <div> <span>Date</span> <br></br>
    <span>28th-30th December, 2021</span>
    
    </div>
   

  </div>

  <div className="sectionInner">
    <div>
    <img src="Images/check.png" alt="" />
    </div>
    
    <div> <span>Location</span> <br></br>
    <span>Virtual: Zoom</span>
    
    </div>
   

  </div>


  <div className="sectionInner">
    <div>
    <img src="Images/people.PNG" alt="" />
    </div>
    
    <div> <span>Speakers</span> <br></br>
    <span>Daniel Oratokhai + guest</span>
    
    </div>
   

  </div>


  <div className="sectionInner">
    <div>
    <img src="Images/ticket.png" alt="" />
    </div>
    
    <div> <span>Tickets</span> <br></br>
    <span>N10,000</span>
    <span>Specail, Pricing for Students and None Profit</span>
    
    </div>
   

  </div>


  </div>


</SectionOne>


<SectionTwo>
  <div className='parentsectionTwo'>
  <h1>Count down until the big event</h1>
    <div className='parent_square'>
   <div className="square">
        <div>
          <span>0</span>
          <span>0</span>
        </div>
        <div>
           Weeks
        </div>

   </div>
   <div className="square">
        <div>
          <span>0</span>
          <span>0</span>
        </div>
        <div>
            Days
        </div>

   </div>
   <div className="square">
        <div>
          <span>0</span>
          <span>0</span>
        </div>
        <div>
           Hours
        </div>

   </div>
   <div className="square">
        <div>
          <span>0</span>
          <span>0</span>
        </div>
        <div>
           Minutes
        </div>

   </div>

   <div className="square">
        <div>
          <span>0</span>
          <span>0</span>
        </div>
        <div>
           Seconds
        </div>

   </div>
   </div>
  </div> 
</SectionTwo>

<SectionThree>
</SectionThree>

<SectionFour title="What You Will Learn">
</SectionFour>
<SectionFive></SectionFive>

<SectionFour title="Our Trainers">
</SectionFour>

<SectionSix></SectionSix> */}



     </div>
     
    )
}

export default Navbarsection
const Overlay=styled.div`
width: 100%; 
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.4);
z-index:999:


`

const NavbarParent=styled.div`
z-index: -5000; 
position:relative;
background:url(${bg});background-size: cover; background-repeat:no-repeat; height:610px;;

background-color:none;
img{

  height:auto;
  margin-top:10px;
}

.container{
  display:flex;

  ul{
    list-style:none;
    color:white;
    margin-top:10px;
    font-weight:bold;
    font-size:15px;
  }
  .navmenue{
    color:white;
    margin-top:10px;
    font-weight:bold;
    font-size:15px;
    padding-left:10px;
  }

  Button{
    width:110px;
    position:absolute;
    height:45px;
    font-size:15px;
    font-weight:bold;
    color:white;
    top:14px;

  }
}

.hero_section{


  .polygon_eclips_section{
    position:relative;
    display:flex;
    justify-content:space-between;
  
    .polygon{

      img{
        margin-right:80px;
        margin-top:40px;
      }
    }

  }

  .hero_section_text{
    position:absolute;
    top:0;
    margin-top:200px;
    color:white;
    display:flex;
    justify-content:space-between;

    .hero_section_text_left{
      padding-left:50px;

      h3{
        font-weight:bold;
      }

      h1{
        font-size:60px;
      }
    }

  }

}


`

const SectionOne=styled.div`

.sectionParent{
  display:flex;
  justify-content:space-between;
  margin-top:50px;
}



 .sectionInner{
  display:flex;
  align-items:center;
  padding-top:20px;
  padding-bottom:20px;

  div{
    margin-left:20px;
  }

  img{
    width:50px;
    height:50px;
  }

 }

`

const SectionTwo=styled.div`
position:relative;
background:url(${sectionTwobg});background-size: cover; background-repeat:no-repeat; height:300px;;
background-color:none;
margin-top:70px;
margin-bottom:50px;
text-align:center;
color:white;


.parent_square{
  display:flex;
  align-item:center;
  justify-content:space-between;
  width:50%;
  margin-left:24%;
  margin-top:50px;
}

.square {
  height: 100px;
  width: 100px;
  background-color: white;
  color:black;
  display:flex;
  align-items:center;
  flex-direction:column;
  padding-top:15px;
  border-radius:10px;



  span,div{
    font-size:20px;
    padding-left:1px; 
    color:#124C65;
    font-weight:bold; 
  }
}

.parentsectionTwo{
  height:300px;
  text-align: center;
  padding-top: 30px;
  color: white;
  overflow: hidden;
  background: #C04848;  /* fallback for old browsers */
  background: linear-gradient(rgb(0,0,0,0.8), rgb(0,0,0,0.8)), url(${sectionTwobg},  height:600px);  /* Chrome 10-25, Safari 5.1-6 */
  background-size: cover;
  background-repeat: no-repeat;


  h1{
font-size:30px;
font-weight:bold;
  }

}


`



