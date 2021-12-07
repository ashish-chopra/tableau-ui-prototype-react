import React from 'react';

const Filters = ({ filters, filterChange }) => {
    const { time, author } = filters;
    return (
        <React.Fragment>
            <div className="history-picker">
                <div className="pick-box">
                    <div>TIME</div>
                    <ul>
                        <li>Last hour</li>
                        <li>Last 24 hours</li>
                        <li ><a className={`action ${time ? 'action-active' : ""}`} onClick={() => filterChange('time')}>Last 7 days &nbsp; &nbsp;<span className="close-icon" title="remove filter">&times;</span></a></li>
                        <li>Last 4 weeks</li>
                        <li>All time</li>
                    </ul>
                </div>
                <div className="pick-box">
                    <div>TYPE</div>
                    <ul>
                        <li></li>
                        <li><a className="action action-active no-remove">Vizzes &nbsp; &nbsp;<span className="close-icon">&times;</span></a></li>
                        <li>Data Sources</li>
                        <li>Workbooks</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="pick-box">
                    <div>SORT BY</div>
                    <ul>
                        <li><a className={`action ${author ? 'action-active' : ""}`} onClick={() => filterChange('author')}>Author &nbsp; &nbsp;<span className="close-icon" title="remove filter">&times;</span></a></li>
                        <li> View Count</li>
                        <li> Upload Date </li>
                    </ul>
                </div >
                <div className="pick-box"></div>
            </div >
        </React.Fragment>
    )
}

export default Filters;