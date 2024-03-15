import { Link } from 'react-router-dom'

export default function Logout(){
    return(
        <div>
            <ul className="nav navbar">
                <li className="nav-item">
                    <Link to="history" className="nav-link">Order history</Link>
                </li>
                <li className="nav-item">
                    <Link to="logout" className="nav-link">LOGOUT</Link>
                </li>
            </ul>
        </div>
    )
}