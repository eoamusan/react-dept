import React from 'react'
import footer from '../../images/logo-white.png'
import styled from 'styled-components'

const Footer = () => {
    return (
        <div className="full-width footer">
            <div className="black top-padding-100 bottom-padding-100 float-left">
                <div className="width-85-percent margin-auto bottom-padding-30 border-bottom-dark">
                    <FooterLogo className="width-80 height-40 contain-bg no-repeat-bg float-left right-margin-150"></FooterLogo>
                    <div className="float-left white-color">
                        <div className="float-left top-padding-10 size-onepointone-rem right-padding-40">WORK</div>
                        <div className="float-left top-padding-10 size-onepointone-rem right-padding-40">SERVICE</div>
                        <div className="float-left top-padding-10 size-onepointone-rem right-padding-40">STORIES</div>
                        <div className="float-left top-padding-10 size-onepointone-rem right-padding-40">ABOUT</div>
                        <div className="float-left top-padding-10 size-onepointone-rem right-padding-40">CAREERS</div>
                        <div className="float-left top-padding-10 size-onepointone-rem right-padding-40">CONTACT</div>
                        <div className="clear-both"></div>
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div className="width-85-percent margin-auto top-padding-30 mid-gray-color maisonneue size-pointeight-rem">
                    <div className="float-left width-80-percent text-center">
                        <div className="display-inline right-padding-50">Chamber of Commerce: 63464101</div>
                        <div className="display-inline right-padding-50">VAT: NL 8552.47.502.B01</div>
                        <div className="display-inline right-padding-50">Terms and conditions</div>
                    </div>
                    <div className="float-right width-20-percent text-right">
                        © 2018 Dept Agency
                    </div>
                    <div className="clear-both"></div>
                </div>
            </div>
            <div className="width-100 white float-left">
            </div>
            <div className="clear-both"></div>
        </div>
    )
}

const FooterLogo = styled.div`background-image: url(${footer});`

export default Footer
