import React from 'react'
import { Row, Col, Button, } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <Row>
                <Col lg={{span:'4', offset:'1'}} className='footer-content'>
                    <p style={{ fontSize: '2em' }}> Contact Us</p>
                    <div >
                        <p> <i class="fa fa-location-arrow" aria-hidden="true" style={{padding:'5px'}}></i> St Mary's College(Autonomous), </p>
                        <p>104, North Beach Road , </p> 
                        <p>Thoothukudi -628001, Tamilnadu, India.</p>
                        <p> <i class="fa fa-phone" aria-hidden="true"  style={{padding:'5px'}}></i>  8680921975 </p>
                        <p> <i class="fa fa-envelope" aria-hidden="true"  style={{padding:'5px'}}></i> smctuty@gmail.com</p>

                    </div>

                </Col>
                <Col lg='2'>

                </Col>
                <Col lg={{span:'4', offset:'1'}} className='footer-content'>
                    <p style={{ fontSize: '2em' }}> Quick Links</p>
                    <a href='http://stmaryscollege.edu.in/' > <i class="fa fa-globe" aria-hidden="true" style={{padding:'5px'}}></i> www.stmaryscollege.edu.in </a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
