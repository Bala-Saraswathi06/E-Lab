import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import Img1 from '../../img/img-03.jpg'
import Img2 from '../../img/img-08.jpg'
import Img3 from '../../img/img-02.jpg'

function Slider() {
    return (
        <div  style={{ position: 'relative', bottom: '80px' }}>
            <Carousel >
                <Carousel.Item>
                    <img
                        style={{ height: 'auto', width: '100%' }}
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ bottom: '30%', textAlign: 'start', width: '45%' }} >
                        <div style={{ fontSize: '3em', fontFamily: '-moz-initial' }} >ST.MARY'S COLLEGE (AUTONOMOUS)</div>
                        {/* <div style={{ fontSize: '2.7em', fontFamily: 'inherit' }}> E-LABORATORY </div> */}
                        <Button id='main-button' variant='danger' size="lg"> Botany Laboratory</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: 'auto', width: '100%' }}
                        className="d-block w-100"
                        src={Img3}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ bottom: '30%', textAlign: 'start', width: '45%' }} >
                        <div style={{ fontSize: '3em', fontFamily: '-moz-initial' }} >ST.MARY'S COLLEGE (AUTONOMOUS)</div>
                        {/* <div style={{ fontSize: '2.7em', fontFamily: 'inherit' }}> E-LABORATORY </div> */}
                        <Button id='main-button' variant='danger' size="lg"> Botany Laboratory</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: 'auto', width: '100%' }}
                        className="d-block w-100"
                        src={Img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ bottom: '30%', textAlign: 'start', width: '45%' }} >
                        <div style={{ fontSize: '3em', fontFamily: '-moz-initial' }} >ST.MARY'S COLLEGE (AUTONOMOUS)</div>
                        <div style={{marginTop:'20px'}}>
                            <Button id='main-button' variant='danger' size="lg"> Botany Laboratory</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
