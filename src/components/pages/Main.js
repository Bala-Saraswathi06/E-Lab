import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Gallery from './Gallery'
import Filter from './Filter'
import Content from './Content'
import Footer from './Footer'

function Main() {
    return (
        <div >
            <Header />
            <Slider />
            {/* <Filter />
            <Gallery /> */}
            <Content />
            <Footer />
        </div>
    )
}

export default Main
