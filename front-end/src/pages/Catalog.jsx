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
                    <div className="border border-2 border-secondary rounded px-3 py-3">
                        <h5>Categories</h5>
                        <br />
                        <a href="/" className="link"><p>All Categories</p></a>
                        <hr />
                        <a href="/" className="link"><p>Wishlist</p></a>
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