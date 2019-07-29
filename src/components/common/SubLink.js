import React from 'react'

const SubLink = ({ to, focused, handleMouseOver, type }) => {
    return (
        <div className={`size-one-rem cursor-pointer link ${focused === to && 'bright'}`} onMouseOver={() => handleMouseOver(type, to)}>
            <div className="float-left">
                <div className={`height-20 relative smooth overflow-hidden ${focused === to ? 'width-20' : 'width-0'}`}>
                    <i className="material-icons center-item size-one-rem center-item">
                        arrow_right
                    </i>
                </div>
            </div>
            <div className="float-left">{to}</div>
            <div className="clear-both"></div>
        </div>
    )
}

export default SubLink
