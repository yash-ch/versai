import "../css/banner.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import background from "../book.jpg"

toast.configure()

export default function HomePageBanner() {

    return (
        <div className="background" style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <p className="title">
                Universe
            </p>
            <p className="banner-des">
                When a young boy disappears, his mother, a police chief and his friends
                must confront terrifying supernatural forces in order to get him back.
            </p>

            <div className="button-grid">
                <Link to={`/player?name=${"Stranger Things"}&lndimg=banner.png`} style={{textDecoration: "none"}}>
                    <Button variant="contained" className="banner-custom-btn btn-7">
                        <span className="button-text">
                            Buy Now
                        </span>
                    </Button>
                </Link>
            </div>
        </div>

    );
}
