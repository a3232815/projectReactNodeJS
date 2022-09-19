import { useState } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import { finishOrder } from "../Store/actions/oneOrder"
import * as React from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import (useSelector)



function OrderCompletion() {
    let bask = useSelector(state => state.oneOrdReduser.basket)
    let [Order, setOrder] = useState({// איתחול משתנה הזמנה בסטייט
        id: "", userId: "", ordarDate: new Date().toISOString().slice(0,10), dueDate: "",
        arrProducts:bask
        
    })

   

   
    let dispatch = useDispatch();//מצביע לפונקציה שנשתמש בה בהמשך לעידכון הסטייט הכללי בפרוייקט
    const save = (e) => {//פונקציה שמטפלת שישמור נכון- אחרת יש בעיות
        e.preventDefault();;//מבטל את ברירת המחדל של פעולת השליחה
        console.log(Order)
        
        axios.post("http://localhost:4000/order",Order).then(res => {
        dispatch(finishOrder(Order))
        // props.addProduct(Product)//האם קשור??????
        })    
    }

    const change = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let inputType = e.target.type;
        if (inputType == "number")
            inputValue = +inputValue;
        setOrder({ ...Order, [inputName]: inputValue })
    }

    return (
        <div >           
            <form onSubmit={save} className="formAdd">
             <h1 className="titles">סיום הקניה</h1>
             <b>מדיניות ומשלוחים:</b>
             <p>
             כשתלחצ/י על "סיום ותשלום" המערכת תגבה את התשלום מחשבונך באופן אוטומטי
                <br></br>
                <br></br>
                משלוח עד 7 ימי עסקים ממועד המשלוח שבחרתם 
                יתכנו עיקובים בתקופות עומס. כגון: חגים, חופשות 
                אין החלפות או החזרות על מוצרים שאריזתם נפתחה
                לכל שאלה ובקשה, ניתן לפנות למוקד הטלפוני שלנו שמספרו: 052-7136554
             </p>
             <b>בחר תאריך למשלוח</b>
             
                {/* <div>
                    <TextField id="standard-basic" label="קוד משתמש" variant="standard" value={Order.userId} name="userId" onChange={change} />                
                </div>
                */}
                <div>
                    {/* <label>תאריך תפוגה</label> */}
                    <input type={"Date"} value={Order.dueDate} name="dueDate" onChange={change} />

                </div>
                <br></br>
                <br></br>
              


                <button type={"submit"} value={"הוסף"} onSubmit={save} >סיום ותשלום </button>
            </form>
        </div>

    );
}
export default OrderCompletion;