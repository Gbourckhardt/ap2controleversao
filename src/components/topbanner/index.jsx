import DoutorWakaLogo from "./imgs/logo.png";
import "./style.css";


export function TopBanner() {
    return (

        <div className="topbanner">
            <img src={DoutorWakaLogo} alt="Dr.Waka" className="topbanner" />
            <center className="topbanner">WEB WORLD</center>
        </div>


    );
}