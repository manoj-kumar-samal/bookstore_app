import Banner from "../components/banner";
import { Footer } from "../components/footer";
import Freebooks from "../components/freebooks";
import { Navbar } from "../components/navbar";


export default function Home(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <Freebooks/>
            <Footer/>
        </div>
    )
}