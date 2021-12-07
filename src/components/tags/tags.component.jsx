import React from 'react';
import './tags.styles.scss';


const Tags = ({ active, tags, tagsChange }) => {
    const { user, system } = tags;
    return (
        <React.Fragment>
            <div className="filter-box">
                <div>
                    <div className={`tag tag-green ${active === 'all' ? 'tag-active' : ''}`} onClick={() => tagsChange('all', false)}>
                        all
                    </div>
                    {
                        user.map(tag => (
                            <div key={tag} className={`tag ${active === tag ? 'tag-active' : 'tag-green'}`}
                                onClick={() => tagsChange(tag, true)}> {tag}</div>
                        ))
                    }
                    {
                        system.map(tag => (
                            <div key={tag} className={`tag ${active === tag ? 'tag-active' : 'tag-blue'}`}
                                onClick={() => tagsChange(tag, false)}> {tag}</div>
                        ))
                    }
                </div >
            </div >
        </React.Fragment >
    );
}

export default Tags;