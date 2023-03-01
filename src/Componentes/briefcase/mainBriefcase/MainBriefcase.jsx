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
                            contentStyle={{ background: '#0A91C6', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #0A91C6' }}
                            iconStyle={{ background: '#D94C21', color: '#fff' }}
                        >
                            <div className="contain__h1">
                                <h1 className="vertical-timeline-element-title">Web Tributo</h1>
                            </div>
                            <div className="contain__button">
                                <a href="https://github.com/kevinarias2210/webTributo" target="_blank" rel="noreferrer" className="buttonM">
                                    <img src={git} alt="github" />
                                </a>
                                <a href="https://kevinarias2210.github.io/webTributo/index.html" target="_blank" rel="noreferrer" className="buttonM">ver</a>
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
                                <a href="https://github.com/Andrea-25-11/DEEZER" target="_blank" rel="noreferrer" className="buttonM">
                                    <img src={git} alt="github" />
                                </a>
                                <a href="https://andrea-25-11.github.io/DEEZER/" target="_blank" rel="noreferrer" className="buttonM">ver</a>
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
                                <a href="https://github.com/kevinarias2210/Tea" target="_blank" rel="noreferrer" className="buttonM">
                                    <img src={git} alt="github" />
                                </a>
                                <a href="https://kevinarias2210.github.io/Tea/" target="_blank" rel="noreferrer" className="buttonM">ver</a>
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
                                <a href="https://github.com/CrisCaBeRi/Semillas_emociones_Y_tareas" target="_blank" rel="noreferrer" className="buttonM">
                                    <img src={git} alt="github" />
                                </a>
                                <a href="https://criscaberi.github.io/Semillas_emociones_Y_tareas/" target="_blank" rel="noreferrer" className="buttonM">ver</a>
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
                                <a href="https://github.com/kevinarias2210/tetris" target="_blank" rel="noreferrer" className="buttonM">
                                    <img src={git} alt="github" />
                                </a>
                                <a href="https://kevinarias2210.github.io/tetris/" target="_blank" rel="noreferrer" className="buttonM">ver</a>
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
                                <a href="https://github.com/kevinarias2210/React-Cliente" target="_blank" rel="noreferrer" className="buttonM">
                                    <img src={git} alt="github" />
                                </a>
                                <a href="https://cliente2.vercel.app/" target="_blank" rel="noreferrer" className="buttonM">ver</a>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </main>
        </Containheader>
    )
}