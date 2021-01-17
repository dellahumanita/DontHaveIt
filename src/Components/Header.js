import React from 'react';
import { Link } from "react-router-dom";

import Navigation from '../components/Navigation';


function Header() {
    return (
        <header
            className=
                "font-mono text-6xl font-bold text-center object-center border-yellow">
            <Link to="/">
                <span className="text-orange">Don't </span>
                <span className="text-teal"> Have </span>
                <span className="text-yellow"> It? </span>
            </Link>
            <Navigation />
        </header>
    );
}

export default Header;