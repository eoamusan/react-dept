import React from 'react'
import header from '../../images/header.png';
import styled from 'styled-components'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header full-width">
            <HeaderSection className="full-width full-height black">
                <div className="width-85-percent margin-auto bottom-padding-5 top-padding-30 border-bottom-dark">
                    <Logo className="width-80 height-40 contain-bg no-repeat-bg float-left right-margin-150"></Logo>

                    <div className="clear-both"></div>
                </div>
                <div className="width-85-percent margin-auto">
                    <div className="float-left black-color noselect size-twenty-rem">
                        WORK
                    </div>
                </div>
                <button type="submit" className="black absolute">
                    <div>
                        VIEW CASE
                    </div>
                    <div>

                    </div>
                </button>
            </HeaderSection>
        </div>
    )
}

const HeaderSection = styled.div`background-image: url(${header});`
const Logo = styled.div`background-image: url(${logo});`

export default Header
