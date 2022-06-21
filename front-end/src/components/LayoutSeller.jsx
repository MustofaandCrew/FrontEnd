import React from "react";

import HeaderSeller from "./HeaderSeller";

export default function LayoutSeller({ children }) {
    return (
        <div>
            <HeaderSeller />
            <div>
                {children}
            </div>
        </div>
    )
}