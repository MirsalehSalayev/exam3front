import React, { createContext,useState } from 'react'
import useLocal from '../Hook/useLocal'

export const BasketContext = createContext({ basket: [] })
function BasketProvider({ children }) {
  const [basket, setBasket] = useLocal("basket", [])
  // const [basket, setBasket] = useState([])

  function addToBasket(item) {
    const elementindex = basket.findIndex(x => x._id === item._id)
    console.log(elementindex)
    if (elementindex === -1) {
      setBasket([...basket, { ...item }])
      console.log(elementindex)
      return;
    }
  }

  const data = {
    basket,
    addToBasket,
    setBasket
  }
  return (
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>

  )
}
export default BasketProvider

