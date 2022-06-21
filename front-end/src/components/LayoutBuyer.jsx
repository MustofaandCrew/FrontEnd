import React from "react";

import HeaderBuyer from "./HeaderBuyer"


export default function LayoutBuyer({ children }) {
    return (
        <div>
            <HeaderBuyer />
            <div>
                {children}
            </div>
        </div>
    )
}