import React from 'react';
import styled from 'styled-components';
import UserInfos from '../components/UserInfos';
import LeftBar from '../components/LeftBar';

const Main = styled.main`
  display:grid;
  grid-template-columns: 117px auto;
  margin: auto;
  /*height: 100vh; */
  @media screen and (max-width: 1250px) {
      grid-gap:1em;
    }
`

function UserPage() {
    return (  
      <Main>
        <LeftBar />
        <UserInfos />
         
      </Main>);
}

export default UserPage;