import React from "react";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function LayoutNavbarFooter({ children }) {
    return (
        <div>
            <NavigationBar />
            <Footer />
        </div>
    )
}