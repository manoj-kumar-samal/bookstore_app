

import { Link, useNavigate } from "react-router-dom";
import Login from "./login";
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";


export default function Register(){
    let navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            fullname:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            fullname:yup.string().required("Name Required"),
            email:yup.string().required("Email Required"),
            password:yup.string().required("Password Required").min(4,"Password must atleast 4 chars")
        }),
        onSubmit:(value)=>{
            axios.post("http://127.0.0.1:4030/register-user",value)
            .then(response=>{
                console.log(value)
                toast.success('Register Successful!');
                navigate('/')
            })
        }
    })

    function goLogin(){
        document.getElementById("my_modal_3").showModal()
    }

    return(
        <div className="flex justify-center items-center h-screen">
            <div className=" shadow-2xl p-5 rounded">
                <div className="flex justify-between items-center text-center">
                    <h3 className="text-2xl mb-4">Register</h3>
                    <Link to='/'><button className="btn-md">✕</button></Link>
                </div>
                <form onSubmit={formik.handleSubmit}>
                        <dl>
                            <dt>Name</dt>
                            <dd>
                                <input type="text" onChange={formik.handleChange} name="fullname" placeholder="Enter Your Name" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                            <dd className="text-red-600">{formik.errors.name}</dd>
                            <dt className="mb-1">Email</dt>
                            <dd>
                                <input type="email" onChange={formik.handleChange} name="email" placeholder="Enter Your Email" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                            <dd className="text-red-600">{formik.errors.email}</dd>
                            <dt className="mt-2">Password</dt>
                            <dd className="mt-1">
                                <input type="password" onChange={formik.handleChange} name="password" placeholder="Enter Your Password" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                            <dd className="text-red-600">{formik.errors.password}</dd>
                        </dl>
                        <button type="submit" className="btn bg-pink-500 rounded-md mt-5 text-gray-100">Register</button>
                </form>
                <div className="mt-2">
                    Already have an account ?<button onClick={goLogin} className="btn btn-link no-underline">Login</button>
                    <Login/>
                </div>
            </div>
        </div>
    )
}