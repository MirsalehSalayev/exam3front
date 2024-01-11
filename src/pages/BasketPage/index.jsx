import React from 'react'
import { BasketContext } from '../../components/Context/BasketContext'
import { useContext } from 'react'
function BasketPage() {
    const { basket } = useContext(BasketContext) || {}
    return (
        <div>{basket.map((item, index) => (
            <div key={index}>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <h1>
                    {item.name}
                </h1>
                <h2>
                    {item.title}
                </h2>
            </div>
        ))}</div>
    )
}

export default BasketPage