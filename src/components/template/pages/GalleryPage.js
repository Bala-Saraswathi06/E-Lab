import {React, useState} from 'react'
import Header from '../tools/Header'
import LabSlider from '../tools/LabSlider'
import Filter from '../tools/Filter'
import Footer from '../tools/Footer'
import ImageContent from '../tools/ImageContent'

function GalleryPage(props) {
    const [imageData, setImageData] = useState('')
    const { lab } = props
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Header />
            {imageData === '' ?
                <>
                    <LabSlider lab={lab}  />
                    <Filter lab={lab} imageData={imageData} setImageData={setImageData} />
                </> :
                <ImageContent imageData={imageData} setImageData={setImageData} />}

            {/* <Gallery /> */}
            <Footer />
        </div>
    )
}

export default GalleryPage
