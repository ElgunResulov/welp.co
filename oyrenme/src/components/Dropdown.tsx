import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Dropdown.tsx'; // Assuming you have a CSS file for styling the dropdown



const Dropdown: React.FC = () => {
    return (
        <div className="btn-group">
            <a className="  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </div>
    )
}

export default Dropdown