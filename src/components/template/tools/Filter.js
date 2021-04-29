import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { categoryRef, contentRef, imagesRef } from '../../../firebase/Firebase'
import { firebaseLooper } from '../../../firebase/FirebaseLooper'
import Category from '../../admin/tools/Category'
import Gallery from '../tools/Gallery'

export class Filter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lab: this.props.lab,
            category: '',
            categoryList: [],
            condition: '',
            filterData: '',
            filterArray: [],
        }
    }
    componentDidMount() {

        categoryRef.doc(`${this.props.lab}`).get().then((res) => {
            const category = res.data()
            let categoryList = []
            Object.keys(category).map((key, i) => categoryList.push(`Category${i + 1}`))
            this.setState({ category, categoryList })
            console.log(category, categoryList)
        })

        categoryRef.doc(`${this.props.lab}Relation`).get().then(res => {
            const relation = res.data()
            this.setState({ relation })
            console.log(relation, 'relation')
        })

        const initialArray = [];
        return contentRef
            .where(`lab`, '==', `${this.props.lab}`)
            .get()
            .then((querySnapshot) => {
                const promises = [];

                querySnapshot.forEach((doc) => {
                    const { name, imageName } = doc.data();
                    let imageRef = imagesRef.child(`${imageName}`);
                    promises.push(imageRef.getDownloadURL());
                    initialArray.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });
                return Promise.all(promises);
            })
            .then((urlsArray) => {

                const fullArray = [];
                urlsArray.forEach((url, index) => {
                    const initialObj = initialArray[index];
                    initialObj['imageUrl'] = url;
                    fullArray.push(initialObj);
                });
                this.setState({ filterData: fullArray })
                // this.props.setRelatedImg(fullArray)
                console.log(fullArray, 'fullArray')
            })
    }



    // onChange = (e) => {

    //     let filterData = ''

    //     this.setState(prevState => {
    //         return {
    //             condition: {
    //                 ...prevState.condition,
    //                 [e.target.value]: e.target.label
    //             }
    //         }
    //     }, () => {
    //         filterData = this.state.filterData.filter(data => Object.keys(this.state.condition).every(key => data[key] === this.state.condition[key]))
    //         //console.log(filterData, 'filterData')
    //         this.setState({ filterData })
    //         this.props.setRelatedImg(filterData)
    //     })


    // }
    onChange = (e) => {
        
        this.state.filterArray.push(e.target.value)
        this.setState({ num: true })
    }

    render() {
        const { lab, category, categoryList, filterData, relation, filterArray } = this.state;
        console.log(this.props.imageData, filterArray,'filterData')
        return (
            <>
                <div className='filter' style={{ position: 'relative', bottom: '80px' }}>
                    {lab === 'botany' ?
                        <>
                            <Row className='d-flex justify-content-center'>
                                <p style={{ fontSize: '4em' }}> BOTANY - MUSEUM </p>
                            </Row>

                            <Row className='d-flex justify-content-center'>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit,sed do </p>
                            </Row>

                            <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                        </> :
                        <>
                            <Row className='d-flex justify-content-center'>
                                <p style={{ fontSize: '4em' }}> ZOOLOGY - MUSEUM </p>
                            </Row>
                            <Row className='d-flex justify-content-center'>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit,sed do </p>
                            </Row>
                            <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
                        </>}

                    <Row className='d-flex justify-content-center' >

                        <div className='dropdown'>
                            <Button variant='danger'> Kingdom <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                            <div className='dropdown-content'>
                                {relation !== undefined && relation.kingdom.map(value =>
                                    <option value={value} onClick={this.onChange}> {value} </option>
                                )}
                            </div>
                        </div>

                        {filterArray !== '' && filterArray.map((key, i) => 
                                <div className='dropdown'>
                                    <Button variant='danger'> {key} <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                                    <div className='dropdown-content'>
                                        {relation[key] !== undefined && relation[key].map(value =>
                                            <option value={value} onClick={this.onChange}> {value} </option>
                                        )}
                                    </div>
                                </div>
                            )
                        }


                        {/* {categoryList !== '' && categoryList.map((key, i) =>
                            <div className='dropdown'>
                                {this.state.condition[key] === undefined ?
                                    <Button variant='danger'> {key} <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                                    : <Button variant='danger'>  {this.state.condition[key]} <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>}
                                <div className='dropdown-content'>
                                    {category[key].map(value => <option label={value} value={key} onClick={this.onChange}> {value} </option>)}
                                </div>
                            </div>
                        )} */}
                        {/* {categoryList !== '' && categoryList.map((key, i) => 
                            <div className='dropdown'>
                            <select name={key} value={this.state[key]} className='dropdown-content' onClick={this.onChange}>
                                <option value=''  >  </option>
                                {category[key].map(value => <option value={value} > {value} </option>)}

                            </select>
                        </div>
                    )} */}
                    </Row>

                </div>
                {filterData !== '' && <Gallery data={filterData} imageData={this.props.imageData} setImageData={this.props.setImageData} />}


            </>
        )
    }
}

export default Filter
