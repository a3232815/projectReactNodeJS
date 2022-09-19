import axios from "axios";
import { useDispatch,useSelector } from 'react-redux'
import {saveAllOrders} from '../Store/actions/allOrders'
import * as React from 'react';
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ListOrders() {
  let dispatch=useDispatch();
 useEffect(() => {
    axios.get("http://localhost:4000/order").then(res => {
        dispatch(saveAllOrders(res.data))
    });
})
let arrOrd=useSelector(state=>state.allOrderRedus.arrOrders)
    return (
      <div className="flaxAllItems">
          {/* <button onClick={fromSharat}>show products</button> */}
          {arrOrd.map((item)=>{
            
             return (
                                  <div key={item.id} className="flexItem">
                                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>קוד הזמנה: {item.id}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          תאריך הזמנה: {item.ordarDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          תאריך משלוח {item.dueDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          קוד משתמש: {item.userId}
          </Typography>
          {item.arrProducts && <Typography gutterBottom variant="h5" component="div">
            סל קניות:         
          </Typography>
          }
          {item.arrProducts? <div> {item.arrProducts.map((i,index)=>{return <div key={index}>{i.name}</div>})}</div>:
          <Typography gutterBottom variant="h5" component="div">אין מוצרים בהזמנה זו</Typography>}
         
          
        </CardContent>
      </CardActionArea>
    </Card>
                                  </div>
                              );
          })}


      </div>
    );
  }
  export default ListOrders;
  

 
