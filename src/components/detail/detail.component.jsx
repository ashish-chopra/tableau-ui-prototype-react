import { faPrint, faShare, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getVizzById, hasPin, togglePin } from '../../service/vizz.service';
import './detail.styles.scss';

const Detail = () => {

    const { id } = useParams();
    const [vizz, setVizz] = useState({});
    const [pinned, setPinned] = useState(false);
    useEffect(() => {
        getVizzById(id).then(data => {
            console.log('inside Detail component', data);
            setVizz(data);
            setPinned(hasPin(data.id));
        });
    }, []);

    function _pinClick() {
        togglePin(vizz.id);
        setPinned(!pinned);
    }
    return (
        <React.Fragment>
            <div className="strip-title">
                <h5>{vizz.title}</h5>
                <span className="spacer"></span>
                <div>
                    <button className={`btn ${pinned ? 'btn-warning' : 'btn-outline-secondary'}`} onClick={_pinClick}>
                        <FontAwesomeIcon icon={faThumbtack} />
                    </button> &nbsp;
                    <button className="btn btn-outline-secondary" title="Print">
                        <FontAwesomeIcon icon={faPrint} />
                    </button> &nbsp;
                    <button className="btn btn-outline-secondary" title="Share">
                        <FontAwesomeIcon icon={faShare} />
                    </button>
                </div>
            </div>

            <div className="detail-container">
                <div className="visual-box">
                    <img src={`../${vizz.img}`} alt="" />
                </div>
                <div className="property-box">
                    <h6>Information</h6>
                    Date: {vizz.last_saved} <br />
                    Author: {vizz.author} <br />
                    {vizz.views} views <br />
                    <br />
                    <div className="tag-container">
                        {
                            vizz.tags && vizz.tags.map(tag => <span className="tag tag-blue">{tag}</span>)
                        }

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Detail;