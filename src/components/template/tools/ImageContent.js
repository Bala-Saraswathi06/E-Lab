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
            count: 0,
            minCount: 0,
            maxCount: this.props.filterData.length,
        }
    }

    categoryList = (data) => {
        let categoryList = [];

        let list = []

        for (let i = 0; i < Object.keys(data).length; i++) {
            //console.log(data[`Category${i}`], 'data[`Category${i}`] ')
            data[`Category${i}`] !== undefined && categoryList.push(data[`Category${i}`])
        }
        categoryList.map((category, i) =>
            list.push(<>
                <button className='buttonBox' > {category} </button>
                {categoryList.length !== i + 1 && <i class="fa fa-long-arrow-right" style={{ width: '50px', fontSize: '3em', marginTop: '15px' }}></i>}
            </>)
        )
        return list;
    }
    render() {
        const { count, minCount, maxCount } = this.state
        const { imageData, filterData } = this.props

        console.log(imageData, count, minCount, maxCount, filterData, 'imageData')

        return (
            <div style={{ backgroundColor:'#E5F1FF', position: 'relative', bottom: '80px', marginTop: '80px', }}>

                <div className='container'>
                    <Row>
                        <Link onClick={e => this.props.setImageData('')} className='backLink' ><i class="fa fa-hand-o-left" style={{ color: 'rgb(231, 33, 76)', fontSize: '3em', }}></i> </Link>
                    </Row>

                    {count === 0 ?
                        <>
                            <Row className='d-flex justify-content-center' >
                                {/* <p style={{ fontSize: '3.3em', marginTop: '12px' }}>Image</p> */}
                                <p style={{ color: 'rgb(231, 33, 76)', fontSize: '4em', textTransform: 'uppercase', }}> {imageData.name}</p>
                            </Row>
                            <Row className='d-flex justify-content-center' >
                                <p style={{ fontSize: '1.2em' }}>Lorem ipsum dolor consectetur adipiscing elit, sed do ipsum dolor sit amet,</p>
                            </Row>
                            <hr style={{ color: 'grey', backgroundColor: 'black', width: '70%' }}></hr>

                            <Row className='d-flex justify-content-center'>
                                <img src={imageData.imageUrl} height='700px' width='700px' />
                            </Row>
                            <div style={{ textAlign: 'end' }}>
                                <i class="fa fa-angle-right" id='arrowButton' style={{ bottom: '420px' }} onClick={e => this.setState({ count: count + 1 })}></i>
                            </div>
                            <Row style={{ textAlign: 'center', fontSize: '1.7em', fontWeight: '600', margin: '10px' }}>
                                <Col> CLASS : {imageData.class} </Col>
                                <Col> ORDER : {imageData.order} </Col>
                                <Col> FAMILY : {imageData.family}</Col>
                            </Row>


                            <Row className='d-flex justify-content-center' style={{ margin: '10px' }} >
                                <Row id='box'  >
                                    {this.categoryList(imageData)}
                                </Row>
                            </Row>

                            <Row>
                                <p style={{ fontSize: '1.5em', }} >{imageData.mainContent} </p>
                            </Row>
                            <Row >
                                <p style={{ fontSize: '1.5em',  marginTop: '20px' }} > {imageData.subContent}  </p>
                            </Row>
                        </>
                        :
                        <>
                            <Row className='d-flex justify-content-center' >
                                {/* <p style={{ fontSize: '3.3em', marginTop: '12px' }}>Image</p> */}
                                <p style={{ color: 'rgb(231, 33, 76)', fontSize: '4em', textTransform: 'uppercase', }}> {filterData[count - 1].name}</p>
                            </Row>
                            <Row className='d-flex justify-content-center' >
                                <p style={{ fontSize: '1.2em' }}>Lorem ipsum dolor consectetur adipiscing elit, sed do ipsum dolor sit amet,</p>
                            </Row>
                            <hr style={{ color: 'grey', backgroundColor: 'black', width: '70%' }}></hr>

                            <Row className='d-flex justify-content-center'>
                                <img src={filterData[count - 1].imageUrl} height='700px' width='700px' />
                            </Row>
                            {count > minCount && <div style={{ textAlign: 'start' }}>
                                <i class="fa fa-angle-left" id='arrowButton' style={{ bottom: '380px' }} onClick={e => this.setState({ count: count - 1 })}></i>
                            </div>}
                            {count !== maxCount && <div style={{ textAlign: 'end' }}>
                                <i class="fa fa-angle-right" id='arrowButton' style={{ bottom: '450px' }} onClick={e => this.setState({ count: count + 1 })}></i>
                            </div>}
                            <Row style={{ textAlign: 'center', fontSize: '1.7em', fontWeight: '600', }}>
                                <Col> CLASS : {filterData[count - 1].class} </Col>
                                <Col> ORDER : {filterData[count - 1].order} </Col>
                                <Col> FAMILY : {filterData[count - 1].family}</Col>
                            </Row>
                            <Row className='d-flex justify-content-center' style={{ margin: '10px' }} >
                                <Row id='box'  >
                                    {this.categoryList(filterData[count - 1])}
                                </Row>
                            </Row>

                            <Row>
                                <p style={{ fontSize: '1.5em', fontWeight: '600' }} >{filterData[count - 1].mainContent} </p>
                            </Row>
                            <Row >
                                <p style={{ fontSize: '1.5em', fontWeight: '600', marginTop: '20px' }} > {filterData[count - 1].subContent}  </p>
                            </Row>
                        </>}
                </div>


                <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%', marginTop: '50px' }}></hr>



                {/* <Row className='d-flex justify-content-center' style={{ marginTop: '40px' }} >
                    <p style={{ fontSize: '3.3em', marginTop: '12px' }}>Related</p>
                    <p style={{ color: 'rgb(231, 33, 76)', fontSize: '4em', textTransform: 'uppercase', }}>Images</p>
                </Row>
                <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                <div style={{ marginTop: '40px' }} >
                    <Galley data={this.props.relatedImg} />
                </div> */}
                {/* <button className='buttonBox' style={{ right: `${i * 20}px`, marginTop: `${i * 40}px` }} > {category} </button>
                    <p className='arrow' style={{ right: `${i * 20}px`, marginTop: `${20 + (i * 40)}px` }} /> */}

            </div>
        )
    }
}

export default ImageContent;