import Header from "@/Component/Header/header";
import Footer from "@/Component/Header/footer";
import Image from "next/image";
import { univers_image } from "@/Assets/Assets";
import './page.css';



const Purpose=()=>{
    return(
        <div className="Main-Purpose">
            <Header/>
            <div className="Main-Purpose-Titles">
                <p></p>
                <p></p>
                <p>Purpose</p>
                <p>eaneer strives to deliver top-tier electrical</p>
                <p>solutions backed by extensive technical </p>
                <p>expertise.</p>
            </div>
        </div>

    )
}
export default Purpose;