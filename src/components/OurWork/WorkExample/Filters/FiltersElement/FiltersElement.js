import React from 'react';

function FiltersElement({ photo, title, checked, onChooseFilter }) {
    return (
        <div
            className="filterElement"
            style={{
                backgroundColor: checked ? '#FFDB11' : '#FFFFFF',
            }}
            onClick={() => onChooseFilter(title)}
        >
            <img src={photo} alt="" className="filterIcon" />
            <p className="filterTitle">{title}</p>
        </div>
    );
}

export default FiltersElement;
