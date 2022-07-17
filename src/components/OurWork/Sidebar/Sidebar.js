import React, { useState } from 'react';
import vectorUp from 'assets/images/Sidebar/VectorUp.svg';
import vectorDown from 'assets/images/Sidebar/VectorDown.svg';
import SidebarElement from './SidebarElement/SidebarElement';
import { sidebarItems } from 'config/sidebarItems';

function Sidebar() {
    const [selectedItemId, setSelectedItemId] = useState(1);

    const onSelect = (id) => {
        setSelectedItemId(id);
    };

    const onVectorUp = () => {
        if (selectedItemId === 1) return;
        setSelectedItemId((prev) => prev - 1);
    };

    const onVectorDown = () => {
        if (selectedItemId === 7) return;
        setSelectedItemId((prev) => prev + 1);
    };

    return (
        <div className="sidebar">
            <div className="sidebarUpVect" onClick={onVectorUp}>
                <img src={vectorUp} alt="" className="vectorUp" />
            </div>
            {sidebarItems.map((item) => (
                <SidebarElement
                    photo={item.image}
                    title={item.title}
                    checked={selectedItemId === item.id}
                    key={item.id}
                    id={item.id}
                    onSelect={onSelect}
                />
            ))}
            <div className="sidebarDownVect" onClick={onVectorDown}>
                <img src={vectorDown} alt="" className="vectorDown" />
            </div>
        </div>
    );
}

export default Sidebar;
