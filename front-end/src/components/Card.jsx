import React from "react";


export default function Card(props) {
    return (
                <div className="card cardImgStyle">
                    <img src={props.image} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <p className="card-text pThumbnail">Apple Watch 4</p>
                        <p className="card-text pPrice">$8904</p>
                    </div>
                </div>
    )
}