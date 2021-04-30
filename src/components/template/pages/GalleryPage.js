import { React, useState } from 'react'
import Header from '../tools/Header'
import LabSlider from '../tools/LabSlider'
import Filter from '../tools/Filter'
import Footer from '../tools/Footer'
import ImageContent from '../tools/ImageContent'

function GalleryPage(props) {
    const [imageData, setImageData] = useState('')
    const [filterData, setFilterData] = useState('')
    const { lab } = props
    window.scrollTo(0, 0);
    return (
        <div style={{
            // backgroundColor: 'black' 
        }}>
            <Header />
            {imageData === '' ?
                <>
                    <LabSlider lab={lab} />
                    <Filter lab={lab} imageData={imageData} setFilterData={setFilterData} setImageData={setImageData} />
                </> :
                <ImageContent imageData={imageData} filterData={filterData} setImageData={setImageData} />}

            <Footer />

        </div>
    )
}

export default GalleryPage
