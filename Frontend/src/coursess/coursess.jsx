import Courses from "../components/courses";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";


export default function Coursess(){
    return(
        <div>
            <Navbar/>
            <div className="min-h-screen">
                <Courses/>
            </div>
            <Footer/>
        </div>
    )
}