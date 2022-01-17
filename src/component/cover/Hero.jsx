import React from 'react'
import styled from 'styled-components'
import bg from "./Images/bg.png"
import sectionTwobg from "./Images/countdown.png"
import { Button, Card, CardGroup, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import { Devices } from './Devices';


function Hero() {
    return (

<HeroSection >         
 <CardGroup  >
  <Card >
    <Card.Body>
<div className='hero_section_text'>
  <div className="hero_section_text_left">
  <h3>Present</h3>
  <h1>
    2021 GROWTH
  </h1>
  <h1>
    NATION SUMMIT
  </h1>
  <p>Learn practical growth marketing strategies channels <br/>
such as; Social media marketing, Content marketing,<br/>
digital marketing and six other channels for small
businesses.</p>
  </div>

  <div className='container hero_button'>
  <Button  style={{width:"200px", border:"none",backgroundColor:"white", marginRight:"20px", height:"50px", color:"green"}}>Partner with Us</Button>
  <Button  style={{width:"200px",border:"none",backgroundColor:"#124C65",  height:"50px", color:"white"}}>Get Events Ticket</Button>
  </div>
 
 
  
</div>
    </Card.Body>
  </Card>
  <Card >
    <Card.Body>
<div className='polygon_eclips_section'>
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

<div className='polygon' style={{display:'flex', position:"relative", alignItems:"center",  marginTop:"50px", marginBottom:"50px"}}>
<Button  style={{width:"400px", position:"absolute", border:"none",backgroundColor:"#124C65", marginLeft:"-100px", height:"50px", color:"white"}}>Get Events Ticket</Button>
<div style={{marginBottom:"35px", marginLeft:"300px", position:"absolute"}}>
<img src="Images/Ellipse.png" alt="" />
<img src="Images/Ellipse.png" alt="" />
</div>

</div>

<div className='polygon' style={{display:'flex', position:"relative", alignItems:"center", paddingTop:"20px", marginTop:"50px", marginBottom:"50px"}}>
<Button  style={{width:"400px", position:"absolute", border:"none",backgroundColor:"white", marginLeft:"-100px", height:"50px", color:"green"}}>Partner with Us</Button>
<div style={{marginBottom:"35px", marginLeft:"300px", position:"absolute"}}>
<img src="Images/Ellipse.png" alt="" />
<img src="Images/Ellipse.png" alt="" />
</div>

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
    </Card.Body>
   
  </Card>
 
</CardGroup>

 {/* <div className='hero_section'>
 <div>
<div className='hero_section_text'>
  <div className="hero_section_text_left">
  <h3>Present</h3>
  <h1>
    2021 GROWTH
  </h1>
  <h1>
    NATION SUMMIT
  </h1>
  <p>Learn practical growth marketing strategies channels <br/>
such as; Social media marketing, Content marketing,<br/>
digital marketing and six other channels for small
businesses.</p>
  </div>
</div>
</div>






</div> */}

        </HeroSection>
     
    )
}

export default Hero


const HeroSection = styled.div`

// .hero_button{
//   @media ${Devices.mobileM} {
//     display:block;
//     margin-bottom:70px;
//    }
//  }


.hero_button{
  @media ${Devices.tablet} {
  display:none;
  
  }
}


 .polygon_eclips_section{
  @media ${Devices.mobileM} {
   display:none;
  }
}

.polygon_eclips_section{
  @media ${Devices.mobileS} {
   display:none;
  }
}


.polygon_eclips_section{
  @media ${Devices.mobileL} {
   display:none;
  }
}

.polygon_eclips_section{
  @media ${Devices.tablet} {
   display:none;
  }
}

.polygon_eclips_section{
  @media ${Devices.laptop} {
   display:block;
  }
}

















// .polygon_eclips_section{
//   @media ${Devices.tablet} {
//   display:block;
  
//   }
// }






.card{
  background-color: transparent;
  border: none;
}
   
    .polygon_eclips_section{

      .eclips{
        top:0;
        right:16px;
        position:absolute;

    
      }
      
    .polygon{
      margin-left:110px;
    
      img{
      
        margin-left:80px;
        margin-top:40px;
       
      }
    }
    }
  
    .hero_section_text{
    
      color:white;
      .hero_section_text_left{
        padding-left:40px;
  
        h3{
          font-weight:bold;
        }
  
        h1{
          font-size:60px;
        }
      }
  
    }





  
  
  

`
