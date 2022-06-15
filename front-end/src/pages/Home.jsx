import React from "react";
import banner from "../assets/images/banner.png";
import catBaby from "../assets/icons/catBaby.png";
import catGadgets from "../assets/icons/catGadgets.png";
import catFurniture from "../assets/icons/catFurniture.png";
import catSneakers from "../assets/icons/catSneakers.png";
import catMakeUp from "../assets/icons/catMakeUp.png";
import catTools from "../assets/icons/catTools.png";
import newProducts from "../assets/images/newProducts.jpg";
import newProducts2 from "../assets/images/newProducts2.jpg";
import newProducts3 from "../assets/images/newProducts3.jpg";

export default function Home() {
    const cardStyle = {
        width: "9rem",
        margin: "0,5rem",
    };
    const cardImgStyle = {
        width: "18rem",
        margin: "0.5rem",
        marginBottom: "1.5rem",
    };
    const pThumbnail = {
        textAlign: "left",
    };
    const pPrice = {
        textAlign: "left",
        color: "orange",
    };
    return (
        <div className="container container-fluid">

            {/* Carousel */}
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100" alt="..." />
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
            <div className="d-flex flex-row flex-wrap justify-content-start mt-5">
                <h4>Trend Categories</h4>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-between">
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

            {/* New Products */}
            <div className="d-flex flex-row flex-wrap justify-content-start mt-5">
                <h4>New Products</h4>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-between">
                <div className="card" style={cardImgStyle}>
                    <img src={newProducts} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <p className="card-text" style={pThumbnail}>Apple Watch 4</p>
                            <p className="card-text" style={pPrice}>$8904</p>
                        </div>
                </div>
                <div className="card" style={cardImgStyle}>
                    <img src={newProducts2} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <p className="card-text" style={pThumbnail}>Apple Watch 4</p>
                            <p className="card-text" style={pPrice}>$8904</p>
                        </div>
                </div>
                <div className="card" style={cardImgStyle}>
                    <img src={newProducts3} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <p className="card-text" style={pThumbnail}>Apple Watch 4</p>
                            <p className="card-text" style={pPrice}>$8904</p>
                        </div>
                </div>
                <div className="card" style={cardImgStyle}>
                    <img src={newProducts3} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <p className="card-text" style={pThumbnail}>Apple Watch 4</p>
                            <p className="card-text" style={pPrice}>$8904</p>
                        </div>
                </div>
                <div className="card" style={cardImgStyle}>
                    <img src={newProducts} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <p className="card-text" style={pThumbnail}>Apple Watch 4</p>
                            <p className="card-text" style={pPrice}>$8904</p>
                        </div>
                </div>
                <div className="card" style={cardImgStyle}>
                    <img src={newProducts2} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <p className="card-text" style={pThumbnail}>Apple Watch 4</p>
                            <p className="card-text" style={pPrice}>$8904</p>
                        </div>
                </div>
                <div className="card" style={cardImgStyle}>
                    <img src={newProducts2} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <p className="card-text" style={pThumbnail}>Apple Watch 4</p>
                            <p className="card-text" style={pPrice}>$8904</p>
                        </div>
                </div>
                <div className="card" style={cardImgStyle}>
                    <img src={newProducts2} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <p className="card-text" style={pThumbnail}>Apple Watch 4</p>
                            <p className="card-text" style={pPrice}>$8904</p>
                        </div>
                </div>
            </div>
        </div>
    )
}