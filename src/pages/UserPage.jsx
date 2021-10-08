import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
//import {getUserInfos} from '../service/data'
import { useParams } from 'react-router';
import caloriesIcon from '../assets/calories-icon.svg'
import proteinsIcon from '../assets/protein-icon.svg'
import glucidesIcon from '../assets/carbs-icon.svg'
import lipidesIcon from '../assets/fat-icon.svg'
import KeyData from '../components/KeyData';
import ScoreChart from '../components/ScoreChart';
import UserActivity from '../components/UserActivity';
import UserAverageSessions from '../components/UserAverageSessions';
import UserPerformance from '../components/UserPerformance';
import LeftBar from '../components/LeftBar';
import UserInfos from '../components/UserInfos';
import { mockUserInfos } from './../service/mockedData';


const Main = styled.main`
  display:grid;
  grid-template-columns: 117px auto;
  margin: auto;
  @media screen and (max-width: 1250px) {
      grid-gap:1em;
    }
`
const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top:2%;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  aside {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 835px;
    flex-direction: column;
    margin: auto;
    margin-left:0;
    @media (max-width: 1208px) {
      flex-direction: row;
      margin: auto 0;
      margin-right:6em;
    }
    > div {
      margin: 20px 5px;
    }
  }
`;

const BottomChart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:1em;
  justify-content: space-between;
`;

/**Render the dashboard
* @return {JSX}
*/
function UserPage() {
  const [data, setData] = useState([]);
	const {id} = useParams();
  useEffect(() => {
		const getData = async () => {
			const request = await mockUserInfos(id);
			if (!request) return alert('data error');
			setData(request.data);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;

    return (  
      <Main>
        <LeftBar />
        <Container>
        <UserInfos name={data.userInfos.firstName} />
            <Content>
                <section>
                    <UserActivity/>
                    <BottomChart>
                        <UserAverageSessions/>
                        <UserPerformance/>
                        <ScoreChart data={data}/>
                    </BottomChart>
                </section>
                <aside>
                    <KeyData icon={caloriesIcon} info={`${data.keyData.calorieCount}kCal`} text='Calories' />
                    <KeyData icon={proteinsIcon} info={`${data.keyData.proteinCount}g`} text='Proteines' />
                    <KeyData icon={glucidesIcon} info={`${data.keyData.carbohydrateCount}g`} text='Glucides' />
                    <KeyData icon={lipidesIcon} info={`${data.keyData.lipidCount}g`} text='Lipides' /> 
                </aside>
            </Content>
          </Container>
      </Main>);
}

export default UserPage;