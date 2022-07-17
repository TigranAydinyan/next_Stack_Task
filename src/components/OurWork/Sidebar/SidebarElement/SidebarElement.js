import React from 'react';

function SidebarElement({ photo, title, checked, onSelect, id }) {
    return (
        <div
            className="SidebarElement"
            style={{
                background: checked ? 'none' : '#FFFFFF',
                borderLeft: checked ? '8px solid #FFDB11' : 'none',
            }}
            onClick={() => onSelect(id)}
        >
            <img src={photo} alt="" className="SidebarIcon" />
            <p className="sidebarTitle">{title}</p>
        </div>
    );
}

export default SidebarElement;
