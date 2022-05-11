import "../css/banner.scss";
import * as React from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import background from "../caricari.jpg"

toast.configure()

export default function HomePageBanner() {

    return (
        <div className="background" style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <p className="title">
                Cari Cari
            </p>
            <p className="banner-des">
                Live from their sofa to yours. Get closer to your favorite<br/> artists, and never miss out.
            </p>
        </div>

    );
}
