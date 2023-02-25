import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Containheader from "../../Containheader/Containheader";
import 'react-vertical-timeline-component/style.min.css';
import git from './img/github.png';
import './mainBriefcase.scss';

export default function MainBriefcase(){
    return(
        <Containheader>
            <main className="mainBr">
                <div className="mainBr__container">
                    <div className="mainBr__container--title">
                        <h1 className="mainBr__container--h1">Mis proyectos</h1>
                    </div>
                    <div className="mainBr__container--subtitle">
                        <h2 className="mainBr__container--h2">Frontend:</h2>
                    </div>
                </div>
                <div className="mainBr__container2">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#D94C21', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #D94C21' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <div className="contain__h1">
                                <h1 className="vertical-timeline-element-title">Marca personal</h1>
                            </div>
                            <div className="contain__button">
                                <button className="buttonM">ver</button>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#0A91C6', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #0A91C6' }}
                            iconStyle={{ background: '#D94C21', color: '#fff' }}
                        >
                            <div className="contain__h1">
                                <h1 className="vertical-timeline-element-title">Web Tributo</h1>
                            </div>
                            <div className="contain__button">
                                <button className="buttonM">
                                    <img src={git} alt="github" />
                                </button>
                                <button className="buttonM">ver</button>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#D94C21    ', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #D94C21' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <div className="contain__h1">
                                <h1 className="vertical-timeline-element-title">Deezer</h1>
                            </div>
                            <div className="contain__button">
                                <button className="buttonM">
                                    <img src={git} alt="github" />
                                </button>
                                <button className="buttonM">ver</button>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#0A91C6', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #0A91C6' }}
                            iconStyle={{ background: '#D94C21', color: '#fff' }}
                        >
                            <div className="contain__h1">
                                <h1 className="vertical-timeline-element-title">Sabujcha</h1>
                            </div>
                            <div className="contain__button">
                                <button className="buttonM">
                                    <img src={git} alt="github" />
                                </button>
                                <button className="buttonM">ver</button>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#D94C21', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #D94C21' }}
                            iconStyle={{ background: '#0A91C6', color: '#fff' }}
                        >
                            <div className="contain__h1">
                                <h1 className="vertical-timeline-element-title">Dashboard</h1>
                            </div>
                            <div className="contain__button">
                                <button className="buttonM">
                                    <img src={git} alt="github" />
                                </button>
                                <button className="buttonM">ver</button>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#0A91C6', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #0A91C6' }}
                            iconStyle={{ background: '#D94C21', color: '#fff' }}
                        >
                            <div className="contain__h1">
                                <h1 className="vertical-timeline-element-title">Tetris</h1>
                            </div>
                            <div className="contain__button">
                                <button className="buttonM">
                                    <img src={git} alt="github" />
                                </button>
                                <button className="buttonM">ver</button>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#D94C21', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #D94C21' }}
                            iconStyle={{ background: '#0A91C6', color: '#fff' }}
                        >
                            <div className="contain__h1">
                                <h1 className="vertical-timeline-element-title">Cliente real</h1>
                            </div>
                            <div className="contain__button">
                                <button className="buttonM">
                                    <img src={git} alt="github" />
                                </button>
                                <button className="buttonM">ver</button>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </main>
        </Containheader>
    )
}