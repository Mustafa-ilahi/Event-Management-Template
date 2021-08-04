import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <h1>Home</h1>
            {/* <p id="not-member-log-in">Not a member yet? &nbsp;
                <Link to="/signup" id="signup-tag">Sign up now</Link>
            </p> */}
            <Link to="/login">Login now</Link>
        </div>
    )
}