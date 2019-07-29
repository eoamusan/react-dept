import React, { Component } from 'react'

import { connect } from 'react-redux'

import styled from 'styled-components';
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos'
import Card from './Card'
import { bindActionCreators } from 'redux'
import { homeActions } from '../../actions'

export class Home extends Component {
    constructor(props, context) {
        super(props, context);
        AOS.init();

        this.containerRef = React.createRef();
        this.state = {
            work: '',
            industry: ''
        }
    }

    componentDidMount() {
        this.props.homeActions.fetchCardList('all');
    }

    onChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        this.setState({ [name]: value },
            () => {
                this.props.homeActions.fetchCardList(this.state.work, this.state.industry);
            });

        window.scrollTo({
            top: window.innerHeight - 75,
            behavior: 'smooth'
        });
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }

    render() {
        return (
            <div ref={this.containerRef} className="height-auto full-width overflow-hidden">
                <div className="width-85-percent margin-auto bottom-margin-20 top-margin-20 size-onepointfive-rem no-select">
                    <div className="float-right masked-select cursor-pointer">
                        <div className="border-bottom-dark">
                            <div className="float-left">
                                {this.state.industry === '' ? 'all industries' : this.state.industry}
                            </div>
                            <div className="float-left width-20 top-padding-2">
                                <i className="material-icons">
                                    arrow_drop_down
                                </i>
                            </div>
                            <div className="clear-both"></div>
                        </div>
                        <select className="absolute left top size-onepointone-rem" name="industry" onChange={this.onChange}>
                            <option value="">all industries</option>
                            <option>technology</option>
                            <option>logistics</option>
                        </select>
                    </div>
                    <div className="float-right light right-margin-10">in</div>
                    <div className="float-right right-margin-10 masked-select cursor-pointer">
                        <div className="border-bottom-dark">
                            <div className="float-left">
                                {this.state.work === '' ? 'all work' : this.state.work}
                            </div>
                            <div className="float-left width-20 top-padding-2">
                                <i className="material-icons">
                                    arrow_drop_down
                                </i>
                            </div>
                            <div className="clear-both"></div>
                        </div>
                        <select className="absolute left top size-onepointone-rem" name="work" onChange={this.onChange}>
                            <option value="">all work</option>
                            <option>play</option>
                            <option>networking</option>
                        </select>
                    </div>
                    <div className="float-right light right-margin-10">Show me</div>
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30">
                    {this.props.home.fetchingCards === true ?
                        <React.Fragment>
                            {[...Array(4)].map((item, index) => (
                                <div className={`width-50-percent border-box float-left height-auto bottom-margin-50 cursor-pointer ${index % 2 === 0 ? 'right-padding-10' : 'left-padding-10'}`} key={index}>
                                    <Card
                                        fetchingCards={true} />
                                </div>))}
                        </React.Fragment> :
                        <div>
                            {this.props.home.cards.slice(0, 4).map((item, index) => (
                                <div key={index} className={`width-50-percent border-box float-left height-auto bottom-margin-50 cursor-pointer ${index % 2 === 0 ? 'right-padding-10' : 'left-padding-10'}`}>
                                    <Card
                                        details={item} />
                                </div>))}
                        </div>
                    }
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30">
                    <div className="width-70-percent border-box float-left height-auto right-padding-20 bottom-margin-50 cursor-pointer">
                        <Card
                            details={{
                                website: 'Florensis',
                                title: 'Rethinking the entire online ecosystem',
                                image: 'header.png'
                            }} />
                    </div>
                    <div className="width-30-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer">
                        <div className="height-500 full-width bottom-margin-20 border-box border-top border-bottom">
                            <div className="box">
                                <div className="height-auto bottom-padding-20 top-padding-20 border-bottom">
                                    <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue bottom-padding-10">
                                        MICROSOFT
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
                                        O’NEILL
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
                    {this.props.home.fetchingCards === true ?
                        <React.Fragment>
                            {[...Array(2)].map((item, index) => (
                                <div key={index} className={`width-50-percent border-box float-left height-auto bottom-margin-50 cursor-pointer ${index % 2 === 0 ? 'right-padding-10' : 'left-padding-10'}`}>
                                    <Card
                                        fetchingCards={true} />
                                </div>))}
                        </React.Fragment> :
                        <div>
                            {this.props.home.cards.slice(4, 6).map((item, index) => (
                                <div key={index} className={`width-50-percent border-box float-left height-auto bottom-margin-50 cursor-pointer ${index % 2 === 0 ? 'right-padding-10' : 'left-padding-10'}`}>
                                    <Card
                                        details={item} />
                                </div>))}
                        </div>
                    }
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30">
                    <div className="width-30-percent border-box float-left height-auto right-padding-20 bottom-margin-50 cursor-pointer">
                        <div className="height-500 full-width bottom-margin-20 border-box border-top border-bottom">
                            <div className="box">
                                <div className="height-auto bottom-padding-20 top-padding-20 border-bottom">
                                    <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue bottom-padding-10">
                                        BUTLINS
                                    </div>
                                    <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                                        Enhancing customer experience for personalised holiday planning using real time data
                                    </div>
                                    <div className="height-auto size-pointeight-rem maisonneue blue-color">
                                        VIEW CASE
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="height-auto bottom-padding-20 top-padding-20">
                                    <div className="height-auto size-pointeight-rem gray-color uppercase maisonneue bottom-padding-10">
                                        VACANSESELECT
                                    </div>
                                    <div className="height-auto bottom-margin-10 size-onepointfive-rem">
                                        Predicting booking behavior for holidays with smart data, voice search and machine learning
                                    </div>
                                    <div className="height-auto size-pointeight-rem maisonneue blue-color">
                                        VIEW CASE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="width-70-percent border-box float-left height-auto left-padding-10 bottom-margin-50 cursor-pointer">
                        <Card
                            details={{
                                website: 'Florensis',
                                title: 'Rethinking the entire online ecosystem',
                                image: 'header.png'
                            }} />
                    </div>
                    <div className="clear-both"></div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30 border-bottom">
                    {this.props.home.fetchingCards === true ?
                        <React.Fragment>
                            {[...Array(4)].map((item, index) => (
                                <div key={index} className={`width-50-percent border-box float-left height-auto bottom-margin-50 cursor-pointer ${index % 2 === 0 ? 'right-padding-10' : 'left-padding-10'}`}>
                                    <Card
                                        fetchingCards={true} />
                                </div>))}
                        </React.Fragment> :
                        <div>
                            {this.props.home.cards.slice(6, 10).map((item, index) => (
                                <div key={index} className={`width-50-percent border-box float-left height-auto bottom-margin-50 cursor-pointer ${index % 2 === 0 ? 'right-padding-10' : 'left-padding-10'}`}>
                                    <Card
                                        details={item} />
                                </div>))}
                        </div>
                    }
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
                    {this.props.home.fetchingCards === true ?
                        <React.Fragment>
                            {[...Array(2)].map((item, index) => (
                                <div key={index} className={`width-50-percent border-box float-left height-auto bottom-margin-50 cursor-pointer ${index % 2 === 0 ? 'right-padding-10' : 'left-padding-10'}`}>
                                    <Card
                                        fetchingCards={true} />
                                </div>))}
                        </React.Fragment> :
                        <div>
                            {this.props.home.cards.slice(10).map((item, index) => (
                                <div key={index} className={`width-50-percent border-box float-left height-auto bottom-margin-50 cursor-pointer ${index % 2 === 0 ? 'right-padding-10' : 'left-padding-10'}`}>
                                    <Card
                                        details={item} />
                                </div>))}
                        </div>
                    }
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
                            <Client data-aos="flip-up" key={index} client={require(`../../images/clients/${index + 1}.png`)} className="width-25-percent float-left height-100 center-bg bg-height-200 no-repeat-bg cursor-pointer"></Client>
                        ))}
                        <div className="clear-both"></div>
                    </div>
                </div>
                <div data-aos="flip-down" className="width-85-percent margin-auto top-margin-30 top-padding-50">
                    <div className="width-30-percent border-box float-left height-auto right-padding-20 size-threepointfive-rem line-height-50">
                        QUESTION?<br />
                        WE ARE HERE<br />
                        TO HELP
                    </div>
                    <div className="width-70-percent border-box float-left height-auto left-padding-10 bottom-margin-50">
                        <div className="full-width bottom-margin-50">
                            <div className="width-50-percent right-padding-20 float-left border-box">
                                <div className="input-container">
                                    <input type="text" required autoComplete="new-password" name="password" onChange={this.onChange} />
                                    <label className="noselect">
                                        Name
                                    </label>
                                </div>
                            </div>
                            <div className="width-50-percent left-padding-20 float-left border-box">
                                <div className="input-container">
                                    <input type="text" required autoComplete="new-password" name="password" onChange={this.onChange} />
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
                        <button type="submit" className="blue noselect">
                            <div className="display-inline no-wrap">
                                <div className="float-left">
                                    SEND
                                </div>
                                <div className="overflow-hidden icon relative float-left">
                                    <i className="material-icons center-item">
                                        arrow_right_alt
                                    </i>
                                </div>
                                <div className="clear-both"></div>
                            </div>
                        </button>
                    </div>
                    <div className="clear-both"></div>
                </div>
            </div>
        )
    }
}

const Client = styled.div`background-image: url(${props => props.client})`;

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

function mapDispatchToProps(dispatch) {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);