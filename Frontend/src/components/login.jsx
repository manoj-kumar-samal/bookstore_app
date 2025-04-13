import { Link } from "react-router-dom";


export default function Login(){
    return(
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to='/'><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
                    </form>
                    <h3 className="font-bold text-lg mb-5">Login</h3>
                    <form>
                        <dl>
                            <dt className="mb-1">Email</dt>
                            <dd>
                                <input type="email" placeholder="Enter Your Email" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                            <dt className="mt-2">Password</dt>
                            <dd className="mt-1">
                                <input type="password" placeholder="Password" className="w-80 outline-none px-3 border rounded-md"></input>
                            </dd>
                        </dl>
                        <button className="btn bg-pink-500 rounded-md mt-5 text-gray-100">Login</button>
                    </form>
                    <div className="mt-3">
                        New Here ?<Link to='/register' className="btn btn-link no-underline">Register</Link>
                    </div>
                </div>
            </dialog>
        </div>
    )
}