import React from 'react'
import footer from '../../images/logo-white.png'
import styled from 'styled-components'

const Footer = ({scrollTop}) => {
    return (
        <div className="full-width footer display-flex">
            <div className="black top-padding-100 bottom-padding-100 float-left">
                <div className="width-85-percent margin-auto bottom-padding-30 border-bottom-dark">
                    <FooterLogo className="width-80 height-40 contain-bg no-repeat-bg float-left right-margin-150"></FooterLogo>
                    <div className="float-left white-color">
                        <div className="float-left footer-link cursor-pointer top-padding-10 size-onepointone-rem right-padding-40 smooth">WORK</div>
                        <div className="float-left footer-link cursor-pointer top-padding-10 size-onepointone-rem right-padding-40 smooth">SERVICE</div>
                        <div className="float-left footer-link cursor-pointer top-padding-10 size-onepointone-rem right-padding-40 smooth">STORIES</div>
                        <div className="float-left footer-link cursor-pointer top-padding-10 size-onepointone-rem right-padding-40 smooth">ABOUT</div>
                        <div className="float-left footer-link cursor-pointer top-padding-10 size-onepointone-rem right-padding-40 smooth">CAREERS</div>
                        <div className="float-left footer-link cursor-pointer top-padding-10 size-onepointone-rem right-padding-40 smooth">CONTACT</div>
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
            <div className="width-100 scroll-top white float-left relative blue-color cursor-pointer" onClick={scrollTop}>
                <div className="full-width center-item box">
                    <div className="height-auto text-center">
                        <i className="material-icons rotate-left">
                            arrow_right_alt
                        </i>
                    </div>
                    <div className="height-auto text-center top-padding-10">
                        TOP
                    </div>
                </div>
                <div className="full-height absolute smooth"></div>
            </div>
            <div className="clear-both"></div>
        </div>
    )
}

const FooterLogo = styled.div`background-image: url(${footer});`

export default Footer
