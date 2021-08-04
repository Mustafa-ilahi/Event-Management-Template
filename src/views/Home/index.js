import { Link } from "react-router-dom";
import './index.css'
import mailIcon from '../../assets/mail-icon.PNG';
import callIcon from '../../assets/call-icon.PNG';
import headerIcon from '../../assets/header-icon.PNG';
export default function Home() {
    return(
        <div>
            <div id="top-div">
                <p className="mail-contact-no"><img src={mailIcon} className="top-icons"/> customertraveltriange@gmail.com  &nbsp; &nbsp; | </p> 
                <p className="mail-contact-no">&nbsp; &nbsp; <img src={callIcon} className="top-icons"/> 111-222-333</p>
                <img src={headerIcon} id="header-icon"/>
            </div>
            {/* <Link to="/login">Login now</Link> */}
        </div>
    )
}