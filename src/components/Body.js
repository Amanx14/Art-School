import { HERO_IMG } from "../utils/constant";
import Safety from "./Safety";
import Courses from "./Courses";
import Footer from "./Footer";

const Body = () => {
    return <>
        <div className="body">
            <div className="box">
                <div className="content">
                    <h1 style={{textAlign:"center"}}>CRE</h1>
                    <h1 style={{textAlign:"center"}}>ATIV</h1>
                    <h1 style={{textAlign:"center"}}>ITY.</h1>
                    <br />
                    <h1 style={{textAlign:"center"}}>^_-</h1>
                </div>
            </div>
        </div>
        <Safety/>
        <Courses />
        <Footer />
    </>
}

export default Body;