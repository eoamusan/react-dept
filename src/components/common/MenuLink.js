import React from 'react'

const MenuLink = ({to, focused, handleMouseOver}) => {
    return (
        <div className={`width-85-percent margin-auto text-right size-three-rem bottom-padding-5 border-bottom-dark cursor-pointer link smooth top-padding-5 ${focused === to && 'bright'}`} onMouseOver={() => handleMouseOver('main', to)}>
            <div className="float-right">
                <div className="float-left">
                    <div className={`height-60 relative smooth overflow-hidden ${focused === to ? 'width-50' : 'width-0'}`}>
                        <i className="material-icons center-item size-three-rem center-item">
                            arrow_right
                        </i>
                    </div>
                </div>
                <div className="float-left">{to}</div>
                <div className="clear-both"></div>
            </div>
            <div className="clear-both"></div>
        </div>
    )
}

export default MenuLink
