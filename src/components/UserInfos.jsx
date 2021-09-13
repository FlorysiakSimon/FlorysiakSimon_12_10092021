import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import {getUserInfos} from '../service/data'
import { useParams } from 'react-router';
import caloriesIcon from '../assets/calories-icon.svg'


const Title = styled.h1`
    font-size: 48px;
    line-height: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    margin-bottom:40px;`

const UserName = styled.span`
    color:#FF0101;`

const Wrapper = styled.div`
    display:flex;`

const Infos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:24px;
`

const InfosData = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #282D30;
    margin-bottom:2px;
`

const InfosText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798C;
`

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

	console.log(data.keyData.caloriesCount)
    return (  
    <div>
        <Title>Bonjour <UserName>{data.userInfos.firstName}</UserName></Title>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <Wrapper>
            <img src={caloriesIcon} alt="calories icon"/>
            <Infos>
                <InfosData>{data.keyData.calorieCount}Kcal</InfosData>
                <InfosText>Calories</InfosText>
            </Infos>
        </Wrapper>
        
    </div>);
}

export default UserInfos;