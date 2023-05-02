import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import Typography from '@mui/material/Typography';
import { Animation } from '@devexpress/dx-react-chart';
import { Box } from '@mui/material';
const Graph = () => { 
    const data = [
        { year: 'Jan', population: 600},
        { year: 'Feb', population: 300},
        { year: 'Mar', population: 600 },
        { year: 'April', population: 900 },
        { year: 'May', population: 450 },
        { year: 'June', population: 600 },
        { year: 'July', population: 300 },
        { year: 'August', population: 250 },
        { year: 'September', population: 300 },
        { year: 'October', population: 200 },
        { year: 'November', population: 300 },
        { year: 'December', population: 600 },
        
      ];
    return ( 
        <Box sx={{margin :'auto',width : '95%'}}>
        <Chart data={data}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Box sx={{display:'flex' , marginTop : '15px'}}>
           <Typography sx={{ fontSize: 16 , fontWeight:'bold' }} color="text.paper">Analytics</Typography>
           <Typography sx={{ marginLeft:'80%', fontSize: 16 }} color="text.paper">Organization </Typography>
           <Typography sx={{ fontSize: 16 , marginLeft:'20px'}}>Admins</Typography>
        </Box>
          <Animation />
        </Chart>
        </Box>
     );
}
 
export default Graph;