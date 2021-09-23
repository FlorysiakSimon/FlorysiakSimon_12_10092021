import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import {getUserInfos} from '../service/data'
import { useParams } from 'react-router';
import caloriesIcon from '../assets/calories-icon.svg'
import proteinsIcon from '../assets/protein-icon.svg'
import glucidesIcon from '../assets/carbs-icon.svg'
import lipidesIcon from '../assets/fat-icon.svg'
import KeyData from './KeyData';
import ScoreChart from './ScoreChart';
import UserActivity from './UserActivity';
import UserAverageSessions from './UserAverageSessions';
import UserPerformance from './UserPerformance';

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  margin-top:2%;
  
`;

const Head = styled.header`
  margin-bottom: 40px;
  @media (max-width: 1025px) {
			margin-left: 2em;
		}
  h1 {
    font-weight: 600;
    font-size:48px;
    margin-bottom:40px;
  }
`;

const Name = styled.span`
  color: #ff0000;
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



function UserInfos() {

    const [data, setData] = useState([]);
	  const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserInfos(id);
			if (!request) return console.log('data error');
			setData(request.data);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;

	//console.log(data)

    return (  
        <Container>
            <Head>
                <h1>Bonjour <Name>{data.userInfos.firstName}</Name></h1>
                <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            </Head>
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
    );
}

export default UserInfos;

