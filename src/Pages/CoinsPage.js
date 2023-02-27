import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import axios from 'axios'
import { SingleCoin } from "../Config/api"
import CoinInfo from '../Components/CoinInfo'
import { Typography, useTheme } from '@mui/material'
import "../Styles/Style.css"




const CoinsPage = () => {

  const {id} = useParams()

  const [ coin , setCoin ] = useState([]);

  const {currency , symbol } = CryptoState()

  const fetchCoin = async () => {
    const {data} = await axios.get(SingleCoin(id))

    setCoin(data)
  }

  console.log(coin)

  useEffect( () => {
    fetchCoin()
  } , [] )

  return (
    <div className = "mainContainer">
      <div className="sidebarStyling" style={{width : "30%" , display : "flex" , flexDirection : "column" , alignItems : "center" , marginTop : 25 , borderRight : "2px solid grey" }} >
      <img
          src={coin?.image}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" style = {{fontWeight : "bold" , marginBottom : 20 , fontFamily : "Montserrat"}} >
          {coin?.name}
        </Typography>

      </div>
      {/* chart  */}
      <CoinInfo coin = {coin} />
    </div>
  )
}

export default CoinsPage
