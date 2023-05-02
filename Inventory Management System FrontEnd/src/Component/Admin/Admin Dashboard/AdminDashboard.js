import { Box, Card, Divider } from '@mui/material';
import Demo from './Shared Components/inventoryGraph';
import "../../createOrganization.css";
import AdminCard from './Shared Components/AdminCard';
import ColumnGroupingTable from '../../SuperAdmin/Dashboard/Shared/Table';
import { cardStyle } from './style';
const AdminDashboard = () => {
    return (   
        <Card sx={cardStyle}>
            <div className='side_head'>Dashboard</div>
            <AdminCard/>
            <Divider/>
            <Demo/>
            <Divider/>
            <ColumnGroupingTable/>

        </Card>
    );
}
 
export default AdminDashboard;