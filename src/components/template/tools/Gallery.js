import { React, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Content from '../pages/ContentPage'
import Img1 from '../../../img/img-01.jpg'
import Img2 from '../../../img/img-02.jpg'
import Img3 from '../../../img/img-03.jpg'
import Img4 from '../../../img/img-04.jpg'
import Img5 from '../../../img/img-05.jpg'
import Img6 from '../../../img/img-06.jpg'
import Img7 from '../../../img/img-07.jpg'
import Img8 from '../../../img/img-08.jpg'
import Img9 from '../../../img/img-09.jpg'
import { Redirect } from 'react-router-dom'


function Gallery() {

    const [url, setUrl] = useState('')

    const onClick = (e) => {
        setUrl(e.target.src)
        console.log(e.target.src)
    }
    return (
         <>
         { url !== '' ? <Redirect to='/content' /> :
        <div className='gallery' >
            <Row style={{ margin: 'auto', width: "100%", padding: '50px' }}>
                <Col lg={4}>
                    <div>
                        <figure className='frame1'>
                            <img onClick={onClick} src={Img4} width='100%' height='auto' />
                        </figure >
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img7} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img3} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img1} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img5} width='100%' height='auto' />
                        </figure>
                    </div>
                </Col>
                <Col lg={4}>
                    <div>
                        <figure className='frame1'>
                            <img src={Img2} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img5} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img8} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img4} width='100%' height='auto' />
                        </figure >
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img6} width='100%' height='auto' />
                        </figure>
                    </div>
                </Col>
                <Col lg={4}>
                    <div>
                        <figure className='frame1' >
                            <img src={Img9} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img7} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img2} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img1} width='100%' height='auto' />
                        </figure>
                    </div>
                    <div>
                        <figure className='frame1'>
                            <img src={Img8} width='100%' height='auto' />
                        </figure>
                    </div>
                </Col>
            </Row>
        </div>  }
        </>
    )
}

export default Gallery
