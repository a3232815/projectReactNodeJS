import { useState } from "react";
import { connect, useDispatch } from 'react-redux'
import { addProduct, saveAllProduct } from "../Store/actions/Product"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";


const AddProduct = (props) => {

  let [Product, setProduct] = useState({// איתחול משתנה מוצר בסטייט
    id: "", name: "", description: "", picture: "", price: "", company: "",
    manufacturingDate: new Date(), canDisassemblyAndAssembly: false
  })

  let [errors, setErrors] = useState({});


  const validation = () => {//פונק' הבודקת תקינות על הטופס
    let err = {};//מערך טעויות מקומי בתוך הפונק' הוא ישלח לתוך המערך שנמצא בסטייט
    let isFormValid = true;//האם הטופס תקין 
    if (!Product.name || !Product.name.trim()) {
      isFormValid = false;
      err.name = { message: "name is required" }
    }

    if (Product.price <= 0) {
      isFormValid = false;
      err.price = { message: "amount must be more than 0" }
    }
    console.log(err)//עד כאן הכל תקין
    setErrors(err);// למה לא מתעדכן לי המשתנה???????????????????????המערך בסטייט נהיה זהה למערך שבו רשמנו טעויות בפונק' הנוכחית
    console.log(errors)//הערה: לא ניתן לראות שינויים בסטייט בקונסולן
    return isFormValid//מחזיר האם הטופס תקין
  }

  let dispatch = useDispatch();//מצביע לפונקציה שנשתמש בה בהמשך לעידכון הסטייט הכללי בפרוייקט
  const save = (e) => {//פונקציה שמטפלת שישמור נכון- אחרת יש בעיות
    e.preventDefault();;//מבטל את ברירת המחדל של פעולת השליחה
    if (!validation()) {
      return;
    }
    console.log(Product)
    axios.post("http://localhost:4000/product", Product).then(res => {
      alert("פריט נוסף בצלחה")
      dispatch(addProduct(res.data))
      navigator('/ListProduct');
    }).catch(err => {
      console.log(err);
    })
  }

  const change = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let inputType = e.target.type;
    if (inputType == "number")
      inputValue = +inputValue;
    setProduct({ ...Product, [inputName]: inputValue })
  }

  return (
    <div >
      <h1 className="titles">הוספת מוצר</h1>
      <form onSubmit={save} className="formAdd">
      
        <div>
          {/* <input type={"text"} value={Product.name} placeholder="שם מוצר" name="name" onChange={change} /> */}
          <TextField id="standard-basic" label="שם מוצר" variant="standard" value={Product.name} name="name" onChange={change} />
          {errors.name && <div>{errors.name.message}</div>}
        </div>
        <div>

          {/* <input type={"text"} value={Product.description} placeholder="תאור מוצר" name="description" onChange={change} /> */}
          <TextField id="standard-basic" label="תאור מוצר" variant="standard" value={Product.description} name="description" onChange={change} />

        </div>
        <div>

          {/* <input type={"text"} value={Product.picture} placeholder="ניתוב תמונה" name="picture" onChange={change} /> */}
          <TextField id="standard-basic" label="ניתוב תמונה" variant="standard" value={Product.picture} name="picture" onChange={change} />

        </div>

        <div >.</div>

        <div>

          <input type={"number"} value={Product.price} placeholder="מחיר" name="price" onChange={change} />
          {errors.price && <div>{errors.price.message}</div>}
        </div>
        <div>

          {/* <input type={"text"} value={Product.company} placeholder="חברה" name="company" onChange={change} /> */}
          <TextField id="standard-basic" label="חברה" variant="standard" value={Product.company} placeholder="חברה" name="company" onChange={change} />

        </div>
        <div >.</div>
        <div>
          <label>תאריך יצור</label>
          <br></br>
          <input type={"Date"} value={Product.manufacturingDate} placeholder="תאריך יצור" name="manufacturingDate" onChange={change} />

        </div>
        <div>
          <br></br>
          <label>יש יכולת פירוק והרכבה?</label>
          <input type={"checkbox"} value={Product.canDisassemblyAndAssembly} placeholder="יש יכולת פירוק והרכבה?" name="canDisassemblyAndAssembly" onChange={change} />          
        </div>

        <br></br>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >


        </Box>



        <button type={"submit"}  onSubmit={save} >הוסף</button>
      </form>
    </div>

  );
}

export default AddProduct;