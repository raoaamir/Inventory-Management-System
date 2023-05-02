import * as React from 'react';
import {Chart,ArgumentAxis,ValueAxis,BarSeries,Legend,} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { Box, Typography } from '@mui/material';
import { boxStyle, boxWidth, rootStyle, typography3 } from '../style';


const Root = props => (
  <Legend.Root {...props} sx={rootStyle} />
);
const Label = props => (
  <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);
const data = [
  {country: 'Electronics',gold: 36,silver: 15,}, 
  {country: 'Furniture',gold: 34,silver: 21}, 
  {country: 'Stationery',gold: 23,silver: 9,},
  {country: 'Electric',gold: 23,silver: 9,},
  {country: 'Wires',gold: 23,silver: 9,}

  ];

const complaintsData = [
{Name: 'JAN',pending: 36,resolved: 15,}, 
{Name: 'FEB',pending: 34,resolved: 21}, 
{Name: 'MAR',pending: 23,resolved: 9},
{Name: 'April',pending: 23,resolved: 12},
{Name: 'May',pending: 23,resolved: 5},
{Name: 'June',pending: 23,resolved: 4}
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }


  render() {
    const { data: chartData } = this.state;

    return (
      <Box sx={boxStyle}>
        <Box sx={boxWidth}>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Assigned items"
            valueField="gold"
            argumentField="country"
          />
          <BarSeries
            name="Remaining items"
            valueField="silver"
            argumentField="country"
            color="green"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Typography sx={typography3} color="text.paper">Complaints</Typography>
          <Stack />
        </Chart>
        </Box>
        <Box sx={boxWidth}>
        <Chart data={complaintsData}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Pending"
            valueField="pending"
            argumentField="Name"
          />
          <BarSeries
            name="Resolved"
            valueField="resolved"
            argumentField="Name"
            color="green"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Typography sx={typography3} color="text.paper">Inventory Items</Typography>
          <Stack />
        </Chart>
        </Box>
      </Box>
    );
  }
}


