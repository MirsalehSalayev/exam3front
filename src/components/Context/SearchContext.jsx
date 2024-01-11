import React, { Children, createContext } from 'react'
// import useLocal from '../Hook/useLocal'
export const SearchContext = createContext({ search: [] })
export function SearchProvider({ children }) {


  return (
    <SearchContext.Provider >
      {children}
    </SearchContext.Provider>

  )
}

