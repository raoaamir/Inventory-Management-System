import {Card, Divider } from '@mui/material';
import BasicCard from './Shared/Card';
import Graph from './Shared/graph';
import ColumnGroupingTable from './Shared/Table';
import "../../createOrganization.css";
const Dashboard = () => {
    return (   
        <Card sx={{ margin : 'auto' , width:'95%'}} >
            <div className='side_head'>Dashboard</div>
            <BasicCard/>
            <Divider/>
            <Graph/>
            <Divider/>
            <ColumnGroupingTable/>
        </Card>
// 
    );
}
 
export default Dashboard;