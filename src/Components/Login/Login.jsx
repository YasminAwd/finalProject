import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { userContext } from '../../Context/UserContext'

export default function Login() {

  let navigate=useNavigate()
  let {setUserLogin}=useContext(userContext);

let validationSchema=yup.object().shape({
  
  email:yup.string().email('email is ivalid').required('email is required'),
  password:yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,'password must start with uppercase').required('password is required'),
  
})

const [apiError,setapiError] =useState('');
const [isLoading,setisLoading] =useState(false);


function login(values){
setisLoading(true)
axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)

.then((apiResponse)=>{
  if(apiResponse?.data?.message ==='success'){

    localStorage.setItem('userToken', apiResponse.data.token)
    setUserLogin( apiResponse.data.token)
    navigate('/home')
    setisLoading(false)
  }
 
}).catch((apiResponse)=>{
  setisLoading(false);
  setapiError(apiResponse?.response?.data?.message);
})


}


const formik= useFormik({
  initialValues:{
    
    email:'',
    password:'',
    
  },validationSchema
  ,onSubmit:login
})

  return <>
    {apiError? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {apiError}
    </div>:null}
    <h2 className='text-main text-3xl font-bold mb-10 text-center'>Login</h2>
    <form className="md:w-1/2 mx-auto" onSubmit={formik.handleSubmit}>
    
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=" "  />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Enter Your Email:</label>
    {formik.errors.email && formik.touched.email? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.email}
    </div>:null}
  </div>
  
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=" "  />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Enter Your Password:</label>
    {formik.errors.password && formik.touched.password? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.password}
    </div>:null}
  </div>
  
  <div className='flex items-center'>

   <button type="submit" className="text-white bg-main-700 hover:bg-main-800 btn1 focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">
    {isLoading?<i className='fas fa-spinner fa-spin'></i>:'Login'}
    
    </button>

    <p className='pl-4'>didn't have account yet? <span className='font-semibold'><Link to={'/'}>register now</Link></span></p>

  </div>

  
</form>

  </>
}
