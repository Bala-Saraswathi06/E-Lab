import React, { Component } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import Img1 from '../../../img/img-05.jpg'
import Galley from './Gallery'
import { Link } from 'react-router-dom'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import reactDom from 'react-dom'

class ImageContent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const { imageData, relatedImg } = this.props
        console.log(imageData, relatedImg, 'imageData')
        return (
            <div style={{ position: 'relative', bottom: '80px', marginTop: '80px', color: 'white' }}>

                <div className='container'>
                    <Row>
                        <Link onClick={e=>this.props.setImageData('')} className='backLink' ><i class="fa fa-hand-o-left" style={{ color: 'rgb(231, 33, 76)', fontSize: '3em', }}></i> </Link>
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
                        <img src={imageData.imageUrl} height='600px' width='100%' />
                    </Row>
                    <Row>
                        <p style={{ fontSize: '2.5em', textTransform: 'uppercase', marginTop: '50px' }}> {imageData.name} </p>
                    </Row>
                    <Row>
                        <p style={{ fontSize: '1.5em', fontFamily: 'cursive' }} >{imageData.mainContent} </p>
                    </Row>
                    <Row >
                        <p style={{ fontSize: '1.3em', marginTop: '20px' }} > {imageData.subContent}  </p>
                    </Row>
                </div>
                <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%', marginTop:'50px' }}></hr>
                {/* <Row className='d-flex justify-content-center' style={{ marginTop: '40px' }} >
                    <p style={{ fontSize: '3.3em', marginTop: '12px' }}>Related</p>
                    <p style={{ color: 'rgb(231, 33, 76)', fontSize: '4em', textTransform: 'uppercase', }}>Images</p>
                </Row>
                <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                <div style={{ marginTop: '40px' }} >
                    <Galley data={this.props.relatedImg} />
                </div> */}

            </div>
        )
    }
}

export default ImageContent;