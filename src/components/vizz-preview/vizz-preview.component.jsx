import React from 'react';
import VizzCard from '../vizz-card/vizz-card.component';
import './vizz-preview.styles.scss';

const VizzPreview = ({ collection, title }) => {
    return (
        <div>
            <h5 className="strip-title">{title}</h5>
            <div className="strip">
                {
                    collection.map(item => {
                        return <VizzCard element={item} key={item.id} />
                    })
                }
            </div>
        </div>
    );
}

export default VizzPreview;