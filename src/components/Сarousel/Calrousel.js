import React from 'react'
import SimpleSlider from './SimpleSlider'
import { connect } from 'react-redux'

const Calrousel = (props) => {

    const { photos, index } = props

    return (
        <div style={{ width: '600px', height: '600px' }}>
            <SimpleSlider photos={photos} index={index} />
        </div>
    )
}


const mapStateToProps = (state) => ({
    photos: state.photosList.photosList,
    index: state.photosList.selectedPhoto
})

export default connect(mapStateToProps, null)(Calrousel)