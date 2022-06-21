import React from 'react'

import Card from "../components/Card";


import NewProducts from "../assets/images/NewProducts.jpg";
import NewProducts2 from "../assets/images/NewProducts2.jpg";
import NewProducts3 from "../assets/images/NewProducts3.jpg";

export default function Catalog() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <h2>Catalog</h2>
                </div>
                <div class="col-4 pt-2">
                    <br />
                    <div className="catalog-nav border border-2 border-secondary rounded py-3">
                        <h5 className="catalog-nav-title">Categories</h5>
                        <br />
                        <div className="catalog-nav-link d-flex justify-content-between">
                            <a href="/" className="catalog-link">All Categories</a>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                        <hr />
                        <div className="catalog-nav-link d-flex justify-content-between">
                            <a href="/" className="catalog-link">Wishlist</a>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                        <hr />
                    </div>
                </div>
                <div class="col-8">
                    <div className="row row-cols-2 row-cols-md-4 g-4 mt-2 mb-5">
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                    </div>
                </div>
            </div>
        </div>
    )
}