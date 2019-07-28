import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import case1 from '../../images/cases/1.png';
import case2 from '../../images/cases/2.png';
import case3 from '../../images/cases/3.png';
import case4 from '../../images/cases/4.png';
import case5 from '../../images/cases/5.png';
import case6 from '../../images/cases/6.png';
import majorCase1 from '../../images/header.png';
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

export class Home extends Component {
    constructor(props, context) {
        super(props, context);
        AOS.init();
    }

    static propTypes = {

    }

    render() {
        return (
            <div className="height-auto full-width overflow-hidden">
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30">
                    <div className="width-50-percent border-box float-left height-auto right-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case1 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case1>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            A summer island in the Netherlands
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-50-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case2 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case2>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            Not some average banking website
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-50-percent border-box float-left height-auto right-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case3 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case3>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            Beautiful design meets innovative technology
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-50-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case4 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case4>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            A 100 years of Mondriaan & De Stijl
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            <div className=""></div>
                            VIEW CASE
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30">
                    <div className="width-70-percent border-box float-left height-auto right-padding-20 bottom-margin-50 cursor-pointer box">
                        <MajorCase1 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></MajorCase1>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            A summer island in the Netherlands
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-30-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer">
                        <div className="height-500 full-width bottom-margin-20 border-box border-top border-bottom">
                            <div className="box">
                                <div className="height-auto bottom-padding-20 top-padding-20 border-bottom">
                                    <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue bottom-padding-10">
                                        Bol.com
                                    </div>
                                    <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                                        Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels
                                    </div>
                                    <div className="height-auto size-pointeight-rem maisonneue blue-color">
                                        VIEW CASE
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="height-auto bottom-padding-20 top-padding-20">
                                    <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue bottom-padding-10">
                                        Bol.com
                                    </div>
                                    <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                                        Integrating existing content into O’Neill’s new e-commerce platform
                                    </div>
                                    <div className="height-auto size-pointeight-rem maisonneue blue-color">
                                        VIEW CASE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30">
                    <div className="width-50-percent border-box float-left height-auto right-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case5 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case5>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            A summer island in the Netherlands
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-50-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case6 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case6>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            Not some average banking website
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30">
                    <div className="width-30-percent border-box float-left height-auto right-padding-20 bottom-margin-50 cursor-pointer">
                        <div className="height-500 full-width bottom-margin-20 border-box border-top border-bottom">
                            <div className="box">
                                <div className="height-auto bottom-padding-20 top-padding-20 border-bottom">
                                    <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue bottom-padding-10">
                                        Bol.com
                                    </div>
                                    <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                                        Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels
                                    </div>
                                    <div className="height-auto size-pointeight-rem maisonneue blue-color">
                                        VIEW CASE
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="height-auto bottom-padding-20 top-padding-20">
                                    <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue bottom-padding-10">
                                        Bol.com
                                    </div>
                                    <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                                        Integrating existing content into O’Neill’s new e-commerce platform
                                    </div>
                                    <div className="height-auto size-pointeight-rem maisonneue blue-color">
                                        VIEW CASE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="width-70-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer box">
                        <MajorCase1 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></MajorCase1>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            A summer island in the Netherlands
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30 border-bottom">
                    <div className="width-50-percent border-box float-left height-auto right-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case1 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case1>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            A summer island in the Netherlands
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-50-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case2 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case2>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            Not some average banking website
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-50-percent border-box float-left height-auto right-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case3 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case3>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            Beautiful design meets innovative technology
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-50-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case4 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case4>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            A 100 years of Mondriaan & De Stijl
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            <div className=""></div>
                            VIEW CASE
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30 bottom-padding-30">
                    <div className="width-60-percent margin-auto size-two-rem top-padding-20 bottom-padding-20">
                        “Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”
                    </div>
                    <div className="width-60-percent margin-auto size-pointnine-rem maisonneue">
                        MATTIJS TEN BRINK – CEO, TRANSAVIA
                    </div>

                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30">
                    <div className="width-50-percent border-box float-left height-auto right-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case5 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case5>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            A summer island in the Netherlands
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="width-50-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer box">
                        <Case6 className="height-500 full-width black bottom-margin-20 cover-bg center-bg no-repeat-bg"></Case6>
                        <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue">
                            Bol.com
                        </div>
                        <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                            Not some average banking website
                        </div>
                        <div className="height-auto size-pointeight-rem maisonneue blue-color">
                            VIEW CASE
                        </div>
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div className="full-width pale-gray top-padding-70 bottom-padding-70 text-center">
                    <div className="full-width size-two-rem bottom-padding-20">
                        CLIENTS
                    </div>
                    <div className="width-30-percent size-pointnine-rem maisonneue margin-auto light line-height-20">
                        We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
                    </div>
                    <div className="width-60-percent margin-auto top-padding-50">
                        {[...Array(16)].map((item, index) => (
                            <Client data-aos="flip-up" key={index} client={require(`../../images/clients/${index + 1}.png`)} className="width-25-percent float-left height-100 center-bg bg-height-200 no-repeat-bg"></Client>
                        ))}
                        <div className="clear-both"></div>
                    </div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30 top-padding-50">
                    <div className="width-30-percent border-box float-left height-auto right-padding-20 box size-threepointfive-rem line-height-50">
                        QUESTION?<br />
                        WE ARE HERE<br />
                        TO HELP
                    </div>
                    <div className="width-70-percent border-box float-left height-auto left-padding-10 bottom-margin-50">
                        <div className="full-width bottom-margin-50">
                            <div className="width-50-percent right-padding-20 float-left border-box">
                                <div className="input-container">
                                    <input
                                        type="text"
                                        required
                                        autoComplete="new-password"
                                        name="password"
                                        onChange={this.onChange} />
                                    <label className="noselect">
                                        Name
                                    </label>
                                </div>
                            </div>
                            <div className="width-50-percent left-padding-20 float-left border-box">
                                <div className="input-container">
                                    <input
                                        type="text"
                                        required
                                        autoComplete="new-password"
                                        name="password"
                                        onChange={this.onChange} />
                                    <label className="noselect">
                                        Email
                                    </label>
                                </div>
                            </div>
                            <div className="clear-both"></div>
                        </div>
                        <div className="width-50-percent bottom-margin-20 right-padding-20 border-box">
                            <div className="input-container textarea compose">
                                <textarea type="text" name="message" onChange={this.handleChange} required autoComplete="new-password"></textarea>
                                <label className="noselect">
                                    Message
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="blue">
                            <div>
                                SEND
                            </div>
                            <div>
                                
                            </div>
                        </button>
                    </div>
                    <div className="clear-both"></div>
                </div>
            </div>
        )
    }
}

const Case1 = styled.div`background-image: url(${case1});`;
const Case2 = styled.div`background-image: url(${case2});`;
const Case3 = styled.div`background-image: url(${case3});`;
const Case4 = styled.div`background-image: url(${case4});`;
const Case5 = styled.div`background-image: url(${case5});`;
const Case6 = styled.div`background-image: url(${case6});`;
const MajorCase1 = styled.div`background-image: url(${majorCase1});`;
const Client = styled.div`background-image: url(${props => props.client})`;

export default Home
