import { Link } from "react-router-dom";
import list from '../../public/list.json'
import Cards from "./cards";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses(){

    const[books,setbooks]=useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:4030/books")
        .then(response=>{
            setbooks(response.data);
        })
    })


    return(
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center">
                <h3 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span></h3>
                <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odit excepturi porro harum, illum a voluptatibus quisquam, at in, suscipit sunt odio assumenda aperiam aliquam obcaecati tenetur natus repellat ab.</p>
                <Link to='/'><button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button></Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                // list.map(item=>
                //     <Cards item={item} key={item.id}/>
                // )
                books.map(item=>
                    <Cards item={item} key={item.id}/>
                )
                
            }
            </div>
        </div>
    )
}