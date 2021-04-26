import React, { Component } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import Img1 from '../../../img/img-05.jpg'
import Galley from './Gallery'
import { Link } from 'react-router-dom'

export class ImageContent extends Component {
    render() {
        return (
            <div style={{ position: 'relative', bottom: '80px', marginTop: '80px' }}>

                <div className='container'>
                    <Row>
                        <Link to='/botany' className='backLink' ><i class="fa fa-hand-o-left"  style={{color:'rgb(231, 33, 76)',fontSize:'3em', }}></i> </Link>
                    </Row>
                    <Row className='d-flex justify-content-center' >
                        <p style={{ fontSize: '3.3em', marginTop: '12px' }}>Image</p>
                        <p style={{ color: 'rgb(231, 33, 76)', fontSize: '4em', textTransform: 'uppercase', }}>DETAIL</p>
                    </Row>
                    <Row className='d-flex justify-content-center' >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet,</p>
                    </Row>
                    <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>


                    <Row >
                        <img src={Img1} height='600px' width='100%' />
                    </Row>
                    <Row>
                        <p style={{ fontSize: '2.5em', textTransform: 'uppercase', marginTop: '50px' }}> Image Name </p>
                    </Row>
                    <Row>
                        <p style={{ fontSize: '1.5em', fontFamily: 'cursive' }} > Red Art is an Elegant HTML 5 Template best suited for Art Gallery and place to display your portfolio. This template has lots of elements that
                        are necessary to build a website. Red Art is coded with the latest HTML5 and CSS3 standard.
                        Here are some of the template features.Red Art is an Elegant HTML 5 Template best suited for Art Gallery and place to display your portfolio. This template has lots of elements that
                        are necessary to build a website.
                        </p>
                    </Row>
                    <Row >
                        <p style={{ fontSize: '1.3em', marginTop: '20px' }} > Red Art is an Elegant HTML 5 Template best suited for Art Gallery and place to display your portfolio. This template has lots of elements that
                        are necessary to build a website. Red Art is coded with the latest HTML5 and CSS3 standard.
                        Here are some of the template features.Red Art is an Elegant HTML 5 Template best suited for Art Gallery and place to display your portfolio. This template has lots of elements that
                        are necessary to build a website.
                        Red Art is an Elegant HTML 5 Template best suited for Art Gallery and place to display your portfolio. This template has lots of elements that
                        are necessary to build a website. Red Art is coded with the latest HTML5 and CSS3 standard.
                        Here are some of the template features.Red Art is an Elegant HTML 5 Template best suited for Art Gallery and place to display your portfolio. This template has lots of elements that
                        are necessary to build a website.
                        </p>
                    </Row>
                </div>
                <Row className='d-flex justify-content-center' style={{ marginTop: '40px' }} >
                    <p style={{ fontSize: '3.3em', marginTop: '12px' }}>Related</p>
                    <p style={{ color: 'rgb(231, 33, 76)', fontSize: '4em', textTransform: 'uppercase', }}>Images</p>
                </Row>
                <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                <div style={{ marginTop: '40px' }} >
                    <Galley />
                </div>

            </div>
        )
    }
}

export default ImageContent
