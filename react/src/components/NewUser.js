import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { connect, useDispatch } from 'react-redux'
import {changeUser} from '../Store/actions/user'
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
  let navigate=useNavigate();
  let hasIt=false;
  let user = {// איתחול משתנה מוצר בסטייט
    id: "",
    name: "",
    phone:"",
    email:""
  }
  let dispatch = useDispatch();

  const handleSubmit = (event) => {//פונקצית שליחת הטופס
    event.preventDefault();//ביטול פעולת השליחה האוטומטית
    const data = new FormData(event.currentTarget);
    
    user.id = data.get('password')
    user.name = data.get('name')
    user.phone=data.get('phone')
    user.email=data.get('email')
    console.log(user)
    if(user.id=="manager" )
    {
      alert('סיסמא לא מאופשרת, בחר סיסמא אחרת')
    }
   
        else{
          axios.get("http://localhost:4000/user/"+data.get('password')).then(res => {
            if (user.password == res.data.id ){
                    alert('סיסמא לא מאופשרת, בחר סיסמא אחרת')
                    hasIt=true
                  }
                  
          })
          if(hasIt==false)
          axios.post("http://localhost:4000/user",user).then(res => {
            dispatch(changeUser("simple"))
            alert("ברוכ/ה הבא/ה")
            navigate("/Home")
          }).catch(err => {
            console.log(err);
            // alert("כישלון הוספת פריט-שרת")
          })
        }
       
   
   
  };


  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}