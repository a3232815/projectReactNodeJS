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
import {useDispatch } from 'react-redux'
import {changeUser} from '../Store/actions/user'
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {
  let navigate=useNavigate();
  let user = {// איתחול משתנה מוצר בסטייט
    name: "",
    password: "",
    phone:"",
    email:""
  }
  let dispatch = useDispatch();

  const handleSubmit = (event) => {//פונקצית שליחת הטופס
    event.preventDefault();//ביטול פעולת השליחה האוטומטית
    const data = new FormData(event.currentTarget);
    user.name = data.get('name')
    user.password = data.get('password')
    console.log(user)
    if(user.password=="manager" && user.name=="elisheva")
    {
      dispatch(changeUser("manager"))
    }
    else
    {
      axios.get("http://localhost:4000/user/"+data.get('password')).then(res => {
        if (!(user.password == res.data.id && user.name == res.data.name)){
          alert('משתמש אינו קיים')
        }
        else {
          dispatch(changeUser("simple"));
          alert("ברוכ/ה הבא/ה")
          navigate("/Home");
          
        }
      });
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
            Sign in
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}