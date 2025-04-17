import { Link, useNavigate } from "react-router-dom";
import {useFormik} from 'formik';
// import yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";
export default function Login(){
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        // validationSchema:yup.object({
        //     email:yup.string().required("Email Required"),
        //     password:yup.string().required("Password Required").min(4,"Password must atleast 4 chars")
        // }),
        onSubmit:(value)=>{
            axios.get("http://127.0.0.1:4030/users")
            .then(response=>{
                var userDetails;
                response.data.map(items=>{
                    if(items.email===value.email){
                        userDetails=items;
                    }
                })
                if(userDetails){
                    console.log(value.password)
                    if(userDetails.password===value.password){
                        toast.success('Loggedin Successful!');
                        navigate('/course');
                    }else{
                        toast.error('Invalid-Password!');
                    }
                }else{
                    toast.error('User not exist!');
                }
            })
        }
    })


    return(
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to='/'><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
                    </form>
                    <h3 className="font-bold text-lg mb-5">Login</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <dl>
                            <dt className="mb-1">Email</dt>
                            <dd>
                                <input onChange={formik.handleChange} name="email" type="email" placeholder="Enter Your Email" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                            <dt className="mt-2">Password</dt>
                            <dd className="mt-1">
                                <input onChange={formik.handleChange} name="password" type="password" placeholder="Password" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                        </dl>
                        <button type="submit" className="btn bg-pink-500 rounded-md mt-5 text-gray-100">Login</button>
                    </form>
                    <div className="mt-3">
                        New Here ?<Link to='/register' className="btn btn-link no-underline">Register</Link>
                    </div>
                </div>
            </dialog>
        </div>
    )
}