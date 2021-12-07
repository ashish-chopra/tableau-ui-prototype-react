import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/img/tableau_mono_logo.svg';
import profilePic from '../../assets/img/profile-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className="navbar app-header">
            <div className="navbar-left">
                <a className="nav-item">
                    <FontAwesomeIcon icon={faBars} />
                </a>
                <a className="navbar-brand" href="#">
                    <Logo width="110" />
                </a>
                <div className="search-bar">
                    <input type="text" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <div className="navbar-right">
                <div className="select-bar">
                    <select name="s" id="s">
                        <option value="s">tableau-dev</option>
                        <option value="s">tableau-prod</option>
                        <option value="s">tableau-test</option>
                    </select>
                </div>
                <div className="nav-item">
                    <FontAwesomeIcon icon={faPlus} title="Create a new viz" />
                </div>
                <div className="nav-item">
                    <FontAwesomeIcon icon={faQuestionCircle} title="help" />
                </div>
                <div className="nav-item">
                    <img src={profilePic} className="profile-image" alt="profile picture" />
                </div>
            </div>
        </nav>
    );
}

export default Header;