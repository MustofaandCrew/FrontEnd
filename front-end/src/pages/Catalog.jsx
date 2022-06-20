import React from 'react'

import Card from "../components/Card";


import NewProducts from "../assets/images/NewProducts.jpg";
import NewProducts2 from "../assets/images/NewProducts2.jpg";
import NewProducts3 from "../assets/images/NewProducts3.jpg";

export default function Catalog() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-9"><h2>Catalog</h2></div>
                <div class="col-4">.col-4<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                <div class="col-6">
                    <div className="d-flex flex-row flex-wrap justify-content-start mt-5 mb-2">
                        <h1>New Products</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-2 mt-2 gap-3">
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                        <Card image={NewProducts3} />
                        <Card image={NewProducts} />
                        <Card image={NewProducts2} />
                    </div>
                </div>
            </div>
        </div>
    )
}