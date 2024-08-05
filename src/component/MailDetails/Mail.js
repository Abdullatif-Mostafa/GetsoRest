import { Col, Container, Row } from 'react-bootstrap'
import '../MailDetails/mailStyle.css'
import { MailData,desc1,desc2,desc3,desc4 } from '../MailsData'
import  { Zoom } from 'react-awesome-reveal'; 
const Mail = ({dataMailDetails}) => {
    // console.log(`qq ${props.tifa}`)
    // console.log("mm",tifa[0].mail)
  return ( 
    <div className='bd'>
        <Container className='pt-3'>
            <Row className='mailContent'>
            <Zoom>
                <Col sm="12">
                {
                    dataMailDetails.length >=1? dataMailDetails.map((item)=>{
                        return (<div key={item.id} className='MailDeltails mb-1'>
                                <img src={item.img} alt='' className='MailImg'></img>
                                <div className='MailDesc'>
                                    <div className='MailData'>
                                        <small className='diner '>{item.mail} </small>
                                        <small className='price '>{item.price}  </small>
                                    </div>
                                    <div className='mailContDesc m-2'>
                                        <small>{item.desc}</small> 
                                    </div>
                                </div>
                             </div>)
                    }):(<>لا توجد وجبات اليوم</>)
                }
                
                </Col>
                </Zoom>
            </Row>
          
        </Container>
    </div>
  )
}

export default Mail