import { LOGO_URL } from "../utils/contant";


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} className="App-logo" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;