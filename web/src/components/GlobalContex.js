import React, {createContext, useContext, useState} from "react"

const GlobalContext = createContext()

export const GlobalContextProvider = props => {

  const [year, setYear] = useState("2020")

  console.log(year)

  return(
    <GlobalContext.Provider value={{
      year,
      setYear
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}