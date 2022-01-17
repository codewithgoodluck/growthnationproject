import React from 'react'
import Hero from '../component/cover/Hero'
import NavbarSec from '../component/cover/NavbarSec'
import styled from 'styled-components'
import SectionOne from '../component/cover/SectionOne'
import SectionTwo from '../component/cover/SectionTwo'


function Home() {
    return (
 

            <HomeParent>
            <NavbarSec></NavbarSec>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        
            </HomeParent>
          
          
      
    )
}

export default Home

const HomeParent = styled.div`



`
