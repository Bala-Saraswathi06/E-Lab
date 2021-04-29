import React, { Component } from 'react'
import { Card, Row, Col, Form, Button, } from 'react-bootstrap'
import Img1 from '../../../img/img-09.jpg'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import Swal from 'sweetalert2'
import firebase from 'firebase'

export class DataContent extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            imageName: '',
            imageFile: '',
            mainContent: '',
            subContent: '',
            imageUrl: '',
            // submit:this.props.submit
        }
        this.state = this.initialState
    }
    componentDidUpdate() {
        const { name, imageName, imageFile, mainContent, subContent, } = this.state
        const { categoryObj, submit } = this.props

        if (submit === true) {
            console.log(categoryObj, 'categoryObj')
            let keys = Object.keys(categoryObj)
            console.log(keys)

            categoryRef.doc(`${categoryObj.lab}Relation`).update({
                ['kingdom']: firebase.firestore.FieldValue.arrayUnion(categoryObj[keys[1]]),
            })

            for (let i = 1; i < keys.length - 1; i++) {
                if (i === keys.length) {
                    const data = categoryObj
                    data['name'] = name
                    data['imageName'] = imageName
                    data['mainContent'] = mainContent
                    data['subContent'] = subContent

                    contentRef.add(data).then(() => {
                        imagesRef.child(imageName).put(imageFile)
                    })
                    this.setState(this.initialState)
                } else {
                    let key = categoryObj[keys[i]]
                    let value = categoryObj[keys[i + 1]]
                    console.log(key, value)
                    categoryRef.doc(`${categoryObj.lab}Relation`).update({
                        [key]: firebase.firestore.FieldValue.arrayUnion(value),
                    })
                }
            }
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
        const { name, mainContent, imageUrl, subContent } = this.state
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
                        {imageUrl === '' ? <i class="fa fa-picture-o" style={{ fontSize: '5em' }} ></i> :
                            <img src={imageUrl} height='150px' width='100%' />}

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
