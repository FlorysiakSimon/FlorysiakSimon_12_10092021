import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import PropTypes from 'prop-types'; 

const Container = styled.div`
    width:258px;
    height:263px;
`

const Title = styled.h2`
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`

function ScoreChart({data}) {
    
    return ( 
        <Container>
            <Title>Score</Title>
            <ResponsiveContainer width="100%" height="100px">
                <PieChart >
                 <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
            </ResponsiveContainer>
        </Container>
     );
}

export default ScoreChart;

ScoreChart.propTypes = {
data: PropTypes.number
}