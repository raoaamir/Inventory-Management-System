import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './Component/SuperAdmin/Header';
import Dashboard from './Component/SuperAdmin/Dashboard/DashBoard';
import Organization from './Component/SuperAdmin/Organization/organization';
import Admins from './Component/SuperAdmin/Admin/Admins';
import Complaints from './Component/SuperAdmin/Complaints/Complaints';
import CreateOrganization from './Component/SuperAdmin/Organization/createOrganization';
import CreateAdmin from './Component/SuperAdmin/Admin/createAdmin';
import Graph from './Component/SuperAdmin/Dashboard/Shared/graph';
import AdminDashboard from './Component/Admin/Admin Dashboard/AdminDashboard';
import Inventory from './Component/Admin/Inventory/Inventory';
import Categories from './Component/Admin/Categories/Categories';
import Employees from './Component/Admin/Employee/Employees';
import Request from './Component/Admin/Request/Request';
import Returns from './Component/Admin/Returns/Returns';
import AdminComplaints from './Component/Admin/Complaints/Complaints';
import Vendors from './Component/Admin/Vendor/vendors';
import CreateInventory from './Component/Admin/Inventory/createInventory';
import AddCategory from './Component/Admin/Categories/addCategory';
import AddEmployee from './Component/Admin/Employee/addEmployee';
import AddVendors from './Component/Admin/Vendor/AddVendors';
import DetailInventory from './Component/Admin/Inventory/detailInventory';
import EmployeeDetail from './Component/Admin/Employee/employeeDetail';
import RequestDetailPage from './Component/Admin/Request/request -detail-page';
import Requests from './Component/Admin/Request/Request';
import ReturnsDetailPage from './Component/Admin/Returns/returns-detail-page';
import ComplaintsDetailPage from './Component/Admin/Complaints/complaints-detail-page';
import SubmittedDetailPage from './Component/Admin/Complaints/sumbitted-Detail-page';
import CreateComplaint from './Component/Admin/Complaints/create-complaint';

function App() {
  const userRole = 'superadmin';

  const superAdminRoutes = (
  <>
    <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='organizations' element ={<Organization/>}/>
          <Route path='admins' element ={<Admins/>}/>
          <Route path='complaints' element ={<Complaints/>}/>
          <Route path='create' element ={<CreateOrganization/>}/>
          <Route path='createAdmin' element ={<CreateAdmin/>}/>
          <Route path='inventory' element ={<Graph/>}/>
  </>

  );

  const adminRoutes = (
    <>
      <Route path='dashboard' element={<AdminDashboard/>}/>
      <Route path='organizations' element={<Organization/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='inventory' element={<Inventory/>}/>
      <Route path='detailInventory/:id' element={<DetailInventory/>}/>
      <Route path='employees' element={<Employees/>}/>
      <Route path='requests' element={<Requests/>}/>
      <Route path='requestsDetail/:id' element={<RequestDetailPage/>}/>
      <Route path='returns' element={<Returns/>}/>
      <Route path='returnsDetail/:id' element={<ReturnsDetailPage/>}/>
      <Route path='complaints' element={<AdminComplaints/>}/>
      <Route path='createComplaints' element={<CreateComplaint/>}/>
      <Route path='complaintsDetail/:id' element={<ComplaintsDetailPage/>}/>
      <Route path='submittedDetail/:id' element={<SubmittedDetailPage/>}/>
      <Route path='vendors' element={<Vendors/>}/>
      <Route path='createInventory' element ={<CreateInventory/>}/>
      <Route path='addCategory' element ={<AddCategory/>}/>
      <Route path='addEmployee' element ={<AddEmployee/>}/>
      <Route path='employeeDetail' element ={<EmployeeDetail/>}/>
      <Route path='addVendors' element ={<AddVendors/>}/>
    </>
  );
  const employeeRoutes = (
    <>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='complaints' element={<Complaints/>}/>
    </>
  );


  return (
      <div className="App">
        <Router>
          {userRole === 'superadmin' ? <ResponsiveAppBar role={'superAdmin'} /> : null}
          <Routes>
            {userRole === 'superadmin' ? superAdminRoutes :
             userRole === 'admin' ? adminRoutes :
             userRole === 'employee' ? employeeRoutes : null}
          </Routes>
        </Router>
      </div>
    );
}

export default App;



