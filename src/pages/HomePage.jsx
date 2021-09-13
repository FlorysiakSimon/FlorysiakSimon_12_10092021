import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1240px;
  margin: auto;
  a{
      display:flex;
      flex-direction:column;
  }
`


function HomePage() {
    return ( 
        <Main>
            <NavLink to="user/12">USER 12</NavLink>
            <NavLink to="user/18">USER 18</NavLink>
        </Main>
     );
}

export default HomePage;