import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import '../contentButtons/buttonStyle.css'
// import { Roll } from 'react-awesome-reveal'
function Buttons({filterByCategory,allSpecificCategory}) {
console.log(allSpecificCategory)

  const filtered=(cat)=>{
    filterByCategory(cat)
   
  }

  return (
    <div className='data'>
        <Row>
          <Col>
              <h4 className='text-dark text-center pt-3'>قائمة الطعام</h4>
              <span className=''></span>
          </Col>
        </Row>
        
        <Row>
          <Col>
          
              <div className='mainButtons d-flex justify-content-center pt-4'>
                  {
                    allSpecificCategory.length >=1 ?(allSpecificCategory.map((item)=>{
                      return<Button onClick={()=>filtered(item)} variant="outline-warning text-dark me-2 ">{item}</Button>
                    })):(<h3>لا يوجد اصناف</h3>)
                  }              
              </div>
         
          </Col>
        </Row>
    </div>
  )
} 
export default Buttons