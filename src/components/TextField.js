import React from "react"
import { ErrorMessage, useField } from "formik"

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label className="mt-12 text-teal-700 font-bold" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`shadow appearance-none border-2 rounded w-100 ml-3 ${
          meta.touched &&
          meta.error &&
          "w-100 h-10 px-3 space-y-4 text-base placeholder-gray-600 border border-red-700 rounded-lg focus:shadow-outline"
        }`}
        {...field}
        {...props}
        id="username"
        type="text"
      ></input>
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-sm text-red-700 mb-2 font-bold"
      />
    </div>
  )
}
