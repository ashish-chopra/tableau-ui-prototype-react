import { faBell, faFireAlt, faFolder, faHistory, faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar-menu.styles.scss';

const SidebarMenu = () => {
    return (
        <div className="left-box">
            <ul>
                <li>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home </Link>
                </li>
                <li className="deaccent-link"> <a><FontAwesomeIcon icon={faFireAlt} /> Trending </a></li>
                <li className="separator"></li>
                <li className="deaccent-link"> <a><FontAwesomeIcon icon={faFolder} /> Library </a></li>
                <li className="deaccent-link"> <a><FontAwesomeIcon icon={faStar} /> Favorites </a></li>
                <li className="separator"></li>
                <li>
                    <Link to="/history"><FontAwesomeIcon icon={faHistory} /> History </Link>
                </li>
                <li className="deaccent-link">
                    <a><FontAwesomeIcon icon={faBell} /> Notifications <span className={`badge badge-primary`}>5</span></a>
                </li>
                <li className="separator"></li>
            </ul>
        </div>
    );
}

export default SidebarMenu;