import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';


function Footer() {
    return (
        <footer className="Footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </footer>
    );
}

export default Footer;