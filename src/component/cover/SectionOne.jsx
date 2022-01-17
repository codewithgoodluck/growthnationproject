import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import styled from 'styled-components'

function SectionOne() {
    return (
         <SectionOneCover>

<CardGroup>
  <Card>
    <Card.Img variant="top"/>
    <Card.Body>
    <div className="sectionInner">
          <div>
          <img src="Images/date.png" alt="" />
          </div>
          
          <div> <span>Date</span> <br></br>
          <span>28th-30th December, 2021</span>
          
          </div>
         
      
        </div>
      
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
   
    <div className="sectionInner">
          <div>
          <img src="Images/check.png" alt="" />
          </div>
          
          <div> <span>Location</span> <br></br>
          <span>Virtual: Zoom</span>
          
          </div>
         
      
        </div>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
    <div className="sectionInner">
          <div>
          <img src="Images/people.PNG" alt="" />
          </div>
          
          <div> <span>Speakers</span> <br></br>
          <span>Daniel Oratokhai + guest</span>
          
          </div>
         
      
        </div>
    </Card.Body>

  </Card>

  <Card>
    <Card.Img variant="top" />
    <Card.Body>
   
    <div className="sectionInner">
          <div>
          <img src="Images/ticket.png" alt="" />
          </div>
          
          <div> <span>Tickets</span> <br></br>
          <span>N10,000</span>
          <span>Specail, Pricing for Students and None Profit</span>
          
          </div>
         
      
        </div>
      
    </Card.Body>
   
  </Card>
</CardGroup>
      
      
      
      </SectionOneCover>
    )
}

export default SectionOne

const SectionOneCover = styled.div`

div.card{
  border:none;
}

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
