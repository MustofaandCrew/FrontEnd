import React from "react";
import catBaby from '../assets/icons/catBaby.png';
import catGadgets from "../assets/icons/catGadgets.png";
import catFurniture from "../assets/icons/catFurniture.png";
import catSneakers from "../assets/icons/catSneakers.png";
import catMakeUp from "../assets/icons/catMakeUp.png";
import catTools from "../assets/icons/catTools.png";

export default function Home() {
    const cardStyle = {
        width: "10rem",
        margin: "1rem",
    };
    return (
        <div className="container container-fluid">

            {/* Carousel */}
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/young-woman-yellow-leather-jacket-copy-space_23-2148674153.jpg?w=2000" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/young-woman-yellow-leather-jacket-copy-space_23-2148674153.jpg?w=2000" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/young-woman-yellow-leather-jacket-copy-space_23-2148674153.jpg?w=2000" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Card */}
            <div className="d-flex flex-row flex-wrap justify-content-center">
                <div style={cardStyle}>
                    <img src={catGadgets} className="card-img-top" alt="..." />
                </div>
                <div style={cardStyle}>
                    <img src={catFurniture} className="card-img-top" alt="..." />
                </div>
                <div style={cardStyle}>
                    <img src={catMakeUp} className="card-img-top" alt="..." />
                </div>
                <div style={cardStyle}>
                    <img src={catSneakers} className="card-img-top" alt="..." />
                </div>
                <div style={cardStyle}>
                    <img src={catTools} className="card-img-top" alt="..." />
                </div>
                <div style={cardStyle}>
                    <img src={catBaby} className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    )
}