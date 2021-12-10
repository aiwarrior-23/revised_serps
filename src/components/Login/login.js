import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Login() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };







    return (
        <Stack direction="row">
            <Box style={{ height: '100%', width: '50%' }}>
                <Typography variant="h5" component="div" style={{ marginTop: 120, marginLeft: 96, fontWeight: 'bold', fontSize: 33 }}>
                    Login
                </Typography>
                <Button variant="outlined" style={{ top: 20, left: 66, fontSize: 8 }}>Sign in with Google</Button>
                <Stack direction="row" style={{ marginTop: 55 }}>

                    <Typography style={{ color: 'grey', marginLeft: 25 }}>___________</Typography>
                    <Typography style={{ color: 'grey' }}>(or)</Typography>


                    <Typography style={{ color: 'grey' }}>___________</Typography>

                </Stack>

                <Typography style={{ fontWeight: '600', fontSize: '16px', marginLeft: 66, marginTop: 30 }}>Phone Number</Typography>

                <Box
                    component="form"

                    sx={{
                        width: 400,
                        maxWidth: '100%',
                        marginLeft: 5,
                        marginTop: 3
                    }}


                >
                    <TextField fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />

                </Box>

                <Typography style={{ fontWeight: '600', fontSize: '16px', marginLeft: 66, marginTop: 30 }}>Password</Typography>
                <Box
                    component="form"

                    sx={{
                        width: 400,
                        maxWidth: '100%',
                        marginLeft: 5,
                        marginTop: 3
                    }}


                >




                    <FormControl sx={{
                        width: 400,
                        maxWidth: '100%',
                        marginLeft: 1,
                    }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <p style={{ fontSize: '12px', marginLeft: '290px' ,color:'#1976D2'}}>Forgot Password?</p>
                    <Button variant="contained" color="primary" sx={{ top: 10, left: 96 }}>Login</Button>
<Stack direction="row" style={{marginTop:30}}>
<Typography style={{fontSize:'14px'}}>Not Registered yet?</Typography>
                        <Typography style={{ fontSize:'14px',marginLeft:8,color:'#1967D2'}}>Create Account</Typography>
</Stack>



                </Box>


            </Box>
            <Box><img alt="Login" style={{height:'1000px',width:'50%'}} src='Images/loginbg.png'/></Box>

        </Stack>
    )
}