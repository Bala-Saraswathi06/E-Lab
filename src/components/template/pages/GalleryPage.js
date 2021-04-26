import React from 'react'
import Header from '../tools/Header'
import LabSlider from '../tools/LabSlider'
import Filter from '../tools/Filter'
import Footer from '../tools/Footer'
import Gallery from '../tools/Gallery'

function GalleryPage(props) {
    const { lab } = props
    return (
        <div style={{backgroundColor:'black'}}>
            <Header />
            <LabSlider lab={lab} />
            <Filter lab={lab}/>        
            <Gallery />
            <Footer />
        </div>
    )
}

export default GalleryPage
