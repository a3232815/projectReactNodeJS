import { useSelector, useDispatch } from "react-redux";
import { deleteOrder } from '../Store/actions/allOrders'
import { delOrder } from '../Store/actions/oneOrder'
import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import OrderCompletion from "./OrderCompletion";


function OrderDetails() {
  let datelsOrd = useSelector(state => state.oneOrdReduser.thisOrder)//פונקציה השולפת פרמטר מהסטייט הכללי
  let thisBasket = useSelector(state => state.oneOrdReduser.basket)
  let d = useDispatch();//פונקציה השולפת פרמטר מהסטייט הכללי
  const deleteO = () => {
    // if (datelsOrd.dueDate <= new Date()) {
      d(deleteOrder(datelsOrd.id))
      thisBasket = d(delOrder());
      datelsOrd.userId = ""
      datelsOrd.ordarDate =new Date()
      datelsOrd.dueDate = ""
    // }
  }

  return (<>
    <div >

      <div className="basketItem">
        <h1>פרטי הזמנה</h1>
        <div>קוד המשתמש: {datelsOrd.userId}</div>
        <div>תאריך הזמנה: {datelsOrd.ordarDate}</div>
        <div>תאריך תפוגה: {datelsOrd.dueDate}</div>
      </div>

      {thisBasket.map((item) => {
        return <div key={item.id} className="basketItem">
          {/*    
                              <div>{item.name}</div>
                               <img src={item.picture} className="imgIn"></img>
                               <div>{item.description}</div>
                               <div>{item.price}</div>
                               <div>{item.company}</div>
                               {/* <div>{item.manufacturingDate}</div>  */}
          {/* <div>{item.canDisassemblyAndAssembly}</div> */}
          {/* <input type="button" value="מחיקה מהסל" onClick={()=>{del(item)}} ></input> */}



          <Card sx={{ display: 'flex' }} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }} width="85%">
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {item.description}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {item.price} $ לפריט בודד x {item.qty} מספר פריטים
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  <b>{item.price*item.qty} $ סה"כ</b>
                </Typography>

              </CardContent>

            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.picture}
              alt="אין חיבור לתמונה"
            />
          </Card>
         

        </div>
      })}



    </div>
    <div >

      <button value="מחק כל ההזמנה" id="deletAll" onClick={() => { deleteO() }} className="bord">מחק את כל ההזמנה</button>
    </div>
  </>
  );
}
export default OrderDetails;