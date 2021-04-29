import React, { Component } from 'react'
import { Row, Col, Button, Carousel } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { categoryRef, contentRef, imagesRef} from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import ContentPage from '../pages/ContentPage'
 
export class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data,
            imageData:'',
        }
    }
    // onClick = (data) => {
    //     this.props.imageData = data
    //     this.setState({ imageData: data })
    // }

    render() {
        const { imageData, data } = this.state
        // console.log(this.props.data,this.state.data,'data')
        return (
            <>
                {/* { imageData !== '' ? 
                <ContentPage imageData={imageData} />
                // <Redirect to='/content' /> 
                : */}
                    <div className='gallery' >
                        <Row style={{ margin: 'auto', width: "100%", padding: '50px', }}>
                            {this.props.data!== undefined && this.props.data.map((data) =>
                                <Col lg={4}>
                                    <div className='frame1'>
                                        <figure >
                                            <img id={data.imageName} src={data.imageUrl} onClick={e=>this.props.setImageData(data)}  width='100%' height='auto' />
                                        </figure >
                                        <div >{data.name} </div>
                                    </div>
                                </Col>
                            )}
                           
                                {/* <Col lg={4}>
                                    <div className='frame1'>
                                        <figure >
                                            <img id='img-09.jpg' onClick={this.onClick} src='' width='100%' height='auto' />
                                        </figure >
                                        <div >{data.imageName} </div>
                                    </div>
                                </Col> */}
                            
                        </Row>
                    </div>
            </>
        )
    }
}

export default Gallery
