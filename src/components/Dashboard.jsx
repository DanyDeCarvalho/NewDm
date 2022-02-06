import React, { useContext } from "react"
import { AppContext } from "./AppContext"

const Dashboard = () => {
  const { amountList, incomingList, outgoingList } = useContext(AppContext)

  return (
    <table className="w-1/2 border-solid ">
      <thead className>
        <tr>
          <th className=" border border-black text-green-500">INCOMING</th>
          <th className=" border border-black text-red-500">OUTCOMING</th>
        </tr>
      </thead>
      <tbody>
        {amountList.map(({ amount, description }, index) => (
          <div key={index}>
            <tr
              className={`${
                index % 2 === 0 ? "bg-sky-100" : "bg-white"
              } w-full text-right text-lg `}
            >
              {amount > 0 ? (
                <>
                  <td className="w-1/2 p-1 border-solid border-x-2">
                    <p className="w-full font-bold text-green-500">
                      {amount} €
                    </p>
                    <p>{description}</p>
                  </td>
                  <td className="w-1/2 p-1 border-x-2"></td>
                </>
              ) : (
                <>
                  <td className="w-full p-1 border-x-2"></td>
                  <td className="w-full p-1 border-x-2">
                    <td>
                      <p className="font-bold text-red-500">{amount} €</p>
                      <p>{description}</p>
                    </td>
                  </td>
                </>
              )}
            </tr>
          </div>
        ))}

        <tr className>
          <td className="w-1/2 p-1 border border-black">
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold ">💸💸💸💸</p>
              <p className="font-bold text-green-500">{incomingList} €</p>
            </div>
          </td>
          <td className="w-1/2 p-1 border border-black">
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold">😅😅😅😅</p>
              <p className="font-bold text-red-500">{outgoingList} €</p>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot className="w-full">
        <tr>
          <td colSpan="2" className="w-full p-1">
            <div className="flex flex-row items-center justify-between px-5 py-3 text-2xl">
              <p className="font-bold text-teal-600">RESULT</p>
              <p className="font-bold text-teal-600 ">
                {incomingList + outgoingList} €
              </p>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
export default Dashboard
