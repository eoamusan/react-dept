import React from 'react'
import header from '../../images/header.png';
import styled from 'styled-components'
import logo from '../../images/logo.png'
import logoWhite from '../../images/logo-white.png'
import MenuLink from './MenuLink';
import SubLink from './SubLink';

const Header = ({ fixed, showMenu, home, focusLink }) => {
    return (
        <div className={`header full-width ${home.showMenu && 'open'}`}>
            <HeaderSection className="full-width full-height black">
                <div className={`width-85-percent margin-auto bottom-padding-5 top-padding-30 menu-header smooth ${fixed && !home.showMenu && 'scrolling'} ${home.showMenu ? 'border-bottom-black' : 'border-bottom-dark'}`}>
                    {home.showMenu ?
                        <LogoWhite className="width-80 height-40 contain-bg no-repeat-bg float-left right-margin-150"></LogoWhite> :
                        <Logo className="width-80 height-40 contain-bg no-repeat-bg float-left right-margin-150"></Logo>}
                    <div className="float-right cursor-pointer" onClick={showMenu}>
                        <div className={`float-left noselect size-onepointone-rem top-padding-10 ${home.showMenu ? 'white-color' : 'black-color'}`}>
                            MENU
                        </div>
                        <div className="float-left width-30 height-30 left-margin-10">
                            <div className={`navigation-icon float-right ${home.showMenu && 'open'}`}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div className="width-85-percent margin-auto">
                    <div className="float-left black-color noselect size-twenty-rem">
                        WORK
                    </div>
                </div>
                <button type="submit" className="black absolute noselect">
                    <div className="display-inline no-wrap">
                        <div className="float-left">
                            VIEW CASE
                        </div>
                        <div className="overflow-hidden icon relative float-left">
                            <i className="material-icons center-item">
                                arrow_right_alt
                            </i>
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </button>
                {home.showMenu &&
                    <div className="full-width full-height black menu animated faster fadeIn white-color border-box top-padding-100 no-select" onMouseOut={() => focusLink('main', 'HOME')}>
                        <div className="extra absolute black right-padding-10" onMouseOut={() => focusLink('region', 'GLOBAL')}>
                            <div className="size-one-rem light-gray-color">LANDEN</div>
                            <SubLink
                                to="GLOBAL"
                                focused={home.region}
                                type="region"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="NEDERLAND"
                                focused={home.region}
                                type="region"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="UNITED STATES"
                                focused={home.region}
                                type="region"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="IRELAND"
                                focused={home.region}
                                type="region"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="UNITED KINGDOM"
                                focused={home.region}
                                type="region"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="DEUTSCHLAND"
                                focused={home.region}
                                type="region"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="SCHWEIZ"
                                focused={home.region}
                                type="region"
                                handleMouseOver={focusLink} />
                        </div>
                        <div className="extra absolute bottom-100 black right-padding-10">
                            <SubLink
                                to="FACEBOOK"
                                focused={home.social}
                                type="social"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="TWITTER"
                                focused={home.social}
                                type="social"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="INSTAGRAM"
                                focused={home.social}
                                type="social"
                                handleMouseOver={focusLink} />
                            <SubLink
                                to="LINKEDIN"
                                focused={home.social}
                                type="social"
                                handleMouseOver={focusLink} />
                        </div>
                        <MenuLink
                            to="HOME"
                            focused={home.main}
                            handleMouseOver={focusLink} />
                        <MenuLink
                            to="WERK"
                            focused={home.main}
                            handleMouseOver={focusLink} />
                        <MenuLink
                            to="OVER"
                            focused={home.main}
                            handleMouseOver={focusLink} />
                        <MenuLink
                            to="DIENSTEN"
                            focused={home.main}
                            handleMouseOver={focusLink} />
                        <MenuLink
                            to="PARTNERS"
                            focused={home.main}
                            handleMouseOver={focusLink} />
                        <MenuLink
                            to="STORIES"
                            focused={home.main}
                            handleMouseOver={focusLink} />
                        <MenuLink
                            to="VACATURES"
                            focused={home.main}
                            handleMouseOver={focusLink} />
                    </div>}
            </HeaderSection>
        </div>
    )
}

const HeaderSection = styled.div`background-image: url(${header});`
const Logo = styled.div`background-image: url(${logo});`
const LogoWhite = styled.div`background-image: url(${logoWhite});`

export default Header
