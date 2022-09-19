import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import * as React from 'react';
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addTobasket } from '../Store/actions/oneOrder'
import axios from "axios";
import { saveAllProduct } from '../Store/actions/Product'
import { deleteProduct } from "../Store/actions/Product";
import "../cssPages/ListProduct.css"


const ExpandMore = styled((props) => {//פונקציה שקשורה לספריית מוי-ספריית העיצוב
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



export default function ListProduct() {
    let localUser = useSelector(state => state.userRedus.currentUser)
    const [expanded, setExpanded] = React.useState(false);//חלק קוד של מוי-ספרית עיצוב 
    const handleExpandClick = () => {//חלק קוד של מוי-ספרית עיצוב 
        setExpanded(!expanded);
    };
    let dispatch = useDispatch();//מצביע לפונקציה של עידכון הסטייט הכללי
    useEffect(() => {
        axios.get("http://localhost:4000/product").then(res => {
            dispatch(saveAllProduct(res.data))

        });
    })

    let prods = useSelector(state => state.prodRedus.arrProduct)//פונקציה השולפת פרמטר מהסטייט הכללי
    // let addBasket = useSelector(state => state.oneOrd.addProduct)//פונקציה השולפת פרמטר מהסטייט הכללי
    const addThis = (item) => {//פונק' הוספצ מוצר לסל- עדכון ברדוסר    
        dispatch(addTobasket(item, 1))
    }
    const delProduct = (itemId) => {
        console.log(itemId)
        dispatch(deleteProduct(itemId))
    }

    return (
        <div className="flaxAllItems container">
            
            {prods.map((item) => {
                return (

                    <Card sx={{ maxWidth: 345 }} key={item.id} className="flexItem">
                        <CardHeader
                            avatar={//סמל עיגול בכל כרטיס
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <IconButton aria-label="add to favorites" style={{ backgroundColor: "white" }}>
                                        <FavoriteIcon />
                                    </IconButton>
                                </Avatar>
                            }


                            title={item.name}
                            subheader={item.company}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.picture}
                            alt="אין חיבור לתמונה"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <b>{item.price} ₪</b>
                            </Typography>
                        </CardContent>
                        {localUser=="manager"?<button  onClick={()=>delProduct(item.id)} >מחק פריט</button>:
                        <button onClick={() => { addThis(item) }}>הוסף לסל</button>
                        }                    
                    </Card>
                );
            })}
        </div>
    );
}
