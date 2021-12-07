import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './vizz-card.styles.scss';
import { faEllipsisV, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const VizzCard = ({ element, showTime }) => {

    function _getVisitedTime(date) {
        let date1 = new Date('2019-03-14');
        var date2 = new Date(date);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var days = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (days >= 365) {
            return `${Math.ceil(days / 365)} years ago`;
        } else if (days < 365 && days >= 30) {
            return `${Math.ceil(days / 30)} months ago`;
        } else if (days < 30 && days > 7) {
            return `${Math.ceil(days / 7)} weeks ago`;
        } else {
            return `${days} days ago`;
        }
    }
    
    return (
        <div className="item" style={{ maxWidth: 300 }}>
            <div className="item-shot">
                <Link to={`/detail/${element.id}`}><img src={element.thumb} title={element.title} alt={element.title} /></Link>
                <div className="title">{element.title}</div>
                <div className="extras">
                    <span className="profile-pic">{element.author[0].toUpperCase()}</span> {element.author}
                    <span className="spacer"></span>
                    {element.isLive && <i className="fas fa-broadcast-tower text-danger" title="This viz is connected to a live data source"></i>}
                </div>
                <div className="extras extras-space">
                    <span><FontAwesomeIcon icon={faEye} /> &nbsp; {element.views.toLocaleString()} views</span>
                    <span className="spacer"></span>
                    {
                        !showTime ?
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                                &nbsp; &nbsp; &nbsp;
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </span>
                            :
                            <span>{_getVisitedTime(element.last_saved)}</span>
                    }
                </div>
            </div>
        </div>
    )
};

export default VizzCard;