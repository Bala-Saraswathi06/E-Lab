import { React, useEffect, useState } from 'react'
import { Row, Col, Button, Carousel } from 'react-bootstrap'
import Img1 from '../../../img/img-01.jpg'
import Img2 from '../../../img/img-02.jpg'
import Img3 from '../../../img/img-03.jpg'
import Img4 from '../../../img/img-04.jpg'
import Img5 from '../../../img/img-05.jpg'
import Img6 from '../../../img/img-06.jpg'
import Img7 from '../../../img/img-07.jpg'
import Img8 from '../../../img/img-08.jpg'
import Img9 from '../../../img/img-09.jpg'

function Content(props) {

    const array = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9]
    const { setLab } = props

    return (
        <div style={{ position: 'relative', bottom: '80px' }}>
            <div className='filter' >
                <Row className='d-flex justify-content-center'>
                    <p style={{ fontSize: '5em' }}> E - MUSEUM </p>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit,sed do </p>
                    <p> Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit,sed do </p>
                    <p> Lorem ipsum dolor sit  adipiscing elit, sed do consectetur adipiscing elit.</p>
                </Row>
                <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                <Row className='d-flex justify-content-center' >
                    <Button variant='danger' onClick={(e) => setLab('botany')} style={{ margin: '10px' }} > Botany Museum <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                    <Button variant='danger' onClick={(e) => setLab('zoology')} style={{ margin: '10px' }}> Zoology Museum <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                </Row>
            </div>
            <div style={{ backgroundColor: 'white', padding: '50px' }}>
                <Row style={{ margin: 'auto', width: "90%", }}>
                    <Col lg='6'>
                        <Carousel >
                            {/* {array.map(()=>{ */}
                            <Carousel.Item>
                                <Col>
                                    <img
                                        width='100%' height='auto'
                                        className="d-block w-100"
                                        src={Img5}
                                        alt="First slide"
                                    />
                                </Col>
                            </Carousel.Item>
                            {/* })} */}
                        </Carousel>

                    </Col>
                    <Col lg='6'>
                        <Row className='d-flex justify-content-center' style={{ padding: '50px ' }}>
                            <p style={{ fontSize: '3em' }}> BOTANY MUSEUM </p>
                            <p style={{ fontSize: '1.3em', textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                adipiscing elit, sed do consectetur adipiscing elit,sed do,Lorem ipsum dolor sit amet,
                                consectetur.
                                sed do,Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do consectetur adipiscing elit,sed do </p>
                            <Button variant='danger' onClick={(e) => setLab('botany')}> View Museum <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ margin: 'auto', width: "90%", }}>
                    <Col lg='6'>
                        <Row className='d-flex justify-content-center' style={{ padding: '50px ' }}>
                            <p style={{ fontSize: '3em' }}> ZOOLOGY MUSEUM </p>
                            <p style={{ fontSize: '1.3em', textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                adipiscing elit, sed do consectetur adipiscing elit,sed do,Lorem ipsum dolor sit amet,
                                consectetur. sed do consectetur adipiscing elit,sed do,Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do.</p>
                            <Button variant='danger' onClick={(e) => setLab('zoology')}> View Museum <i class="fa fa-angle-right" aria-hidden="true"></i> </Button>
                        </Row>
                    </Col>
                    <Col lg='6'>
                        <div>
                            <figure >
                                <img src={Img4} width='100%' height='auto' />
                            </figure >
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Content
