import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.svg';

const Head = styled.header ` 
`


const Nav = styled.nav `

`

function Header() {
    return (  
        <Head>
            <img src={logo} alt="sportSee" aria-label="logo sportSee"/>
            <Nav>
                Accueil
                Profil
                Réglage
                Réglage
            </Nav>
        </Head>
    );
}

export default Header;