import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";
import {changeUser} from '../Store/actions/user'

function Navbar() {
let localUser=useSelector(state=> state.userRedus.currentUser) 
let dispatch=useDispatch();
const exit=()=>{
    dispatch(changeUser("start"))
}
    return (
        <>
            {  localUser =="manager"&&<div className="w3-container nav">
                <div className="nav">
                    <nav>
                        <Link to={"Home"} className="w3-bar-item w3-button w3-mobile w3-green ">דף הבית</Link>{" "}
                        <Link to={"ListProduct"} className="w3-bar-item w3-button w3-mobile">המוצרים שלנו</Link>{" "}
                        <Link to={"AddProduct"} className="w3-bar-item w3-button w3-mobile">הוספת מוצר</Link>{" "}
                        <Link to={"ListOrders"} className="w3-bar-item w3-button w3-mobile">רשימת ההזמנות</Link>{" "}
                        <div className="w3-dropdown-hover w3-mobile">
                            {/* <button className="w3-button">Dropdown <i className="fa fa-caret-down"></i></button>
                            <div className="w3-dropdown-content w3-bar-block w3-dark-grey">
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 1</a>
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 2</a>
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 3</a>
                            </div> */}
                        </div>
                        <Button variant="contained" color="success" onClick={exit}>
                            יציאה
                        </Button>

                        {/* </Avatar> */}


                    </nav>
                </div>
            </div>}


            {  localUser =="simple"&&<div className="w3-container nav">
                <div className="nav">

                    <nav>
                        <Link to={"Home"} className="w3-bar-item w3-button w3-mobile w3-green ">דף הבית</Link>{" "}
                        <Link to={"ListProduct"} className="w3-bar-item w3-button w3-mobile">המוצרים שלנו</Link>{" "}
                        <Link to={"Basket"} className="w3-bar-item w3-button w3-mobile">סל</Link>{" "}
                        <Link to={"OrderDetails"} className="w3-bar-item w3-button w3-mobile">פרטי הקניה</Link>{" "}
                        <Link to={"OrderCompletion"} className="w3-bar-item w3-button w3-mobile"> סיום הקניה</Link>{" "}
                        <div className="w3-dropdown-hover w3-mobile">
                            {/* <button className="w3-button">Dropdown <i className="fa fa-caret-down"></i></button>
                            <div className="w3-dropdown-content w3-bar-block w3-dark-grey">
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 1</a>
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 2</a>
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 3</a>
                            </div> */}

                        </div>
                        <Button variant="contained" color="success" onClick={exit} >
                            יציאה
                        </Button>
                    </nav>
                </div>
            </div>
            }


            {localUser !="manager"&&localUser!="simple"&&<div className="w3-container nav">
                <div className="nav">
                    <nav>
                        <Link to={"Home"} className="w3-bar-item w3-button w3-mobile w3-green ">דף הבית</Link>{" "}
                        <Link to={"Login"} className="w3-bar-item w3-button w3-mobile">כניסה</Link>{" "}
                        <Link to={"NewUser"} className="w3-bar-item w3-button w3-mobile">הרשמה</Link>{" "}
                        {/* <Link to={"ListOrders"} className="w3-bar-item w3-button w3-mobile">List Orders</Link>{" "} */}
                        <div className="w3-dropdown-hover w3-mobile">
                      
                            {/* <button className="w3-button">Dropdown <i className="fa fa-caret-down"></i></button>
                            <div className="w3-dropdown-content w3-bar-block w3-dark-grey">
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 1</a>
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 2</a>
                                <a href="#" className="w3-bar-item w3-button w3-mobile">Link 3</a>
                            </div> */}
                        </div>
                    </nav>
                </div>
            </div>}


        </>
    );
}
export default Navbar;