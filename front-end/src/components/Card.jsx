import React from "react";


export default function Card(props) {
    return (
        <div className="col cardImgStyle">
            <div className="card h-100">
                <img src={props.image} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title pThumbnail">Apple Watch 4</h5>
                    <p className="card-text pPrice">$8904</p>
                </div>
            </div>
        </div>
    )
}