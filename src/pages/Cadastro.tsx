import {  useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

interface CadastroJson {
  email: string;
  name: string;
  password: string;
  password_confirm: string;
}

interface FormError {
  name?: string;
  email?: string;
  password?: string;
  password_confirm?: string;
}

function isValidEmail(email: string) {
  let email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return email_regex.test(email);
}

function Cadastro() {
  
  const PASSWORD_MINCHAR = 8;
  const [errors, setErrors] = useState<FormError>({
    email: "",
    name: "",
    password: "",
    password_confirm: "",
  });
  
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      password_confirm: "",
    },
    onSubmit: (values) => {
      async function handleCadastro(values: CadastroJson) {
        const response = await window.fetch("http://localhost:8000/api/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
            password_confirm: values.password_confirm,
          }),
        });
        console.log(response)
      }
      handleCadastro(values);
      history.push('/login');
    },
    validate: (values) => {
      let errors: FormError = {};
      if (!values.email) {
        errors.email = "Email Required";
      } else if (!isValidEmail(values.email)) {
        errors.email = "Invalid email address";
      }
      if (values.password.length < PASSWORD_MINCHAR) {
        errors.password = "Minimum of 8 characters";
      }

      if (values.password !== values.password_confirm) {
        errors.password_confirm = "Invalid confirmation";
      }
      setErrors(errors);
      return errors;
    }, 
  });

  return (
    <div className="flex justify-center items-start h-full bg-green-200">
      <div className="w-full max-w-2xl py-20">
        <form
          onSubmit={formik.handleSubmit}
          className="text-black bg-green-100 shadow-2xl rounded px-8 py-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              autoComplete="off"
              type="text"
              name="name"
              id="name"
              className="shadow bg-green-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              className="shadow bg-green-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {errors.email && (
              <div className=" text-red-700"> {errors.email}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border bg-green-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {errors.password && (
              <div className=" text-red-700"> {errors.password}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password Confirmation
            </label>
            <input
              className="shadow appearance-none border bg-green-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password_confirm"
              name="password_confirm"
              value={formik.values.password_confirm}
              onChange={formik.handleChange}
            />
            {errors.password_confirm && (
              <div className=" text-red-700"> {errors.password_confirm}</div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
