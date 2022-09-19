import { useSelector, useDispatch } from "react-redux";
import { deleteFromBasket } from '../Store/actions/oneOrder'
import { updateQtyOfProduct } from '../Store/actions/oneOrder'
import { delOrder } from "../Store/actions/oneOrder";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Basket() {
  let bask = useSelector(state => state.oneOrdReduser.basket)//פונקציה השולפת פרמטר מהסטייט הכללי
  let d = useDispatch();
  const del = (item) => {
    d(deleteFromBasket(item.id))
  }
  const delAll=()=>{
    d(delOrder());
  }
  const theme = useTheme();

  const addQty = (item) => {
    let count = item.qty;
    d(updateQtyOfProduct(item.id, count + 1));
  }


  const lessQty = (item) => {
    let count = item.qty;
    if(count>0)
    d(updateQtyOfProduct(item.id, count - 1));
    else
    del(item)
  }


  return (<>
    <div >
      {/* Basket */}
      {bask.map((item) => {

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
                  {item.price} $ לפריט בודד x מספר פריטים :{item.qty}
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
          <div>
            <Button color="secondary" onClick={() => { addQty(item) }} ><b>+</b></Button>
            {item.qty}
            <Button color="secondary" onClick={() => { lessQty(item) }} ><b>-</b></Button>
            <Button color="secondary" onClick={() => { del(item) }} className="bord">מחיקה</Button>
          </div>
        </div>
      })}
      {/* <Button id="deletAll" onClick={delAll} >מחק כל ההזמנה</Button> */}

      <button value="מחק כל ההזמנה" id="deletAll" onClick={delAll} className="bord">מחק את כל ההזמנה</button>
    </div>

  </>
  );
}

export default Basket;



// export default function MediaControlCard() {
  // const theme = useTheme();

  // return (
    // <Card sx={{ display: 'flex' }}>
    //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //     <CardContent sx={{ flex: '1 0 auto' }}>
    //       <Typography component="div" variant="h5">
    //         Live From Space
    //       </Typography>
    //       <Typography variant="subtitle1" color="text.secondary" component="div">
    //         Mac Miller
    //       </Typography>
    //     </CardContent>
    //     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
    //       <IconButton aria-label="previous">
    //         {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
    //       </IconButton>
    //       <IconButton aria-label="play/pause">
    //         <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    //       </IconButton>
    //       <IconButton aria-label="next">
    //         {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
    //       </IconButton>
    //     </Box>
    //   </Box>
    //   <CardMedia
    //     component="img"
    //     sx={{ width: 151 }}
    //     image="/static/images/cards/live-from-space.jpg"
    //     alt="Live from space album cover"
    //   />
    // </Card>
  // );
// }