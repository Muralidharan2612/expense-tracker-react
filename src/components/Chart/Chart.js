import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const dataValue = props.chartData.map(item => item.value);
    const maximumValue = Math.max(...dataValue);
    return (
        <div className='chart'>
            {props.chartData.map(data =>
                <ChartBar
                    key={data.label}
                    label={data.label}
                    maxValue={maximumValue}
                    value={data.value}
                />)}
        </div>
    )
};

export default Chart;