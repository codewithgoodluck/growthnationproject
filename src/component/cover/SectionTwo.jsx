
import React from 'react'
import styled from 'styled-components'
import bg from "./Images/bg.png"
import sectionTwobg from "./Images/countdown.png"
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import { Devices } from './Devices';


function SectionTwo() {
    return (
        <SectionTwoCover>
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
      </SectionTwoCover>
    )
}

export default SectionTwo


const SectionTwoCover=styled.div`

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
  justify-content:space-around;
  width:50%;
  margin-left:25%;
  margin-top:50px;
  flex-flow:row wrap;
  @media ${Devices.mobileL} {
   
  
   }

  

 }
 
 

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

  @media ${Devices.mobileL} {
   
   

   }


  @media ${Devices.laptop} {
 
 
   }

  
  


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