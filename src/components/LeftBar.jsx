import React from 'react';
import iconMedation from '../assets/iconMeditation.svg'
import iconBike from '../assets/iconBike.svg'
import iconSwim from '../assets/iconSwim.svg'
import iconBell from '../assets/iconBell.svg'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div `
    overflow: hidden;
    position:relative;
`

const Nav = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width : 117px;
    height: 100vh;
    background: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /*margin-bottom: -5000px; 
    padding-bottom: 5000px; */
    position:fixed;
    top:0;
    left:0;
    height:100vh;

	
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin:auto;
    width: 64px;
    position:absolute;
    top:30%;
    left:26px;
    a{
        display: flex;
        height: 64px;
        width: 64px;
        margin-bottom: 20px;
    }
    
`

const NavText = styled.p `
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(180deg);
    position: absolute;
    bottom: 59px;
    left:42px;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color:white;
    margin:auto;
`
/** create sideBar with navlink
 * @return {JSX}
 */
function LeftBar() {
    return ( 

        <Container>
            <Nav>
                <Wrapper>
                    <NavLink to='#'><img src={iconMedation} alt="icone meditation" /></NavLink>
                    <NavLink to='#'><img src={iconSwim} alt="icone nage" /></NavLink>
                    <NavLink to='#'><img src={iconBike} alt="icone vélo" /></NavLink>
                    <NavLink to='#'><img src={iconBell} alt="icone musculation" /></NavLink>
                </Wrapper>
                <NavText>Copiryght, SportSee 2020</NavText>
            </Nav>
        </Container>
     );
}

export default LeftBar;