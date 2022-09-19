import {Routes,Route} from "react-router-dom" 
import AddProduct from "./components/AddProduct";
import Basket from "./components/Basket";
import ListOrders from "./components/ListOrders";
import ListProduct from "./components/ListProduct";
import NewUser from "./components/NewUser";
import OrderCompletion from "./components/OrderCompletion";
import OrderDetails from "./components/OrderDetails";

import Login from "./components/Login";
import SmallBasket from "./SmallBasket";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar></Navbar>     
      <Routes>
        <Route path="AddProduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="Basket" element={<Basket/>}></Route>
        <Route path="ListOrders" element={<ListOrders></ListOrders>}></Route>
        <Route path="ListProduct" element={<ListProduct></ListProduct>}></Route>
        <Route path="NewUser" element={<NewUser></NewUser>}></Route>
        <Route path="OrderCompletion" element={<OrderCompletion></OrderCompletion>}></Route>
        <Route path="OrderDetails" element={<OrderDetails></OrderDetails>}></Route>
        
        <Route path="Login" element={<Login></Login>}></Route>
        <Route path="SmallBasket" element={<SmallBasket></SmallBasket>}></Route>
        <Route path="Home" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
      </div>   
  );
}

export default App;
