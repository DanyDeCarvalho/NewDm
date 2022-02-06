import { createContext, useCallback, useState, useEffect } from "react"

export const AppContext = createContext()
export const AppContextProvider = (props) => {
  const [amountList, setAmountList] = useState([])
  const [outgoingList, setOugoingList] = useState(0)
  const [incomingList, setIncomingList] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const save = (amountList) => {
    localStorage.setItem("amountList", JSON.stringify(amountList))
  }

  useEffect(() => {
    const outcoming = amountList.reduce((total, current) => {
      if (current.amount < 0) {
        return Number(total) + Number(current.amount)
      }

      return Number(total) + 0
    }, 0)
    setOugoingList(outcoming)
  }, [amountList])

  useEffect(() => {
    const incoming = amountList.reduce((total, current) => {
      if (current.amount > 0) {
        return Number(total) + Number(current.amount)
      }

      return Number(total) + 0
    }, 0)
    setIncomingList(incoming)
  }, [amountList])

  const addAmount = useCallback((amount) => {
    setAmountList((currentAmountList) => [...currentAmountList, amount])
  }, [])

  useEffect(() => {
    const localStoragedata = localStorage.getItem("amountList")

    if (!localStoragedata) {
      setLoaded(true)

      return
    }

    const amountList = JSON.parse(localStoragedata)

    setAmountList(amountList)
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) {
      return
    }

    save(amountList)
  }, [loaded, amountList])

  return (
    <AppContext.Provider
      {...props}
      value={{
        amountList: amountList || [],
        addAmount,
        outgoingList,
        incomingList,
      }}
    />
  )
}

export default AppContext
