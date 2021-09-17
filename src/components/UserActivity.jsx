import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import {getUserActivity} from '../service/data'
import { useParams } from 'react-router';
import PropTypes from 'prop-types'; 
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";
import ActivityToolType from './ActivityToolType';

const Wrapper = styled.div`
    margin-bottom: 25px;
	height: 320px;
	border-radius: 5px;
	background-color: #fbfbfb;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	padding: 25px;
	width:835px;
	height:320px;
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
	`

const Title= styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`

const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
`

const Icon = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`

const Legend = styled.div`
	display: flex;
`

const Info = styled.div`
    display: flex;
    align-items:center;
`
/**
 * Render a BarChart with user activity Data
 * @param {data} the fetched data from API
 */
function UserActivity() {

    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserActivity(id);
			if (!request) return console.log('data error');
			
			setData(request.data.sessions);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;

	//console.log(data)
    return (  
        <Wrapper>
            <Head>
                <Title>Activité quotidienne</Title>
                <Legend>
					<Info>
						<Icon color='#282D30' />
						<Text>Poids (kg)</Text>
					</Info>
					<Info>
						<Icon color='#E60000' />
						<Text>Calories brûlées (kCal)</Text>
					</Info>
				</Legend>
            </Head>
            <ResponsiveContainer>
                <BarChart data={data} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dy={15} />
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 5 ', 'dataMax + 1']} tickCount="3" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 20']}  hide={true}/>
                    <Tooltip content={<ActivityToolType/>}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    );
}

export default UserActivity;

UserActivity.propTypes = {
    id: PropTypes.number,
}