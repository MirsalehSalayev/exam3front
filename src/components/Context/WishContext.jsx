import React, { Children, createContext } from 'react'
import useLocal from '../Hook/useLocal'
export const WishContext = createContext({wish:[]})
export function WishProvider({children}) {

    
  return (
    <WishContext.Provider >
        {children}
    </WishContext.Provider>
    
  )
}

