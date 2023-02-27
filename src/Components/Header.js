import { AppBar, Container,createTheme,FormControl,MenuItem,Select,ThemeProvider,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'



const Header = () => {

  const navigate = useNavigate()

  const { currency , setCurrency } = CryptoState()

  console.log(currency)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme} >
      <AppBar color='transparent' position='static' >
      <Container>
        <Toolbar>
          <Typography onClick = {() => { navigate('/') }} style={{
            flex : 1 ,
            color : "gold" , 
            fontFamily : "Montserrat" , 
            fontWeight : "bold" , 
            cursor : "pointer"
          }} >Cryptso Hunter</Typography>
          <FormControl>
          <Select variant='outlined' style={{
            width : 100 ,
            height : 40 ,
            marginRight : 15
          }}
          value = {currency} 
          onChange = { (e) => setCurrency(e.target.value) }
           >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'INR'}>INR</MenuItem>
          </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header

