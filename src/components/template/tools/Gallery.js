import React, { Component } from 'react'
import { Row, Col, Button, Carousel } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import ContentPage from '../pages/ContentPage'

export class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterData: this.props.filterData,
            imageData: '',
        }
    }
    componentDidMount() {
        let count = Math.round(this.props.filterData.length / 3)
        this.setState({ count })
    }
    onClick = (e, data) => {
        this.props.setImageData(data)
        window.scrollTo(0, 0);
    }
    // imageLoop1 = () => {
    //     let count = Math.floor(this.props.filterData.length / 3)
    //     let list = []

    //     for (let i = 0; i < count; i++) {
    //         list.push(this.props.filterData[i])
    //     }
    //     return list;
    // }
    // imageLoop2 = () => {
    //     let count = Math.floor(this.props.filterData.length / 3)
    //     let list = []

    //     for (let i = count; i < (count * 2); i++) {
    //         list.push(this.props.filterData[i])
    //     }
    //     return list;
    // }
    // imageLoop3 = () => {
    //     let count = Math.floor(this.props.filterData.length / 3)
    //     let list = []

    //     for (let i = (count * 2); i < this.props.filterData.length; i++) {
    //         list.push(this.props.filterData[i])
    //     }
    //     return list;
    // }

    render() {
        const { filterData } = this.state
        // console.log(this.props.filterData,'data')
        return (
            <>

                <div className='gallery' style={{position:'relative', bottom:'80px'}} >
                    {this.props.filterData !== undefined &&
                        <Row style={{ margin: 'auto', width: "100%", padding: '50px', }}>
                            {this.props.filterData.map((data) =>
                                <Col lg={4}>
                                    <div className='frame1'>
                                        <figure >
                                            <img id={data.imageName} src={data.imageUrl} onClick={e => this.onClick(e, data)} width='100%' height='250px' />
                                        </figure >
                                        <div >{data.name} </div>
                                    </div>
                                </Col> )}
                        </Row>
                    }
                    {/* {this.props.filterData !== undefined &&
                        <Row style={{ margin: 'auto', width: "100%", padding: '50px', }}>
                            {this.props.filterData.length <= 3 ?
                                this.props.filterData.map((data) =>
                                    <Col lg={4}>
                                        <div className='frame1'>
                                            <figure >
                                                <img id={data.imageName} src={data.imageUrl} onClick={e => this.onClick(e, data)} width='100%' height='auto' />
                                            </figure >
                                            <div >{data.name} </div>
                                        </div>
                                    </Col>
                                ) : <>
                                    <Col lg={4}>
                                        {this.imageLoop1().map((data) =>
                                            <div className='frame1'>
                                                <figure >
                                                    <img id={data.imageName} src={data.imageUrl} onClick={e => this.onClick(e, data)} width='100%' height='auto' />
                                                </figure >
                                                <div >{data.name} </div>
                                            </div>
                                        )}
                                    </Col>
                                    <Col lg={4}>
                                        {this.imageLoop2().map((data) =>
                                            <div className='frame1'>
                                                <figure >
                                                    <img id={data.imageName} src={data.imageUrl} onClick={e => this.onClick(e, data)} width='100%' height='auto' />
                                                </figure >
                                                <div >{data.name} </div>
                                            </div>
                                        )}
                                    </Col>
                                    <Col lg={4}>
                                        {this.imageLoop3().map((data) =>
                                            <div className='frame1'>
                                                <figure >
                                                    <img id={data.imageName} src={data.imageUrl} onClick={e => this.onClick(e, data)} width='100%' height='auto' />
                                                </figure >
                                                <div >{data.name} </div>
                                            </div>
                                        )}
                                    </Col>
                                </>
                            }
                        </Row>} */}
                </div>
            </>
        )
    }
}

export default Gallery
