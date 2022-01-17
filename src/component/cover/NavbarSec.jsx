import React from 'react'
import styled from 'styled-components'
import bg from "./Images/bg.png"
import sectionTwobg from "./Images/countdown.png"
// import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Hero from './Hero'

function NavbarSec() {
    return (

   <div>
          <NavbarParent>
      <div className='polygon'>
   <img src="Images/Polygon 1.png" alt="" />
</div>
        <div className="container fluid">
    
        <div className='container-parent'>

<div className='image'>
   <img src="Images/Logo2.png" alt="" />
</div>
<div>
De Growth <br></br>
   Nation <br></br>
   Club <br></br>
   Guarrented Succes
</div>


 
</div>
        <Navbar  expand="lg">
        <Container  fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             <Nav.Link href="#home" className='navmenue'>About</Nav.Link>
      <Nav.Link href="#features"  className='navmenue'>What you learn</Nav.Link>
      <Nav.Link href="#pricing"  className='navmenue'>Tariners</Nav.Link>
      <Nav.Link href="#features"  className='navmenue'>Schedule</Nav.Link>
      <Nav.Link href="#pricing"  className='navmenue'>What you get </Nav.Link>
      <Nav.Link href="#features"  className='navmenue'>Membership</Nav.Link>
      <Nav.Link href="#pricing"  className='navmenue'>Tickets</Nav.Link>
     
            </Nav>
            <Form className="d-flex">
             
              <Button style={{backgroundColor:"#124C65", marginLeft:"20px", border:"none", color:"white"}} variant="outline-success">Contact US</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  
      
        </div>

    </NavbarParent>

    <Herocover>
    <Hero></Hero>
    </Herocover>


   </div>
 
        
    )
}

export default NavbarSec


const NavbarParent=styled.div`
background:url(${bg});background-size: cover; background-repeat:no-repeat; height:610px;
background-color:none;
color:white;
position:relative;
z-index:10000;

.polygon{
    z-index:-1000;
    top:110px;
    position:absolute;
    width:100%;
}


.container-parent{
    display:flex;
    position:relative;
    margin-top:10px;
    .image{
       float:left;
    }


    ul{
   

    }

}

.container{
    display:flex;
    justify-content:space-evenly;
   
.navmenue{
    color:white;
    margin-left:10px;
}
}



img{

  height:auto;
  margin-top:10px;

}



  

 
// }




`

const Herocover=styled.div`
position:absolute;
top:150px;
width:100%;
z-index:20000;
`

