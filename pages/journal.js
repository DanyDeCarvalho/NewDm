import { AppContextProvider } from "../src/components/AppContext"
import Dashboard from "../src/components/Dashboard"
import Link from "next/link"

const JournalPage = () => {
  return (
    <AppContextProvider>
      <div className="grid place-items-center">
        <h1 className="font-bold text-4xl text-cyan-900">Journal</h1>
        <Link href="/journal">
          <a className="text-xl text-teal-600">Journal</a>
        </Link>
        <Link href="/">
          <a className="text-xl text-teal-600">Add entry</a>
        </Link>
        <Dashboard />
      </div>
    </AppContextProvider>
  )
}
export default JournalPage
