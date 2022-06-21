import React from "react";

import HeaderBuyer from "./HeaderBuyer"


export default function MyLayout({ children }) {
    return (
        <div>
            <HeaderBuyer />
            <div>
                {children}
            </div>
        </div>
    )
}