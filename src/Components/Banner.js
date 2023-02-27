import { Container, Typography } from '@mui/material'
import React from 'react'
import Carousel from './Carousel'

const Banner = () => {

    const containerStyle = {
        height : 400 , 
        display : "flex" , 
        flexDirection : "column" ,
        paddingTop : 25 ,
        justifyContent : "space-between"
    }

    const taglineStyle = {
        display : "flex" , 
        height : "40%" , 
        flexDirection : "column" ,
        justifyContent : "center" ,
        textAlign : "center"
    }

  return (
    <div style = {{ backgroundImage : "url(./banner2.jpeg)" }} >
      <Container 
      style={containerStyle}
      >
        <div style = {taglineStyle} >
            <Typography
            variant='h2'
            style={{
                fontWeight : "bold" ,
                marginBottom : 15 ,
                fontFamily : "Montserrat"
            }}
            >
                Crypto Hunter
            </Typography>
            <Typography
            variant='subtitle2'
            style={{
                color : "darkgrey" ,
                textTransform : "capitalize" ,
                fontFamily : "Montserrat"
            }}
            >
                Get all the information regarding your favourite Crypto currency.
            </Typography> 
        </div>
        <Carousel/>
      </Container>
    </div>
  )
}

export default Banner
