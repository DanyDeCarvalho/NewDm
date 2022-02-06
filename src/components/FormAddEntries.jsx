import { useCallback, useContext } from "react"
import { AppContext } from "./AppContext"
import { Formik, Form } from "formik"
import { TextField } from "./TextField"
import * as Yup from "yup"

const FormAddEntries = () => {
  const { addAmount } = useContext(AppContext)

  const validate = Yup.object({
    amount: Yup.number()
      .required("amount is required")
      .typeError("amount must be a number, for a float une a dot not a coma"),
    description: Yup.string()
      .required("description must be enter")
      .typeError("write a description !"),
  })
  const onSub = useCallback(
    (values, { resetForm }) => {
      addAmount({
        amount: Number(values.amount),
        description: values.description,
      })

      resetForm()

      return true
    },
    [addAmount]
  )

  return (
    <Formik
      initialValues={{
        amount: "0",
        description: "",
      }}
      validationSchema={validate}
      onSubmit={onSub}
    >
      {({ formik }) => (
        <Form>
          <TextField
            className="block text-teal-700 text-sm font-bold mb-2 border-2 mt-2"
            label="Amount"
            name="amount"
            type="text"
          />
          <TextField
            className="block text-teal-700 text-sm font-bold mb-2 border-2 mt-2"
            label="Description"
            name="description"
            type="number"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800 pl-4"
            href="#"
            type="reset"
          >
            Reset
          </button>
        </Form>
      )}
    </Formik>
  )
}
export default FormAddEntries
