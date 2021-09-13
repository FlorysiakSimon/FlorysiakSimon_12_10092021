import React from 'react';
import styled from 'styled-components';
import UserInfos from '../components/UserInfos';


const Main = styled.main`
  max-width: 1240px;
  margin: auto;
`

function UserPage() {
    return (  
      <Main>
          <UserInfos />
      </Main>);
}

export default UserPage;