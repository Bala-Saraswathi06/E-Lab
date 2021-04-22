import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Filter() {
    return (
        <div className='filter'  style={{ position: 'relative', bottom: '80px' }}>
            <Row className='d-flex justify-content-center'>
                <p style={{ fontSize: '5em' }}> E - MUSEUM </p>
            </Row>
            <Row className='d-flex justify-content-center'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit,sed do </p>
            </Row>
            <hr style={{ color: 'grey', backgroundColor: 'grey', width: '60%' }}></hr>
            <Row className='d-flex justify-content-center' >
                <div className='dropdown'>
                    <Button variant='danger'> Kingdom <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                    <div className='dropdown-content'>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                    </div>
                </div>
                <div className='dropdown'>
                    <Button variant='danger'> Kingdom <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                    <div className='dropdown-content'>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                    </div>
                </div>
                <div className='dropdown'>
                    <Button variant='danger'> Kingdom <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                    <div className='dropdown-content'>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                    </div>
                </div>
                <div className='dropdown'>
                    <Button variant='danger'> Kingdom <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                    <div className='dropdown-content'>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                    </div>
                </div>
                <div className='dropdown'>
                    <Button variant='danger'> Kingdom <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                    <div className='dropdown-content'>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                    </div>
                </div>
                <div className='dropdown'>
                    <Button variant='danger'> Kingdom <i class="fa fa-angle-down" aria-hidden="true"></i> </Button>
                    <div className='dropdown-content'>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                        <Link to='/' > Link 1</Link>
                    </div>
                </div>

            </Row>
        </div>
    )
}

export default Filter
