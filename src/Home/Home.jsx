import React from 'react'
import Hero from '../component/cover/Hero'
import NavbarSec from '../component/cover/NavbarSec'
import styled from 'styled-components'
import SectionOne from '../component/cover/SectionOne'
import SectionTwo from '../component/cover/SectionTwo'
import SectionThree from '../component/cover/SectionThree'
import SectionFour from '../component/cover/SectionFour'
import SectionFive from '../component/cover/SectionFive'
import SectionSix from '../component/cover/SectionSix'
import SectionSeven from '../component/cover/SectionSeven'


function Home() {
    return (
 

            <HomeParent>
            <NavbarSec></NavbarSec>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <SectionFour></SectionFour>
            <SectionFive></SectionFive>
            <SectionSix></SectionSix>
            <SectionSeven></SectionSeven>
        
            </HomeParent>
          
          
      
    )
}

export default Home

const HomeParent = styled.div`



`
