import { Link } from 'react-router-dom'

export default function LoginComp(){
    return (
    <div>
        <ul className="nav navbar">
            <li className="nav-item">
                <Link to="/register" className="nav-link">REGISTER</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">LOGIN</Link>
            </li>
        </ul>
    </div>
    )
}