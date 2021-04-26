import React, { Component } from 'react'
import { Card, Row, Col, Form, Button, } from 'react-bootstrap'
import Img1 from '../../../img/img-09.jpg'
import { contentRef, imagesRef } from '../../../firebase/Firebase'
import Swal from 'sweetalert2'

export class DataContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            imageName: '',
            imageFile: '',
            mainContent: '',
            subContent: '',
            imageUrl:'',
        }
    }
    componentDidUpdate() {
        const { name, imageName, imageFile, mainContent, subContent } = this.state

        if (this.props.submit === true) {
            console.log(this.props.categoryObj, 'categoryObj')

            const data = this.props.categoryObj
            data['name'] = name
            data['imageName'] = imageName
            data['mainContent'] = mainContent
            data['subContent'] = subContent

            contentRef.add(data)
            imagesRef.child(imageName).put(imageFile)

        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onChangeImage = (e) => {
        console.log(e.target.files[0])
        this.setState({ imageName: e.target.files[0].name, imageFile: e.target.files[0], imageUrl: URL.createObjectURL(e.target.files[0]) })
    }

    render() {
        const { name, mainContent,imageUrl, subContent } = this.state
        console.log(imageUrl)
        return (
            <div className='box' >
                <Row>
                    <Col>
                        <Form.Group  >
                            <Form.Label > Species Name </Form.Label>
                            <Col>
                                <Form.Control
                                    style={{ width: '80%' }}
                                    type='text'
                                    placeholder='Species Name'
                                    name='name'
                                    value={name}
                                    onChange={this.onChange}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg='4'>
                        <Form.Group  >
                            <Form.Label > Species Image </Form.Label>
                            <Col>
                                <Form.Control
                                    style={{ width: '100%' }}
                                    type='file'
                                    onChange={this.onChangeImage}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    {/* <Col lg='2' style={{ margin: '20px' }}>
                        <Button variant='danger' > View </Button>
                    </Col> */}
                    <Col lg='4'>
                    { imageUrl ==='' ?  <i class="fa fa-picture-o" style={{fontSize:'5em'}} ></i>:
                        <img src={imageUrl} height='150px' width='100%' /> }
                   
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group  >
                            <Form.Label > Main Content </Form.Label>
                            <Col>
                                <Form.Control as='textarea'
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Main Content'
                                    name='mainContent'
                                    value={mainContent}
                                    onChange={this.onChange}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group  >
                            <Form.Label > Sub Content </Form.Label>
                            <Col>
                                <Form.Control as='textarea'
                                    style={{ width: '100%' }}
                                    type='text'
                                    placeholder='Sub Content'
                                    name='subContent'
                                    value={subContent}
                                    onChange={this.onChange}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DataContent
