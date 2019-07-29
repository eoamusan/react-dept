import React from 'react'
import styled from 'styled-components'

const Card = ({ fetchingCards, details }) => {
    return (
        <div>
            {fetchingCards ?
                <div className="box full-width">
                    <div className="height-500 full-width offwhite bottom-margin-20"></div>
                    <div className="height-12 width-100 offwhite bottom-margin-10"></div>
                    <div className="height-30 width-200 offwhite bottom-margin-10"></div>
                    <div className="height-12 width-100 offwhite"></div>
                </div> :
                <div className="box full-width">
                    <Case image={require(`../../images/${details.image}`)} className="height-500 full-width offwhite bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case>
                    <div className="height-auto size-pointseven-rem light-gray-color uppercase maisonneue">
                        {details.website}
                    </div>
                    <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                        {details.title}
                    </div>
                    <div className="height-auto size-pointeight-rem maisonneue blue-color">
                        <div className="float-left width-20 height-12 relative">
                            <i className="material-icons blue-color center-item">
                                arrow_right
                            </i>
                        </div>
                        <div className="float-left view">
                            VIEW CASE
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </div>}
        </div>
    )
}

const Case = styled.div`background-image: url(${props => props.image})`;

export default Card
