import "../css/banner.scss";
import * as React from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

toast.configure()

export default function HomePageBanner() {

    return (
        <div className="background">
            <p className="title">
                Cari Cari
            </p>
            <p className="banner-des">
                Live from their sofa to yours. Get closer to your favorite<br/> artists, and never miss out.
            </p>

            <div className={"circular-bars"}>
                {[0, 1, 1, 1].map((item) => {
                    return (
                        <div className={"circular-bar-main-div"}>
                            <CircularProgressbarWithChildren
                                value={item === 0 ? 66 : 0}
                                strokeWidth={1}
                                styles={buildStyles({
                                    pathColor: `#DD4CAC`,
                                    textColor: '#f88',
                                    trailColor: 'rgba(214,214,214,0.2)',
                                    backgroundColor: '#DD4CAC',
                                })}>
                                <img
                                    style={{width: 30, marginTop: 5, marginBottom: 5}}
                                    src={item === 0 ? "./assets/label/heart.png" : "./assets/label/event.png"}
                                    alt="event"
                                    className={"label-icon"}
                                />
                                <p style={{color: "white", fontSize: "24px"}}>
                                    0
                                </p>
                                <div className={"circular-bar-text"}>
                                    Label
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    );
                })}

            </div>
            <div className="gradient"/>
        </div>

    );
}
