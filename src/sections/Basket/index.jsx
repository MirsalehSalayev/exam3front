import React, { useEffect, useState } from 'react'
import { BasketContext } from '../../components/Context/BasketContext'
import { useContext } from 'react'
function Basket() {
    const {addToBasket}=useContext(BasketContext) || {}

    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const response =await fetch("http://localhost:3100")
            const api =await response.json()
            setData(api)
        }
        fetchData()
    },[])
    console.log();
  return (
    <div>{
        data.map((item)=>{
            return(
                <div>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <h1>
                        {item.name}
                    </h1>
                    <h2>
                        {item.title}
                    </h2>
                    <button onClick={()=>addToBasket(item)}>ADD BASKET</button>
                </div>
                
            )
        })
        }

    </div>
  )
}

export default Basket