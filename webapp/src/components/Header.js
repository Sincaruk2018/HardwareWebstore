import React from 'react';
import { Link } from 'react-router-dom';
import {MdShoppingCart, MdAccountCircle, MdSearch} from 'react-icons/md'

import '../styles/Header.css';

function Header(){

    return(
        <header>
            <nav className = "navbar">
                <Link to="/home" id="logo" className="centered"> <h1 id="store-name">Hardware Express</h1> </Link>
                <div id="search">
                    <input className="search-field" type="text"/>
                    <div className="search-button centered">
                        <MdSearch size={32} />
                    </div>
                </div>
                <div id="cart" className="centered"> 
                    <Link to="/cart">
                        <MdShoppingCart size={48} />
                    </Link>
                </div>
                <div id="profile" className="centered">
                    <Link to="/profile">
                        <MdAccountCircle size={48} />
                    </Link>
                </div>
            </nav>
	</header>
    );
}

export default Header;