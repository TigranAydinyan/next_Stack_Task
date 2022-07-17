import React from 'react';
import SelectRange from './SelectRange/SelectRange';

function SelectSQ() {
    return (
        <div className="selectSQ">
            <div className="select">
                <h6 className="selectSqFt">Select SQ/FT</h6>
            </div>
            <div className="selectRange">
                <SelectRange text="< 1000" checked={true} />
                <SelectRange text="1000-1500" checked={false} />
                <SelectRange text="1500-2000" checked={false} />
                <SelectRange text="2000-3000" checked={false} />
                <SelectRange text="3000-4500" checked={false} />
            </div>
        </div>
    );
}

export default SelectSQ;
