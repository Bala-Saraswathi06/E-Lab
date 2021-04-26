import React, { Component } from 'react'
import Header from '../tools/Header'
import { Card, Row, Col, Form, Button, } from 'react-bootstrap'
import Category from '../tools/Category'
import { categoryRef } from '../../../firebase/Firebase'
import firebaseLooper from '../../../firebase/FirebaseLooper'
import Swal from 'sweetalert2'

export class AddCategory extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            count: 3,
            submit: false,
            edit: false,
            category: '',
        }
        this.state = this.initialState;
    }

    componentDidMount() {
        categoryRef.doc('doc').get().then((res) => {
            const category = res.data()
            this.setState({ category })
            console.log(category)
        })          
    }

    onChange = (name, value) => {
        this.setState({ [name]: value, submit: 'success', }, () => {
            console.log(this.state[`${name}`], name)
            categoryRef.doc('doc').update({ [name]: value })
            Swal.fire({
                icon: 'success',
                text: 'Category Names Added Successfully'
            }).then(() => window.location.reload())
        })

    }


    categoryLoop = () => {
        const { count } = this.state;
        const list = []
        for (let i = 0; i < count; i++) {
            list.push(
                <Category
                    name={`Category${i + 1}`}
                    value={this.state[`Category${i + 1}`]}
                    submit={this.state.submit}
                    onChange={this.onChange}
                    edit ={this.state.edit}
                />
            )
        }
        return list
    }

    onSubmit = () => {
        this.setState({ submit: true })
    }

    onEdit = () => {
        Object.keys(this.state.category).forEach((key,i) => {
             console.log(key, this.state.category[key] ,'key')
            this.setState({ [key]: this.state.category[key],edit : true, count: i+1})
        })
        //  this.setState({ edit : true })
        
    }

    render() {
        const { count, submit } = this.state;
        console.log(count, 'count')

        return (
            <div>
                <Header />
                <div className='container'>
                    <Card >
                        <Card.Header style={{ backgroundColor: '#D60643', color: 'white' }}>
                            <p style={{ fontSize: '1.3em', fontWeight: '600' }}> Add Category</p>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                {this.categoryLoop()}
                            </Form>
                            <Row className='d-flex justify-content-center' style={{ marginTop: '20px' }}>
                                <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: count + 1 })}> <i class="fa fa-plus" style={{ padding: '5px' }} aria-hidden="true"></i>  Category</Button>
                                <Button variant='danger' style={{ margin: '10px' }} onClick={(e)=> this.setState({ count: 0 },()=>this.onEdit())}> Edit</Button>
                                <Button variant='danger' style={{ margin: '10px' }} onClick={this.onSubmit}> Save</Button>
                                <Button variant='danger' style={{ margin: '10px' }} onClick={(e) => this.setState({ count: count - 1 })}> <i class="fa fa-minus" style={{ padding: '5px' }} aria-hidden="true"></i>  Category</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
    }
}

export default AddCategory
