

import { Link } from "react-router-dom";
import Login from "./login";


export default function Register(){

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
                <form>
                        <dl>
                            <dt>Name</dt>
                            <dd>
                                <input type="text" placeholder="Enter Your Name" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                            <dt className="mb-1">Email</dt>
                            <dd>
                                <input type="email" placeholder="Enter Your Email" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                            <dt className="mt-2">Password</dt>
                            <dd className="mt-1">
                                <input type="password" placeholder="Enter Your Password" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                        </dl>
                        <button className="btn bg-pink-500 rounded-md mt-5 text-gray-100">Register</button>
                </form>
                <div className="mt-2">
                    Already have an account ?<button onClick={goLogin} className="btn btn-link no-underline">Login</button>
                    <Login/>
                </div>
            </div>
        </div>
    )
}