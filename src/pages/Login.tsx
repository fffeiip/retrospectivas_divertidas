import { useContext, useState } from 'react'
import AuthContext from '../contexts/auth'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

interface LoginJson {
    email?: string 
}

function isValidEmail(email : string) {
    let email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return email_regex.test(email)
}

function Login() {
    const { handleLogin } = useContext(AuthContext)
    const [errors, setErrors] = useState<LoginJson>({})

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, onSubmit: values => {
            handleLogin(values)
        }, validate: values => {
            let errors : LoginJson = {};
            if (!values.email) {
                errors.email = 'Email Required';
            } 
            else if (!isValidEmail(values.email)) {
                errors.email = 'Invalid email address';
            }
            setErrors(errors)
            return errors;
        }, 
    })

    return (
        <div className="flex justify-center items-start h-full bg-green-200">
            <div className="w-full max-w-2xl py-20">
                <form onSubmit={formik.handleSubmit} className="text-black bg-green-100 shadow-2xl rounded px-8 py-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input autoComplete="off" type="email" name="email" id="email" className="shadow bg-green-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formik.values.email} onChange={formik.handleChange}/>
                        {errors && <div className=" text-red-700"> {errors.email}</div>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border bg-green-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login