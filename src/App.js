import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home/Home';
import AuthProvider from './components/Context/AuthProvider';
import AddServices from './components/AddServices/AddServices';
import Footer from './components/Footer/Footer';
import DisplayService from './components/DisplayService/DisplayService';
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder';
import AddProductInfo from './components/AddProductInfo/AddProductInfo';
import AddServicePost from './components/AddServicePost/AddServicePost';
import OrderForm from './components/OrderForm/OrderForm';
import ManageOrder from './components/ManageOrder/ManageOrder';
import AllOrderPerson from './components/AllOrderPerson/AllOrderPerson';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DynamicDisplayProduct from './components/DynamicDisplayProduct/DynamicDisplayProduct';




function App() {
  return (
    <div>
      <AuthProvider>
        
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
         
         <Route exact path="/addservices">
          <AddServices></AddServices>
         </Route>
         <Route exact path="/slider">
           <DisplayService></DisplayService>
         </Route>
         <PrivateRoute exact path="/booking">
           <Booking></Booking>
         </PrivateRoute>
        
         <Route exact path="/placeOrder">
           <PlaceOrder></PlaceOrder>
         </Route>
        <Route exact path="/confirmOrder/:id">
          <ConfirmOrder></ConfirmOrder>
        </Route>
        <Route exact path="/orderForm">
          <OrderForm></OrderForm>
        </Route>
        <Route exact path="/addServicePost">
          <AddServicePost></AddServicePost>
        </Route>
        <Route exact path="/addProductInfo">
          <AddProductInfo></AddProductInfo>
        </Route>
        <Route exact path="/manageOrder">
          <ManageOrder></ManageOrder>
        </Route>
        <Route exact path="allOrderPerson">
          <AllOrderPerson></AllOrderPerson>
        </Route>
        <Route exact path="/dynamicDisplayProduct">
          <DynamicDisplayProduct></DynamicDisplayProduct>
        </Route>
         <Route exact path="/login">
           <Login></Login>
         </Route>
         <Route exact path="/footer">
           <Footer></Footer>
         </Route>
          <Route path='*'>
         <NotFound></NotFound>
         </Route> 
        </Switch>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
