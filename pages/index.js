import { AppContextProvider } from "../src/components/AppContext"
import Link from "next/link"
import FormAddEntries from "../src/components/FormAddEntries"

const HomePage = () => {
  return (
    <AppContextProvider>
      <div className="grid place-items-center">
        <h1 className="font-bold text-4xl text-cyan-900">Add new entry</h1>
        <Link href="/journal">
          <a className="text-xl text-teal-600">Journal</a>
        </Link>
        <Link href="/">
          <a className="text-xl text-teal-600">Add entry</a>
        </Link>
        <FormAddEntries />
      </div>
    </AppContextProvider>
  )
}
export default HomePage
